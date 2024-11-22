const menuBtn = document.querySelector(".hamburger-icon");
const menuIcons = document.querySelector(".nav-icons");
const menuItems = document.querySelector(".nav-items");

const homePage = document.querySelector(".Home");
const aboutPage = document.querySelector(".About");
const projectsPage = document.querySelector(".Projects");
const contactPage = document.querySelector(".Contact");

const workExperience = document.querySelector(".jobs-container");
const educationExperience = document.querySelector(".education-container")



const resume = "resume.json";

menuBtn.addEventListener("click", () => {
    
    if(menuItems.style.display === "none" && menuIcons.style.display === "none") {
        menuItems.style.display = "flex";
        menuIcons.style.display = "flex";
    }else {
        menuItems.style.display = "none";
        menuIcons.style.display = "none";
    };
    
})

async function getCV() {
    try {
        const response = await fetch(resume);

        if(!response.ok) {
            throw new Error("HTTP ERROR status: " + response.status);
        }
        const data = await response.json();
        console.log(data)
        return data;

    }catch(error){
        console.error(error);
    }
}
async function getCVDetails(jobs,education) {
    try {
    const response = await fetch(`${resume}/${jobs}/${education}`);
    
    if(!response.ok) {
        throw new Error("HTTP ERROR status: " + response.status)
    }
    const resumeDetails = await response.json();
    return resumeDetails;

    }catch(error){
        console.error(error);
}
}

async function displayCV() {

    const displayResume = await getCV();
    const jobs = displayResume.jobs;
    const education = displayResume.education;
    console.log(jobs)

    jobs.forEach(element => {
        workExperience.innerHTML += `
                                    <div class="jobs">
                                    <p class="work1"><img class="office-icon" src="./img/office_icon.svg" alt="office icon">
                                    ${element.company} </p>
                                    <p class="work-1"><img class="location-icon" src="./img/location_icon.svg" alt="location icon">
                                    ${element.location} </p>
                                    </div>
                                    <div class="jobs-start-end">
                                    <button class="periodBtn">Full Time</button>
                                    <p class = "period"><img class="calender-icon" src="./img/calender_icon.svg" alt="calender icon">
                                    ${element.start}</p>
                                    </div>
                                    `;
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
                                    `;
    });

}
displayCV();