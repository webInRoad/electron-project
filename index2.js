const { getCurrentWindow } = require('@electron/remote')
document.addEventListener('DOMContentLoaded', () => {
	let aBtn = document
		.getElementsByClassName('windowTool')[0]
		.getElementsByTagName('div')
	const mainWindow = getCurrentWindow()
	window.onbeforeunload = function () {
		const isClose = document.getElementsByClassName('isClose')[0]
		const btn = isClose.getElementsByTagName('span')
		isClose.style.display = 'block'
		btn[0].addEventListener('click', () => {
			mainWindow.destroy()
		})
		btn[1].addEventListener('click', () => {
			isClose.style.display = 'none'
		})
		return false
	}

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
