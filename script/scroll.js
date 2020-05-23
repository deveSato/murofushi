document.addEventListener("click", e => {
	const target = e.target;

	// clickした要素がclass属性、toTopを含まない場合は処理を中断
	if (!target.classList.contains("toTop")) {
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
