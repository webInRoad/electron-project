const { shell, ipcRenderer } = require('electron')
const path = require('path')
window.onload = function () {
	let oBtn1 = document.getElementById('openUrl')
	let oBtn2 = document.getElementById('openFolder')
	oBtn1.addEventListener('click', (ev) => {
		ev.preventDefault()
		let url = oBtn1.getAttribute('href')
		shell.openExternal(url)
	})
	oBtn2.addEventListener('click', () => {
		shell.showItemInFolder(path.resolve(__filename))
	})
}
ipcRenderer.on('preferences', () => {
	let iframe = document.getElementById('webView')
	iframe.src = 'https://www.lagou.com'
})
