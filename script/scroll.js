document.addEventListener("click", e => {
	const target = e.target;

	// console.log(target.id)//DEBUG
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
	document.getElementsByClassName("heroSection")[0].scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});
