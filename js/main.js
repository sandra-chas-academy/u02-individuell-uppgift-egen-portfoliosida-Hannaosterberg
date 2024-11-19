const resume = "./resume.json";

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

console.log(getCV());