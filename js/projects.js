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


function selectCategory(category) {
    var newProjects = projects.filter(function(project) {
        return project.tags.includes(category);
    });
    document.querySelector(".category-selected").classList.remove("category-selected");
    document.getElementById(category).classList.add("category-selected");
    updateCards(newProjects,false);
}

function updateCards(projects, onFirsttimeLoad) {
    var items = 0;
    projectContainer.innerHTML = "";
    projects.forEach((project) => {
        var div = document.createElement("div");
        div.dataset.animatable = "animatable";
        div.className= "project-card";
        var projectCard = `
                <div class="flex">
                    <h3 class="project-name">${project.name}</h3>
                    <span class="project-line"></span>
                </div>
                <image class="project-image" src="./images/${project.image}" alt="${project.name}'s Image" />
                <p class="project-desc">${project.desc}</p>
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

updateCards(projects, true);