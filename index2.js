const remote = require('@electron/remote')
document.addEventListener('DOMContentLoaded', () => {
	let aBtn = document
		.getElementsByClassName('windowTool')[0]
		.getElementsByTagName('div')
	const mainWindow = remote.getCurrentWindow()
	aBtn[0].addEventListener('click', () => {
		mainWindow.close()
	})
	aBtn[1].addEventListener('click', () => {
		console.info(mainWindow.isMaximized(), 'mainWindow.isMaximized()')
		if (!mainWindow.isMaximized()) {
			mainWindow.maximize() // 最大化
		} else {
			mainWindow.restore() // 回到原始窗口大小
		}
	})
	aBtn[2].addEventListener('click', () => {
		if (!mainWindow.isMinimized()) {
			mainWindow.minimize() // 最小化
		}
	})
})
