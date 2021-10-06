const { Menu, MenuItem } = require('@electron/remote')

window.addEventListener('DOMContentLoaded', () => {
	let addMenu = document.getElementById('addMenu')
	let menuCon = document.getElementById('menuCon')
	let addItem = document.getElementById('addItem')

	let menuItem = new Menu()
	// 生成菜单
	addMenu.addEventListener('click', () => {
		let menuFile = new MenuItem({ label: '文件', type: 'normal' })
		let menuEdit = new MenuItem({ label: '编辑', type: 'normal' })
		let customMenu = new MenuItem({ label: '自定义菜单项', submenu: menuItem })

		// 将创建好的自定义菜单添加至 menu
		let menu = new Menu()
		menu.append(menuFile)
		menu.append(menuEdit)
		menu.append(customMenu)

		Menu.setApplicationMenu(menu)
	})
	addItem.addEventListener('click', () => {
		const value = menuCon.value.trim()
		if (value) {
			menuItem.append(new MenuItem({ label: value, type: 'normal' }))
			menuCon.value = ''
		}
	})
})
