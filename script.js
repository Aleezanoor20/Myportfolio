const projects = [

    {
        name: "Hotel Simulation System",
        description: "A Java-based simulation of hotel guests, facilities, staff and different events within a hotel.",
        technologies: "Java • Java Swing • JUnit • Git & GitHub",
        learned: "Object-oriented programming, debugging, testing and teamwork skills.",
        image: "images/hotel.png",
        alt: "Screenshot of the Hotel Simulation System"
    },

    {
        name: "Fridgefy",
        description: "A Java-based application designed to help reduce food waste through expiration notifications and recipe suggestions.",
        technologies: "Java • JavaFX • Scene Builder",
        learned: "Programming, debugging, teamwork and presentation skills.",
        image: "images/fridgefy.png",
        alt: "Screenshot of the Fridgefy application"
    },

    
];

const projectList = document.querySelector(".project-list");
const sortButton = document.querySelector("#sort-projects");



function showProjects() {
    projectList.innerHTML = "";
    projects.forEach((project) => {
        const projectCard = document.createElement("article");
        projectCard.classList.add("project-card");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.alt;
        projectCard.appendChild(image); 
        const title = document.createElement("h2");
        title.textContent = project.name; 
        projectCard.appendChild(title);
        const description = document.createElement("p");
        description.textContent = project.description; 
        projectCard.appendChild(description); 
        const technologiesTitle = document.createElement("h3");
        technologiesTitle.textContent = "Technologies"; 
        projectCard.appendChild(technologiesTitle);
        const technologies = document.createElement('p');
        technologies.textContent = project.technologies;
        projectCard.appendChild(technologies);
        const learnedTitle = document.createElement("h3");
        learnedTitle.textContent = "What I learned"; 
        projectCard.appendChild(learnedTitle);
        const learned = document.createElement('p');
        learned.textContent = project.learned;
        projectCard.appendChild(learned);

        projectList.appendChild(projectCard);
    });
}

showProjects();

function sortProjects() {
    projects.sort((a, b) => a.name.localeCompare(b.name));
    showProjects();
}

sortButton.addEventListener("click", sortProjects);
