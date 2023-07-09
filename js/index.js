/*========== menu icon navbar ==========*/
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menu.onclick= ()=>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle('active');
}

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(section=>{
        let top = window.scrollY;
        let id = section.getAttribute("id");
        let height = section.offsetHeight;
        let offset = section.offsetTop-140;
        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    });

    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);

    /*========== remove menu icon navbar when click navbar link (when scrolled) ==========*/
    menu.classList.remove("bx-x");
    navbar.classList.remove('active');

};

/*========== dark light mode ==========*/
let darkMode = document.querySelector('#darkMode');
darkMode.onclick=()=>{
    darkMode.classList.toggle('bx-sun');
    document.body.classList.toggle('dark');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    reser:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.homeContent,.heading',{origin:'top'});
ScrollReveal().reveal('.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.homeContent h1,.about-img img',{origin:'left'});
ScrollReveal().reveal('.homeContent h3,.homeContent p,.about-content',{origin:'right'});
