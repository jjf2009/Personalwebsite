
const projects = [
    {
        title: "Steve Jobs Tribute",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image:"./Projects-images/01.png",
        web: "https://steve-jobs-tribute.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Pokedex",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/02.png",
        web: "https://pokedex-rho-lake.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Connect 4",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/03.png",
        web: "https://connet-4.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Todo App",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/04.png",
        web: "https://basic-todo-one.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Company Registeration Potal",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/05.png",
        web: "https://companydirectoryportal.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Country Code Finder",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/06.png",
        web: "https://country-search-hackathon.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Nike Website Clone",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/07.png",
        web: "https://nike-landing-lac.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Palindrome Checker",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/08.png",
        web: "https://palindrome-checker-chi.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    {
        title: "Roman Number Converter",
        description: "A responsive tribute page built with HTML5 and CSS3, showcasing modern web design principles.",
        image: "./Projects-images/09.png",
        web: "https://roman-number-converter-delta.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
    
    
    
];


const projectsContainer = document.getElementById('pro');
    
    projects.forEach(project => {
        const projectHTML = `
            <div class="col-md-4" data-aos="fade-up">
                <div class="project-card card h-100 cbp-item">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h3 class="h5 card-title">${project.title}</h3>
                        <p class="card-text">${project.description}</p>
                        <div class="d-flex gap-2">
                            <a href="${project.web}" class="btn btn-primary btn-sm" target="_blank">Live Demo</a>
                            <a href="${project.git}" class="btn btn-outline-primary btn-sm" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });