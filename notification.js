window.onload = function () {
	let oBtn = document.getElementById('btn')
	oBtn.addEventListener('click', () => {
		let option = {
			title: '通知',
			body: '通知内容',
			icon: './file.ico'
		}
		let myNotification = new window.Notification(option.title, option)
		myNotification.onclick = function () {
			console.info('点击了通知卡片')
		}
	})
}
