const remote = require('@electron/remote')
document.addEventListener('DOMContentLoaded', () => {
	let obtn = document.getElementById('btn')
	obtn.addEventListener('click', () => {
		console.info(111)
		// 创建新窗口
		let indexMain = new remote.BrowserWindow({
			parent: remote.getCurrentWindow(),
			width: 200,
			height: 200,
			modal: true
		})
		indexMain.loadFile('modal.html')
		indexMain.on('close', () => {
			indexMain = null
		})
	})
})
