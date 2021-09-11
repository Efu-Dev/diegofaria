const ENG = "english", ESP = "spanish";
let currentLang = ENG;

window.onload = function() {
    let langs = [document.getElementById("english"),
                 document.getElementById("spanish")];

    for(let i = 0; i < langs.length; i++){
        langs[i].addEventListener('click', () => {
            console.log("here");
            if(langs[i].id === ENG)
                setEnglish();
            else if(langs[i].id === ESP)
                setSpanish();
        });
    }

    let dots = [document.getElementById("light-mode"),
            document.getElementById("dark-mode"),
            document.getElementById("cafe-mode"),
            document.getElementById("wine-mode")];

    for(let i = 0; i < dots.length; i++){
        dots[i].addEventListener('click', () => {
            setNewTheme(dots[i].id);
        });
    }
};

function setSpanish(){
    document.getElementById("about-me-menu").innerText = "Acerca de mí";
    document.getElementById("projects-menu").innerText = "Proyectos";
    document.getElementById("achievements-menu").innerText = "Logros";
    document.getElementById("contact-menu").innerText = "Contáctame";
    document.getElementById("greeting").innerText = "¡Hola! Soy Diego Faria";
    document.getElementById("sub-greeting").innerText = "¡Un Desarrollador de Software!";
    document.getElementById("pic-com").innerText = "¡Mira, este soy yo!";
    document.getElementById("background-label").innerText = "¿Quieres cambiar el color del fondo?";
    document.getElementById("click-req").innerText = "¡Clickea sobre tu favorito!";
    document.getElementById("info-title").innerText = "Lo que hago:";
    document.getElementById("info-1").innerText = "Me gusta crear cualquier tipo de software, ¡desde páginas web hasta videojuegos!";
    document.getElementById("info-2").innerText = "Y, por supuesto, aprender es una de mis grandes pasiones.";

    document.getElementById("about-me-title").innerText = "¡Acerca de mí!";
    document.getElementById("about-me-1").innerText = "Puedo construir muchos tipos de proyectos ya que construir aplicaciones es una de mis actividades favoritas!";
    document.getElementById("about-me-2").innerText = "También pienso que la responsabilidad y la calidad son los rasgos más importantes que se deben tener como desarrollador, así que siempre intento hacer lo mejor en cada proyecto y mantenerme mejorando mis habilidades.";
    document.getElementById("about-more-title").innerText = "Otras características...";
    document.getElementById("about-more-1").innerText = "Aunque desarrollar software es genial, puedo hacer más que solo eso...";
    document.getElementById("about-more-2").innerText = "Mi lengua materna es el Español, pero durante la secundaria empecé a aprender Inglés y Francés por mi cuenta. Y en mi tiempo libre, estoy aprendiendo japonés.";
    document.getElementById("about-more-3").innerText = "¡También soy amante de la literatura y los videojuegos en general!";
    document.getElementById("about-skills-title").innerText = "Cosas que puedo hacer";
    document.getElementById("about-skills-1").innerHTML = "Aún soy un estudiane, pero eso no significa que no sea capaz de hacer nada... <br> ¡Aquí una lista de mis habilidades!";
    document.getElementById("about-skills-2").innerText = "¿Interesado en mi CV?";
    document.getElementById("about-skills-3").innerText = "¡Click aquí para descargarlo!";

    document.getElementById("projects-title").innerText = "Aquí están algunos de mis proyectos:";
    document.getElementById("pj-1").innerHTML = "<img class=\"project-img\" src=\"images/project1.jpg\" /> ¡Un reloj de Pomodoro hecho con ReactJS!";
    document.getElementById("pj-2").innerHTML = "<img class=\"project-img\" src=\"images/project2.jpg\" /> ¡Una calculadora hecha únicamente con HTML, CSS y JS!";
    document.getElementById("pj-3").innerHTML = "<img class=\"project-img\" src=\"images/project3.jpg\" /> ¡Un formulario de inscripción para un curso de programación!";
    document.getElementById("projects-more-title").innerHTML = "¿Quieres ver más de mis proyectos?";

    document.getElementById("ach-title").innerText = "¿Mis Logros Académicos?";
    document.getElementById("ach-sub").innerText = "¡Aquí los tienes!";
    document.getElementById("ach-info").innerText = "¡Puedes darle click a las certificaciones y chequearlas!";
    document.getElementById("ach-1").innerText = "Responsive Web Design Certification de FreeCodeCamp";
    document.getElementById("ach-2").innerText = "JavaScript Algorithms and Data Structures de FreeCodeCamp";
    document.getElementById("ach-3").innerText = "Front End Development Libraries de FreeCodeCamp";
    document.getElementById("ach-4").innerText = "Programming Languages A de Washington University";
    document.getElementById("ach-5").innerText = "Programming Languages B de Washington University";
    document.getElementById("ach-6").innerText = "Programming Languages C de Washington University";
    document.getElementById("ach-7").innerText = "Introduction to Git and GitHub de Google";

    document.getElementById("contact-title").innerText = "¡Ponte en contacto conmigo!";
    document.getElementById("contact-sub").innerText = "Estos son mis medios de contacto:";
    document.getElementById("linkedin-prof").innerText = "¡Click aquí!";

    document.getElementById("footer").innerText = "Página creada y traducida por Diego Faria (2021).";
}

