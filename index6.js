const { ipcRenderer } = require('electron')
const { getGlobal } = require('@electron/remote') 
window.onload = function () {
	document.getElementById('openModal').addEventListener('click', () => {
		ipcRenderer.send('openModal', '这是条来自于 index 进程的消息')
		// localStorage.setItem('name', 'zhang san')
	})
	ipcRenderer.on('mti2', (ev, data) => {
    let sharedObject = getGlobal('sharedObject') 
    if(sharedObject){
      let modalMainWebContentsId = sharedObject.modalMainWebContentsId
      ipcRenderer.sendTo(modalMainWebContentsId, 'do-some-work', 1)
    }
	})
}
