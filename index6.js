const { ipcRenderer } = require('electron')
window.onload = function () {
	document.getElementById('openModal').addEventListener('click', () => {
		ipcRenderer.send('openModal')
		localStorage.setItem('name', 'zhang san')
	})
}
