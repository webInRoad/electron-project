const { ipcRenderer } = require('electron')
window.onload = function () {
	document.getElementById('openModal').addEventListener('click', () => {
		ipcRenderer.send('openModal', '这是条来自于 index 进程的消息')
		// localStorage.setItem('name', 'zhang san')
	})
	ipcRenderer.on('mti2', (ev, data) => {
		console.info(data)
	})
}