function setEnglish(){
    document.getElementById("about-me-menu").innerText = "About Me";
    document.getElementById("projects-menu").innerText = "Projects";
    document.getElementById("achievements-menu").innerText = "Achievements";
    document.getElementById("contact-menu").innerText = "Contact";
    document.getElementById("greeting").innerText = "Hello! I am Diego Faria.";
    document.getElementById("sub-greeting").innerText = "A Software Developer!";
    document.getElementById("pic-com").innerText = "Look, this is me!";
    document.getElementById("background-label").innerText = "Do you want to change the background color?";
    document.getElementById("click-req").innerText = "Click on your favourite!";
    document.getElementById("info-title").innerText = "What I do:";
    document.getElementById("info-1").innerText = "I like creating any kind of software, from webpages to videogames!";
    document.getElementById("info-2").innerText = "And, of course, learning is one of my passions!";

    document.getElementById("about-me-title").innerText = "About me!";
    document.getElementById("about-me-1").innerText = "I can build many kinds of projects since building apps is one of my favorite activities!";
    document.getElementById("about-me-2").innerText = "I also think responsibility and quality are the most important traits we must have as developers, so I always try to do my best in every project and keep improving my skills!";
    document.getElementById("about-more-title").innerText = "Some extra features...";
    document.getElementById("about-more-1").innerText = "Although developing software is something amazing, I can do more than just that...";
    document.getElementById("about-more-2").innerText = "My native language is Spanish, but during highschool I started to learn English and French all by myself! And in my free time, I am currently learning Japanese.";
    document.getElementById("about-more-3").innerText = "Also I am a lover of literature and videogames in general!";
    document.getElementById("about-skills-title").innerText = "Things I can do";
    document.getElementById("about-skills-1").innerHTML = "I am still a student, but that does not mean I am uncapable of doing anything... <br>Here is a list of some of my skills!";
    document.getElementById("about-skills-2").innerText = "Interested in my resumé?";
    document.getElementById("about-skills-3").innerText = "Click me to dowload it!";

    document.getElementById("projects-title").innerText = "Here are some of my projects:";
    document.getElementById("pj-1").innerHTML = "<img class=\"project-img\" src=\"images/project1.jpg\" /> A Pomodoro Clock with ReactJS!";
    document.getElementById("pj-2").innerHTML = "<img class=\"project-img\" src=\"images/project2.jpg\" /> A calculator made with pure HTML, CSS and JS!";
    document.getElementById("pj-3").innerHTML = "<img class=\"project-img\" src=\"images/project3.jpg\" /> A form to enroll in a programming course!";
    document.getElementById("projects-more-title").innerHTML = "Want to see more of my work?";

    document.getElementById("ach-title").innerText = "My Academic Achievements?";
    document.getElementById("ach-sub").innerText = "Here you go!";
    document.getElementById("ach-info").innerText = "You can click on each and check the certifications yourself!";
    document.getElementById("ach-1").innerText = "FreeCodeCamp's Responsive Web Design Certification";
    document.getElementById("ach-2").innerText = "FreeCodeCamp's Front End Development Libraries";
    document.getElementById("ach-3").innerText = "Front End Development Libraries de FreeCodeCamp";
    document.getElementById("ach-4").innerText = "Washington University's Programming Languages A";
    document.getElementById("ach-5").innerText = "Washington University's Programming Languages B";
    document.getElementById("ach-6").innerText = "Washington University's Programming Languages C";
    document.getElementById("ach-7").innerText = "Google's Introduction to Git and GitHub";

    document.getElementById("contact-title").innerText = "Get in touch with me!";
    document.getElementById("contact-sub").innerText = "You can do it by:";
    document.getElementById("linkedin-prof").innerText = "See my profile!";

    document.getElementById("footer").innerText = "Page created and translated by Diego Faria (2021)";
}

function setNewTheme(newId){
    if(newId == 'light-mode')
        document.getElementById("theme").href = 'default.css'
    else if(newId == 'dark-mode')
        document.getElementById("theme").href = 'dark.css'
    else if(newId == 'cafe-mode')
        document.getElementById("theme").href = 'cafe.css'
    else if(newId == 'wine-mode')
        document.getElementById("theme").href = 'wine.css'
}
