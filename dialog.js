const { dialog } = require('@electron/remote')
window.onload = function () {
	let oBtn = document.getElementById('btn1')
	let oBtn2 = document.getElementById('btn2')
	oBtn.addEventListener('click', () => {
		dialog
			.showOpenDialog({
				title: '文件选择框',
				defaultPath: __dirname,
				buttonLabel: '请选择',
				properties: ['openFile', 'multiSelections'],
				filters: [
					{ name: '代码文件', extensions: ['js', 'json', 'html'] },
					{ name: '媒体类型', extensions: ['avi', 'mp4', 'mp3'] },
					{ name: '图片文件', extensions: ['ico', 'jpeg', 'png'] }
				]
			})
			.then((ret) => {
				console.info(ret)
			})
	})
	oBtn2.addEventListener('click', () => {
		dialog.showErrorBox('自定义标题', '错误信息')
	})
}
