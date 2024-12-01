const menuBtn = document.querySelector(".hamburger-icon");
const menuIcons = document.querySelector(".nav-icons");
const menuItems = document.querySelector(".nav-items");

const homePage = document.querySelector(".Home");
const aboutPage = document.querySelector(".About");
const projectsPage = document.querySelector(".Projects");
const contactPage = document.querySelector(".Contact");

const workExperience = document.querySelector(".jobs-container");
const educationExperience = document.querySelector(".education-container");

const projectsContainer = document.querySelector(".project-container");

const themeSwitch = document.querySelector(".theme-switch")

const resume = "resume.json";
const gitHubAPI = "https://api.github.com/users/Hannaosterberg/repos";
let jobDescription;
let darkModeEnabled = false;

menuBtn.addEventListener("click", () => {
    
    if(menuItems.style.display === "none" && menuIcons.style.display === "none") {
        menuItems.style.display = "flex";
        menuIcons.style.display = "flex";
    }else {
        menuItems.style.display = "none";
        menuIcons.style.display = "none";
    };
    
});

themeSwitch.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;
    if(darkModeEnabled) {
        enableDarkMode();
    }else {
        disableDarkMode();
    }
})
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
}
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
}
displayCV();
displayProjects();

async function getCV() {
    try {
        const response = await fetch(resume);

        if(!response.ok) {
            throw new Error("HTTP ERROR status: " + response.status);
        }
        const data = await response.json();
        return data;

    }catch(error){
        console.error(error);
    }
}
async function getRepos() {
    try {

    const response = await fetch(gitHubAPI);
    
    if(!response.ok) {
        throw new Error("HTTP ERROR status: " + response.status)
    }
    const repos = await response.json();
    return repos;

    }catch(error){
        console.error(error);
}
}

async function displayCV() {

    const displayResume = await getCV();
    const jobs = displayResume.jobs;
    const education = displayResume.education;

    jobs.forEach(element => {
        workExperience.innerHTML += `
                                    <div class="jobs">
                                    <p class="work1"><img class = "svg-icons" src="./img/office_icon.svg" alt="office icon">
                                    ${element.company} </p>
                                    <p class="work-1"><img class="svg-icons employee-icon" src="./img/employee.svg" alt="employee icon">
                                    ${element.role} </p>
                                    <p class="work-1"><img class = "svg-icons" src="./img/location_icon.svg" alt="location icon">
                                    ${element.location} </p>
                                    
                                    </div>
                                    <div class="jobs-start-end">
                                    <button class="periodBtn">Full Time</button>
                                    <p class = "period"><img class = "svg-icons" src="./img/calender_icon.svg" alt="calender icon">
                                    ${element.start}</p>
                                    </div>
                                    <div class = "job-description">
                                    <p class = "description">${element.description}</p>
                                    <button class = "descriptionBtn"><img class = "arrow-down" src="./img/nav_arrow_down_icon.svg" alt="arrow-down"></button>
                                    </div>
                                    `;
    });
    const descriptionBtn = workExperience.querySelectorAll(".descriptionBtn");
    const description = workExperience.querySelectorAll(".description");
    const arrowDown = workExperience.querySelectorAll(".arrow-down")

    descriptionBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const displayDescription = description[index];
            displayDescription.classList.toggle("description-display");
        });
    });
    education.forEach(element => {
        educationExperience.innerHTML += `
                                    <div class="jobs">
                                    <p class="work1"><img class = "svg-icons" src="./img/office_icon.svg" alt="office icon">
                                    ${element.school} </p>
                                    <p class="work1"><img class = "svg-icons" src="./img/student_icon.svg" width = "25"alt="Student icon">
                                    ${element.education} </p>
                                    <p class="work-1"><img class = "svg-icons" src="./img/location_icon.svg" alt="location icon">
                                    ${element.location} </p>
                                    </div>
                                    <div class="jobs-start-end">
                                    <button class="periodBtn">Full Time</button>
                                    <p class = "svg-icons"><img class="calender-icon" src="./img/calender_icon.svg" alt="calender icon">
                                    ${element.start}</p>
                                    </div>
                                    <div class = "line"></div>
                                    `;
    });

};
async function displayProjects() {
    
    const displayRepos = await getRepos();
    const displayImage = await getCV();
    const images = displayImage.images;

    displayRepos.forEach(repo => {
        
        const projectImage = images.find(image => image.project === repo.name);

        if(projectImage) {
            const projectCard = document.createElement("article");
            projectCard.classList.add("card-container");

            projectCard.innerHTML += `
                                    <figure class = "card-image">
                                    <img src="${projectImage.imageURL}" alt="${repo.name}">
                                    </figure>
                                    <div class="loader">loading content...</div>
                                    <div class="card-content">
                                    <h3 class = "projects"> ${repo.name}</h3>
                                    <p class = "card-text"> ${repo.description}</p> 
                                    </div>
                                    <div class="card-links">
                                    <div class="live-link">
                                    <img class = "svg-icons" src="./img/link_icon.svg" alt="Link-icon">
                                    <a href="#">Live Preview</a>
                                    </div>
                                    <div class="code-link">
                                    <img class = "svg-icons" src="./img/GH-icon.svg" alt="Github-icon">
                                    <a href="${repo.html_url}">View Code</a>
                                    </div>
                                    </div>
                                    `;
        projectsContainer.appendChild(projectCard);

        const cardImage = projectCard.querySelector(".card-image");
        const cardContent = projectCard.querySelector(".card-content");
        const cardLinks = projectCard.querySelector(".card-links");
        const loader = projectCard.querySelector(".loader");

        setTimeout(() => {
            loader.style.display = "none";
            cardImage.style.display = "block"
            cardContent.style.display = "flex"
            cardLinks.style.display = "flex"
        }, 4000);
        };
    });
};