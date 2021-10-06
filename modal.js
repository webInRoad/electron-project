const { ipcRenderer } = require('electron')
window.onload = function () {
	ipcRenderer.on('itm', (ev, data) => {
		console.info(data)
		// document.getElementById('txt').innerText = localStorage.getItem('name')
		document.getElementById('txt').innerText = data
		document.getElementById('btn').addEventListener('click', () => {
			ipcRenderer.send('mti', '这是条来自于 modal 的消息')
		})
	})
}
