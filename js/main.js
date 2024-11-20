const menuBtn = document.querySelector(".hamburger-icon");
const menuIcons = document.querySelector(".nav-icons");
const menuItems = document.querySelector(".nav-items");

const homePage = document.querySelector(".Home");
const AboutPage = document.querySelector(".About");
const projectsPage = document.querySelector(".Projects");
const contactPage = document.querySelector(".Contact");




menuBtn.addEventListener("click", () => {
    
    if(menuItems.style.display === "none" && menuIcons.style.display === "none") {
        menuItems.style.display = "flex";
        menuIcons.style.display = "flex";
    }else {
        menuItems.style.display = "none";
        menuIcons.style.display = "none";
    };
    
})


const resume = "resume.json";

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

const cv = getCV();
console.log(cv);