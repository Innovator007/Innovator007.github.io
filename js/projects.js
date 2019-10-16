var projectContainer = document.querySelector(".projects-container");
var projects = [
    {
        name: "Yelpcamp",
        image: "yelpcamp.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://yelpcamp-iliyas.herokuapp.com/campgrounds",
        tags: ["all", "full stack"]
    },
    {
        name: "React Slack",
        image: "reactslack.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://react-slack-ffcff.firebaseapp.com",
        tags: ["all", "react", "full stack"]
    },
    {
        name: "Chatty",
        image: "chatty.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://chatty-iliyas.herokuapp.com",
        tags: ["all", "full stack"]
    },
    {
        name: "Emaily",
        image: "emaily.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://emaily-iliyas.herokuapp.com",
        tags: ["all", "react", "full stack"]
    },
    {
        name: "RMDB React",
        image: "rmdb.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://rmdb-iliyas.netlify.com",
        tags: ["all", "react"]
    },
    {
        name: "React Recipe",
        image: "reactrecipe.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://recipe-react.netlify.com",
        tags: ["all", "react"]
    },
    {
        name: "Python Quote Guesser",
        image: "pyquoteguesser.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://github.com/Innovator007/Quote-Guessing",
        tags: ["all", "python"]
    },
    {
        name: "Python Calculator",
        image: "pycalc.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://github.com/Innovator007/Python_Calculator",
        tags: ["all", "python"]
    },
    {
        name: "Python Dictionary",
        image: "pydictionary.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://github.com/Innovator007/Dictionary-Python",
        tags: ["all", "python"]
    },
    {
        name: "Natours",
        image: "natours.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://natours-iliyas.epizy.com",
        tags: ["all", "front end"]
    },
    {
        name: "Trillo",
        image: "trillo.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://trillo-iliyas.netlify.com",
        tags: ["all", "front end"]
    },
    {
        name: "Nexter",
        image: "nexter.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://nexter-iliyas.netlify.com",
        tags: ["all", "front end"]
    },
    {
        name: "React Tic-Tac-Toe",
        image: "reacttictactoe.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://tic-tac-toe-iliyas.netlify.com",
        tags: ["all", "react"]
    },
    {
        name: "React Calculator",
        image: "reactcalc.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://react-calc-iliyas.netlify.com",
        tags: ["all", "react"] 
    },
    {
        name: "Youtube Quick Videos",
        image: "reactyqv.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum magni sint, fugiat nulla at aperiam facilis sed corrupti eos nobis nesciunt nemo, adipisci modi ducimus mollitia dolorum eaque ad?",
        link: "https://yqv-iliyas.netlify.com",
        tags: ["all", "react"]
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