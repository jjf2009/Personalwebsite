const projects = [
    {
    title: "Ride Buddy ",
    description: "Carpooling Website for GEC Students",
    image: "./Images/Ridebuddy.png",
    web: "https://ridebuddy-8p6s.onrender.com/",
    git: "https://github.com/jjf2009?tab=repositories"
   },
   {
    title: "Open-CV Projects ",
    description: "OpenCV Projects Using Mediapipe and YOLO",
    image: "./Images/opencv.jpg",
    web: "https://github.com/jjf2009?tab=repositories",
    git: "https://github.com/jjf2009/OpenCV_Projects"
   },
   {
    title: "Nike Website Clone",
    description: "A clone of the Nike website with responsive design and modern web practices.",
    image: "/images/07.png",
    web: "https://nike-landing-lac.vercel.app/",
    git: "https://github.com/jjf2009/Nike_New"
   },
    {
        title: "Pokedex",
        description: "An interactive Pokedex application built to showcase Pokemon data with responsive design.",
        image: "./images/02.png",
        web: "https://pokedex-rho-lake.vercel.app/",
        git: "https://github.com/jjf2009/PokemonSearchApp"
    },
    {
        title: "Connect 4",
        description: "A fun Connect 4 game implemented with engaging UI and responsive design.",
        image: "./images/03.png",
        web: "https://connet-4.vercel.app/",
        git: "https://github.com/jjf2009/Connet-4"
    },
    {
        title: "Country Code Finder",
        description: "A tool to search and find country codes, built with a responsive interface.",
        image: "/images/06.png",
        web: "https://country-search-hackathon.vercel.app/",
        git: "https://github.com/jjf2009/Search-Bar-Hackathon"
    },
    {
        title: "Todo App",
        description: "A simple and efficient Todo application to manage tasks with responsive design.",
        image: "/images/04.png",
        web: "https://basic-todo-one.vercel.app/",
        git: "https://github.com/jjf2009/BasicTodo"
    },
    {
        title: "Company Registration Portal",
        description: "A portal for registering companies with a user-friendly interface and responsive design.",
        image: "/images/05.png",
        web: "https://companydirectoryportal.vercel.app/",
        git: " https://github.com/jjf2009/CompanyDirectoryPortal.git"
    },
    {
        title: "Palindrome Checker",
        description: "An application to check if a word or phrase is a palindrome, featuring responsive design.",
        image: "/images/08.png",
        web: "https://palindrome-checker-chi.vercel.app/",
        git: "https://github.com/jjf2009/Palindrome_Checker"
    },
    {
        title: "Roman Number Converter",
        description: "A tool to convert numbers to Roman numerals, built with a responsive layout.",
        image: "/images/09.png",
        web: "https://roman-number-converter-delta.vercel.app/",
        git: "https://github.com/jjf2009/Roman_Number_Converter-"
    },
    {
        title: "Steve Jobs Tribute",
        description: "A tribute page dedicated to Steve Jobs, showcasing responsive design and modern web principles.",
        image: "./images/01-Tribute.png",
        web: "https://steve-jobs-tribute.vercel.app/",
        git: "https://github.com/jjf2009/Steve_Jobs_Tribute"
    },
];


const projectsContainer = document.getElementById('pro');
    
    projects.forEach(project => {
        const projectHTML = `
            <div class="col-md-4" data-aos="fade-up">
                <div class="project-card card h-100 cbp-item bg-light">
                    <div class="card-body">
                        <h3 class="h5 card-title">${project.title}</h3>
                        <img src="${project.image}" class="card-img-top" alt="${project.title}"></img>
                        <p class="card-text">${project.description}</p>
                        <div class="d-flex gap-2 ">
                            <a href="${project.web}" class="btn btn-primary btn-sm" target="_blank">Live Demo</a>
                            <a href="${project.git}" class="btn btn-outline-primary btn-sm" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
