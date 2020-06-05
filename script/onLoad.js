window.onload = function () {
	setColorDelay();
}
function setColorDelay() {
	// var alertmsg = function(){
	// 	alert("3秒経過");
	// }
	setTimeout(setColor, 3000);
}

function setColor(){
	var target = document.getElementById("topImage");
	target.classList.add("color")

	const elem = document.getElementsByClassName("dotWrapper")[0];
	elem.classList.add("hidden");

	// target.innerHTML = "JavaScriptが実行されました。";

};


	
	
