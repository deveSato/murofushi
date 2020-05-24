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
	// target.innerHTML = "JavaScriptが実行されました。";

};
