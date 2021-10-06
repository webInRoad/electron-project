const { ipcRenderer } = require('electron')
window.onload = function () {
	let btns = document.getElementsByTagName('button')
	// 异步
	btns[0].addEventListener('click', () => {
		ipcRenderer.send('msg1', '这是一条来自于异步的消息')
	})
	// 同步
	btns[1].addEventListener('click', () => {
		const result = ipcRenderer.sendSync('msg2', '这是一条来自于同步的消息')
		console.info(result)
	})
}
ipcRenderer.on('msg1Re', (ev, data) => {
	console.info(data)
})
ipcRenderer.on('mtp', (ev, data) => {
	console.info(data)
})
