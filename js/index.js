var navbar = document.querySelector(".navbar");
var logo = document.querySelector(".logo");
var aboutItem = document.getElementById("about-item");
var portfolioItem = document.getElementById("portfolio-item");
var contactItem = document.getElementById("contact-item");
var loadingPage = document.getElementById("loading-page");
var mainContent = document.getElementById("main-content");

window.addEventListener("load", displayContent);

setTimeout(displayContent, 15000);

function displayContent() {
    loadingPage.style.display = "none";
    mainContent.style.display = "block";
}

function slideTo(id) {
    var element = document.getElementById(id);
    window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
    });
}

if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
    window.addEventListener("scroll", debounce(scrollFunction, 10, true));
    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            navbar.style.background = "#f7f7f7";
            navbar.style.boxShadow = "0 3px 8px rgba(0,0,0,0.4)";
            logo.style.background = "#121212";
            logo.style.color = "#f7f7f7";
            aboutItem.style.color = "#525252";
            portfolioItem.style.color = "#525252";
            contactItem.style.color = "#525252";
        } else {
            navbar.style.background = "transparent";
            navbar.style.boxShadow = "0 0 0 rgba(0,0,0,0.4)";
            logo.style.background = "#fff";
            logo.style.color = "#121212";
            aboutItem.style.color = "rgba(255,255,255,0.7)";
            portfolioItem.style.color = "rgba(255,255,255,0.7)";
            contactItem.style.color = "rgba(255,255,255,0.7)";
        }
    }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};