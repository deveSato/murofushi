document.addEventListener("click", e => {
	const target = e.target;

	console.log(target.id)//DEBUG
	// clickした要素がtoTopを含まない場合は処理を中断
	if (!target.id == "toTop") {
		// console.log("fail!");////////DEBUG
		return;
	}
	e.preventDefault();
	// const targetId = target.hash;
	// document.querySelector(targetId).scrollIntoView({
	// 	behavior: "smooth",
	// 	block: "start"
	// });
	// document.getElementById("topImage").scrollIntoView({
	// 	behavior: "smooth",
	// 	block: "start"
	// });

	// 上のコードが無効になってしまった。。。。↓が代替コード
	const targetElement = document.querySelector("#topImage");
	const rectTop = targetElement.getBoundingClientRect().top
	const offsetTop = window.pageYOffset
	// スクロール位置に持たせるバッファ
	const buffer = 0//50
	const top = rectTop + offsetTop - buffer
	window.scrollTo({
		top,
		behavior: "smooth"
	});

});


