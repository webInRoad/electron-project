const { BrowserWindow } = require('@electron/remote')
document.addEventListener('DOMContentLoaded', () => {
	let obtn = document.getElementById('btn')
	obtn.addEventListener('click', () => {
		console.info(111)
		// 创建新窗口
		let indexMain = new BrowserWindow({
			width: 200,
			height: 200
		})
		indexMain.loadFile('modal.html')
		indexMain.on('close', () => {
			indexMain = null
		})
	})
})
