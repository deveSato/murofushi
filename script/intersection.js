const theTarget = document.querySelector("#dummyTop");
const observerHeader = new IntersectionObserver(doWhenHeaderIsShown, intersectionOptions);
observerHeader.observe(theTarget)

var intersectionOptions = {
	root: null,
	rootMargin: "0",
	threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
};
/**
 * @param entries
 */
function doWhenHeaderIsShown(entries) {
  hideOrShowToTopButton(entries[0].isIntersecting);
};

function hideOrShowToTopButton(isHeaderShown) {
  const pageTop = document.querySelector("#toTop");
//   const menuReserve = document.querySelector("#menuReserveControl");
  
  if(isHeaderShown){
	//   console.log("isHidden")
    pageTop.classList.remove("isShown");
    // menuReserve.classList.remove("nonTop");
  }else{
	// console.log("isNotHidden")
    pageTop.classList.add("isShown");
    // menuReserve.classList.add("nonTop");
  }
};


