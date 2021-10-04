const { app, BrowserWindow } = require('electron')

function createWindow() {
	let mainWindow = new BrowserWindow({
		width: 600,
		height: 400
	})
	// 在当前窗口中加载指定界面让它显示具体的内容
	mainWindow.loadFile('index.html')
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
app.on('before-quit', () => {
	console.log('5555---->在关闭窗口之前触发')
})
app.on('will-quit', () => {
	console.log('6666---->在窗口关闭并且应用退出时触发')
})
app.on('quit', () => {
	console.log('7777---->在所有窗口被关闭时触发')
})
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
