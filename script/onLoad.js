window.onload = function () {
	setColorDelay();
}
function setColorDelay() {
	setTimeout(hideLoadingCSS, 0);
	setTimeout(setColor, 3000);
}

function setColor(){
	var target = document.getElementById("topImage");
	target.classList.add("color")

	// target.innerHTML = "JavaScriptが実行されました。";

};

function hideLoadingCSS(){
	const elem = document.getElementsByClassName("dotWrapper")[0];
	elem.classList.add("hidden");

}
	
	
