const menuBtn = document.querySelector(".hamburger-icon");
const menuIcons = document.querySelector(".nav-icons");
const menuItems = document.querySelector(".nav-items");

const homePage = document.querySelector(".Home");
const aboutPage = document.querySelector(".About");
const projectsPage = document.querySelector(".Projects");
const contactPage = document.querySelector(".Contact");

const workExperience = document.querySelector(".jobs-container");
const educationExperience = document.querySelector(".education-container");

const projectsCard1 = document.querySelector(".project-container");



const resume = "resume.json";
const gitHubAPI = "https://api.github.com/users/Hannaosterberg/repos";
let jobDescription;

menuBtn.addEventListener("click", () => {
    
    if(menuItems.style.display === "none" && menuIcons.style.display === "none") {
        menuItems.style.display = "flex";
        menuIcons.style.display = "flex";
    }else {
        menuItems.style.display = "none";
        menuIcons.style.display = "none";
    };
    
});

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
    console.log(repos);
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
                                    <p class="work1"><img class="office-icon" src="./img/office_icon.svg" alt="office icon">
                                    ${element.company} </p>
                                    <p class="work-1"><img class="employee-icon" src="./img/employee.svg" alt="employee icon">
                                    ${element.role} </p>
                                    <p class="work-1"><img class="location-icon" src="./img/location_icon.svg" alt="location icon">
                                    ${element.location} </p>
                                    
                                    </div>
                                    <div class="jobs-start-end">
                                    <button class="periodBtn">Full Time</button>
                                    <p class = "period"><img class="calender-icon" src="./img/calender_icon.svg" alt="calender icon">
                                    ${element.start}</p>
                                    </div>
                                    <div class = "job-description">
                                    <p class = "description">${element.description}</p>
                                    <button class = "descriptionBtn"><img class = "arrow-down" src="./img/nav_arrow_down_icon.svg" alt="arrow-down"></button>
                                    </div>
                                    `;
    });
    const descriptionBtn = document.querySelectorAll(".descriptionBtn");
    const description = document.querySelectorAll(".description");
    const arrowDown = document.querySelectorAll(".arrow-down")

    descriptionBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const displayDescription = description[index];
            displayDescription.classList.toggle("description-display");
            // arrowDown.style.transform = "180deg";
        
        });
    });
    education.forEach(element => {
        educationExperience.innerHTML += `
                                    <div class="jobs">
                                    <p class="work1"><img class="office-icon" src="./img/office_icon.svg" alt="office icon">
                                    ${element.school} </p>
                                    <p class="work1"><img src="./img/student_icon.svg" width = "25"alt="Student icon">
                                    ${element.education} </p>
                                    <p class="work-1"><img class="location-icon" src="./img/location_icon.svg" alt="location icon">
                                    ${element.location} </p>
                                    </div>
                                    <div class="jobs-start-end">
                                    <button class="periodBtn">Full Time</button>
                                    <p class = "period"><img class="calender-icon" src="./img/calender_icon.svg" alt="calender icon">
                                    ${element.start}</p>
                                    </div>
                                    <div class = "line"></div>
                                    `;
    });

}
displayCV();

async function displayProjects() {
    
    const displayRepos = await getRepos();
    const displayImage = await getCV();
    const images = displayImage.images;

    displayRepos.forEach(repo => {
        
        const projectImage = images.find(image => image.project === repo.name);

        if(projectImage) {
            projectsCard1.innerHTML += `
                                    <article class="card-container">
                                    <figure class = "card-image">
                                    <img src="${projectImage.imageURL}" alt="${repo.name}">
                                    </figure>
                                    <div class="card-content">
                                    <h3 class = "projects"> ${repo.name}</h3>
                                    <p class = "card-text"> ${repo.description}</p> 
                                    </div>
                                    <div class="card-links">
                                    <div class="live-link">
                                    <img src="./img/link_icon.svg" alt="Link-icon">
                                    <a href="#">Live Preview</a>
                                    </div>
                                    <div class="code-link">
                                    <img src="./img/GH-icon.svg" alt="Github-icon"><a href="${repo.html_url}">View Code</a>
                                    </div>
                                    </div>
                                    </article
                                    `;

        };
    });
}
getRepos();
displayProjects();