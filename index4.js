const { Menu, getCurrentWindow } = require('@electron/remote')

let contextTemp = [
	{ label: 'Run Code' },
	{ label: 'Go to defination' },
	{
		type: 'separator'
	},
	{
		label: '其它功能',
		click() {
			console.info('其它功能选项被点击了')
		}
	}
]
let menu = Menu.buildFromTemplate(contextTemp)
window.addEventListener('DOMContentLoaded', () => {
	window.addEventListener(
		'contextmenu',
		(ev) => {
			ev.preventDefault()
			menu.popup({ window: getCurrentWindow() })
		},
		false
	)
})
