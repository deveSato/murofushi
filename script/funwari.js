// 全部いらないかも。。。。

// document.addEventListener("DOMContentLoaded", function(event) {
 
// 	//画像のセレクタ定義
// 	var select = 'img';
// 	var imgselect = document.querySelectorAll(select);

// 	//画像のパスを配列に代入
// 	var imgPath = [];

// 	//ループ処理
// 	for(var i=0; i<imgselect.length; i++) {
// 		//data-src属性の準備
// 		imgselect[i].setAttribute("data-src", "preload");
// 		//data-srcに画像のパスを代入
// 		imgselect[i].dataset.src = imgselect[i].src;
// 		//画像のパスをdata-srcに代入終わったらダミー画像に置き換え
// 		imgselect[i].src = "assets/images/preload.png";
// 		// options( () => {
// 		const sample = document.querySelectorAll( select );
    
// 		const observer = new IntersectionObserver( entries => {
// 			entries.forEach( entry => {
// 				if( entry.intersectionRatio > 0 ) {
// 					entry.target.src = entry.target.dataset.src;
// 					observer.unobserve( entry.target );
// 				} else {
					
// 				}
// 			});
// 		});
    
// 		sample.forEach( img => {
// 			observer.observe( img );
// 		});
// 	}
// )();
 
 
