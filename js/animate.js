function animate(container, isOnTop=false) {
    var parent = document.querySelector(container);
    console.log(parent);
    var childrens = [];
    for (var i=0;i<parent.childNodes.length;i++) {
        if(parent.childNodes[i].dataset && parent.childNodes[i].dataset.animatable == "animatable") {
            parent.childNodes[i].style.opacity = '0';
            childrens.push(parent.childNodes[i]);
        }
    }
    console.log(childrens);
    
    function routine() {
        var scroll_pos = document.documentElement.scrollTop + document.documentElement.clientHeight;
        var animatedCount = 0;
        for(var i=0;i<childrens.length;i++) {
            if((childrens[i].offsetTop + childrens[i].style.height)  < scroll_pos - 0.25*innerHeight || window.scrollY > document.body.scrollHeight - 1.1*innerHeight || isOnTop) {
                childrens[i].style.opacity = '0';
                childrens[i].style.transform =`translateY(${30 + i*4}px) rotate(-5deg)`;
                childrens[i].style.animationDelay =String(Number(i*100)) + "ms";
                childrens[i].classList.add("slide-up-opacity-animation");
            }
            if(childrens[i].classList.contains("slide-up-opacity-animation")){
                animatedCount++;
            }
        }
        if(animatedCount === childrens.length){
            window.removeEventListener("scroll", listener);
        }
    }
    var listener = debounce(routine, 10, true);

    if(isOnTop)
        routine();
    else
        window.addEventListener("scroll", listener);
}

animate("#about");
animate(".portfolio-container");
animate(".about-me-text");
animate(".about-me-image");
animate(".projects-container");
animate(".contact-container");
animate(".centered");
animate(".contact-form");
animate(".footer");