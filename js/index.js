(function(){
    emailjs.init('user_gv3cuEmUW8JYnPIABk1zr');
    //lazy-loading
    const imgs = document.querySelectorAll('img');
    const observer = window.lozad(imgs); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    observer.observe();
})();
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

function toggleResume() {
    var resumeOptions = document.querySelector('.resume-options');
    resumeOptions.classList.toggle('view-resume-options');
    if(resumeOptions.className === "resume-options view-resume-options") {
        document.querySelector('.resume-link').innerHTML = "Close";
    } else {
        document.querySelector('.resume-link').innerHTML = "Resume";
    }
}

function downloadResume() {
    document.getElementById('download-resume').click();
    toggleResume();
}

function viewResume() {
    document.getElementById('view-resume').click();
    toggleResume();
}

function slideTo(id,isInNavigation) {
    var element = document.getElementById(id);
    if(isInNavigation) {
        if(typeof window.orientation !== 'undefined' || (window.navigator.userAgent.toLowerCase().includes('mobi'))) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        } else {
            document.getElementById('nav-toggle').checked = false;
            setTimeout(function() {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            },700);
        }
    } else {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
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

// Animation

function animate(container, isOnTop=false) {
    var parent = document.querySelector(container);
    var childrens = [];
    for (var i=0;i<parent.childNodes.length;i++) {
        if(parent.childNodes[i].dataset && parent.childNodes[i].dataset.animatable == "animatable") {
            parent.childNodes[i].style.opacity = '0';
            childrens.push(parent.childNodes[i]);
        }
    }   
    function routine() {
        var scroll_pos = document.documentElement.scrollTop + document.documentElement.clientHeight;
        var animatedCount = 0;
        for(var i=0;i<childrens.length;i++) {
            if((childrens[i].offsetTop + childrens[i].style.height)  < scroll_pos - 0.25*innerHeight || window.scrollY > document.body.scrollHeight - 1.1*innerHeight || isOnTop) {
                childrens[i].style.opacity = '0';
                childrens[i].style.transform =`translateY(${16 + i*4}px) rotate(-5deg)`;
                childrens[i].style.animationDelay =String(Number(i*50)) + "ms";
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
animate(".about-me-info");
animate(".skills-container");
animate(".project-selection");
animate(".contact-container");
animate(".centered");
animate(".contact-form");
animate(".footer");
animate(".recommendations-container");


// Projects
var projectContainer = document.querySelector(".projects-container");
var projects = [
    {
        name: "Yelpcamp",
        image: "yelpcamp.png",
        desc: "Yelpcamp is a web application where users can add campgrounds and rate campgrounds with all the CRUD functionalities and user can also see location of the campground via google maps and also can scan qr code to get more information about that campground.",
        link: "https://yelpcamp-iliyas.herokuapp.com/campgrounds",
        tags: ["all", "full stack"]
    },
    {
        name: "React Slack",
        image: "reactslack.png",
        desc: "Devchat is a chatting application like slack made using React, Redux and Firebase. It has many functionalities like creating channels and chatting in them and also private chat functionality is available. It also has functionality to change themes.",
        link: "https://react-slack-ffcff.firebaseapp.com",
        tags: ["all", "react", "full stack"]
    },
    {
        name: "Chatty",
        image: "chatty.png",
        desc: "Chatty is an application made using socket.io, node.js. In this user can chat in groups, chat privately and also can send friend requests and view user profiles.",
        link: "https://chatty-iliyas.herokuapp.com",
        tags: ["all", "full stack"]
    },
    {
        name: "Emaily",
        image: "emaily.png",
        desc: "Emaily is an application made using MERN Stack. In this business owners can create surveys and send transactional emails to their users to get feedback about their product and it also shows how many users responded positively and how many responded negatively.",
        link: "https://emaily-iliyas.herokuapp.com",
        tags: ["all", "react", "full stack"]
    },
    {
        name: "RMDB React",
        image: "rmdb.png",
        desc: "RMDB (React Movie Database) is an application made with react in which user can search for movies and get all the information of that movie like ratings, cast, budget, revenue, release date etc.",
        link: "https://rmdb-iliyas.netlify.com",
        tags: ["all", "react"]
    },
    {
        name: "React Recipe",
        image: "reactrecipe.png",
        desc: "Recipe React is an application in which user can enter ingredients and all the recipes which can be made with that ingredient are shown.",
        link: "https://recipe-react.netlify.com",
        tags: ["all", "react"]
    },
    {
        name: "Natours",
        image: "natours.png",
        desc: "Natours is a front end project made using Sass in my course Advanced CSS and SASS on Udemy. Its a design of a company website providing tours to amazing places.",
        link: "https://natours-iliyas.epizy.com",
        tags: ["all", "front end"]
    },
    {
        name: "Trillo",
        image: "trillo.png",
        desc: "Trillo is a front end project made using flexbox and Sass in my course Advanced CSS and SASS on Udemy. Its a design of a hotel booking website providing amazing facilities.",
        link: "https://trillo-iliyas.netlify.com",
        tags: ["all", "front end"]
    },
    {
        name: "Nexter",
        image: "nexter.png",
        desc: "Nexter is a front end project made using CSS-Grid and Sass in my course Advanced CSS and SASS on Udemy. It is a website for realtors to post their clients houses and showcase them.",
        link: "https://nexter-iliyas.netlify.com",
        tags: ["all", "front end"]
    }
]


var new_projects = projects;

function selectCategory(category) {
    var newProjects = projects.filter(function(project) {
        return project.tags.includes(category);
    });
    document.querySelector(".category-selected").classList.remove("category-selected");
    document.getElementById(category).classList.add("category-selected");
    new_projects = newProjects;
    updateCards(newProjects,false);
}

function updateCards(projects, onFirsttimeLoad) {
    var items = 0;
    projectContainer.innerHTML = "";
    projects.forEach((project, index) => {
        var div = document.createElement("div");
        div.dataset.animatable = "animatable";
        div.className= "project-card";
        var projectCard = `
                <div class="flex">
                    <h3 class="project-name">${project.name}</h3>
                    <span class="project-line"></span>
                </div>
                <image onclick='openModal(${index})' class="project-image" src="./images/${project.image}" alt="${project.name}'s Image" />
                <p class="project-desc">${project.desc.substring(0,100)}...</p>
                <div class="project-link">
                    <a class="project-visit" href="${project.link}" target="_blank">
                        <span>VISIT <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                    </a>
                </div>
        `;
        div.innerHTML = projectCard;
        projectContainer.appendChild(div);
        items++;
        if(items === projects.length && onFirsttimeLoad){
            animate(".projects-container");
        }
    });
}

function openModal(index) {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal-content").classList.add("modal-animation");
    document.querySelector(".modal-content__title").innerHTML = new_projects[index].name;
    document.querySelector(".modal-content__image").src = "./images/" + new_projects[index].image;
    document.querySelector(".modal-content__desc").innerHTML = new_projects[index].desc;
    document.querySelector(".modal-content__link").href = new_projects[index].link;
}

document.querySelector(".modal-close").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
});

updateCards(projects, true);

// Email.js
document.querySelector(".success-contact > .close").addEventListener("click", function() {
    document.querySelector(".success-contact").style.display = "none";
});

document.querySelector(".error-contact > .close").addEventListener("click", function() {
    document.querySelector(".error-contact").style.display = "none";
});

function formatDate() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;
    return today;
}

function mail(e) {
    e.preventDefault();
    var date = formatDate();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value || "Enquiry";
    var message = document.getElementById('message').value;
    if(name !== "" && email !== "" && message !== "") {
        document.querySelector(".contact-btn").innerHTML = "<span class='btn-loading'><span>";
        var template_params = {
            "from_name": name,
            "to_name": 'Iliyas Attarwala',
            "from_email": email,
            "subject": subject,
            "date_sent": date,
            "message_html": message
        }
    
        var service_id = "gmail";
        var template_id = "template_IobzSpwl";
        emailjs.send(service_id,template_id,template_params)
            .then(function(response) {
                console.log("Email sent successfuly", response.status, response.text);
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById("subject").value = "";
                document.getElementById('message').value = "";
                document.querySelector(".success-contact").style.display = "block";
                document.querySelector(".contact-btn").innerHTML = "Send";
            }, function(error) {
                document.querySelector(".error-contact").style.display = "block";
                console.log('FAILED...', error);
            });
    }
}