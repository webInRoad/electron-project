const { app, BrowserWindow, Menu, ipcMain } = require('electron')
require('@electron/remote/main').initialize()

console.info(process.platform)
function createWindow() {
	let mainWindow = new BrowserWindow({
		x: 100,
		y: 100, //设置窗口显示的位置，相对于当前屏幕的左上角
		show: false, //默认情况下创建一个窗口对象之后就会显示，设置为 false 就不会显示，就不会有白屏问题
		width: 600,
		height: 400,
		// maxHeight: 600,
		// maxWidth: 1000,
		// minHeight: 200,
		// minWidth: 300, //可以通过 min max 来设置当前应用窗口的最大和最小尺寸
		// resizable: false, // 是否允许缩放应用的窗口大小
		// frame: false, //用于自定义 menu,设置为 false,可以将标题以及菜单隐藏
		// autoHideMenuBar: true, // true 只隐藏菜单
		title: 'electron 标题', // 设置窗口标题，对应的 html 不要设置 title 才会生效
		icon: 'file.ico', // 设置窗口图标
		// transparent: false, // 透明度 没起作用
		webPreferences: {
			nodeIntegration: true, // 配合 contextIsolation 才会起作用
			contextIsolation: false
			// enableRemoteModule: true
		}
	})
	// 1.自定义菜单的内容
	let menuTemp = [
		{
			label: 'File',
			submenu: [
				{
					label: 'New File',
					click() {
						console.info('创建文件')
					}
				},
				{
					label: 'New window'
				},
				{
					type: 'separator'
				},
				{
					label: 'open File'
				},
				{
					label: '关于',
					role: 'about'
				}
			]
		},
		{
			label: 'Edit'
		},
		{
			label: '角色',
			submenu: [
				{ label: '复制', role: 'copy' },
				{
					label: '剪切',
					role: 'cute'
				},
				{
					label: '粘贴',
					role: 'paste'
				},
				{
					label: '最小化',
					role: 'minimize'
				},
				{
					label: '放大',
					role: 'zoomin'
				}
			]
		},
		{
			label: '四种类型',
			submenu: [
				{ label: '选项1', type: 'checkbox' },
				{ label: '选项2', type: 'checkbox' },
				{ label: '选项3', type: 'checkbox' },
				{ type: 'separator' },
				{
					label: 'item1',
					type: 'radio'
				},
				{
					label: 'item2',
					type: 'radio'
				},
				{
					label: 'Windows',
					type: 'submenu',
					role: 'windowMenu'
				}
			]
		},
		{
			label: '其他',
			submenu: [
				{
					label: '打开',
					icon: './file.ico',
					accelerator: 'Ctrl + o',
					click() {
						BrowserWindow.getFocusedWindow().webContents.send(
							'mtp',
							'主进程发送消息给渲染进程'
						)
					}
				}
			]
		}
	]
	// 2.根据上述的模板数据生成一个 menu
	const menu = Menu.buildFromTemplate(menuTemp)
	// 3.将上述的自定义菜单添加到 app 里
	Menu.setApplicationMenu(menu)
	// 在当前窗口中加载指定界面让它显示具体的内容
	mainWindow.loadFile('index.html')
	const contents = mainWindow.webContents
	contents.openDevTools()
	require('@electron/remote/main').enable(contents)
	mainWindow.on('ready-to-show', () => {
		mainWindow.show()
	})
	mainWindow.on('close', () => {
		console.log('8888---->当窗口关闭时触发，此时应删除窗口引用')
		mainWindow = null
	})
	mainWindow.webContents.on('did-finish-load', () => {
		console.log('3333---->导航完成时触发')
	})
	mainWindow.webContents.on('dom-ready', () => {
		console.log('2222---->一个窗口中的文本加载完成')
	})
}
app.on('ready', () => {
	console.log('1111---->app 初始化完成')
	createWindow()
})
app.on('window-all-closed', () => {
	console.log('4444---->所有窗口都被关闭时触发')
	app.quit() // 当定义 window-all-closed 事件时，要手动添加该代码
})
// app.on('before-quit', () => {
// 	console.log('5555---->在关闭窗口之前触发')
// })
// app.on('will-quit', () => {
// 	console.log('6666---->在窗口关闭并且应用退出时触发')
// })
// app.on('quit', () => {
// 	console.log('7777---->在所有窗口被关闭时触发')
// })
// // 当 app 启动之后执行窗口创建等操作
// app.whenReady().then(() => {
// 	const mainWindow = new BrowserWindow({
// 		width: 600,
// 		height: 400
// 	})
// 	// 在当前窗口中加载指定界面让它显示具体的内容
// 	mainWindow.loadFile('index.html')
// 	mainWindow.on('close', () => {
// 		console.log('close')
// 	})
// })
// app.on('window-all-closed', () => {
// 	console.log('window-all-closed')
// 	app.quit()
// })
ipcMain.on('msg1', (ev, data) => {
	console.info(data)
	ev.sender.send('msg1Re', '这是一条来自主进程的反馈消息')
})
ipcMain.on('msg2', (ev, data) => {
	console.info(data)
	ev.returnValue = '这是一条来自主进程的同步反馈消息'
})
