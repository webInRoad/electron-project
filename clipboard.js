const { clipboard, nativeImage } = require('electron')
window.onload = function () {
	let aBtn = document.getElementsByTagName('button')
	let aInput = document.getElementsByTagName('input')
	let oBtn = document.getElementById('clipImg')
	let ret = null

	aBtn[0].onclick = function () {
		// 复制内容
		ret = clipboard.writeText(aInput[0].value)
	}

	aBtn[1].onclick = function () {
		aInput[1].value = clipboard.readText(ret)
	}
	oBtn.onclick = function () {
		// 将图片放置于剪切版当中的时候要求图片类型属性 nativeImage 实例
		let oImage = nativeImage.createFromPath('./file.ico')
		clipboard.writeImage(oImage)

		// 将剪切板中的图片作为 DOM 元素显示在界面上
		let oImg = clipboard.readImage()
		let oImgDom = new Image()
		oImgDom.src = oImg.toDataURL()
		document.body.appendChild(oImgDom)
	}
}
