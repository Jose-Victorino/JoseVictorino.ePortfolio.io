// courses
const subClass = document.querySelector('.DDown');
const courses = [
    'ITS131L'
];

if(document.querySelector('.courseList'))
    for(let i = 0; i < courses.length;i++)
        document.querySelector('.courseList').innerHTML += '<li><a href="Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';
if(subClass.classList.contains('main'))
    for(let i = 0; i < courses.length;i++)
        subClass.innerHTML += '<li><a href="Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';
else
    for(let i = 0; i < courses.length;i++)
        subClass.innerHTML += '<li><a href="../Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';


// loading screen
const body = document.getElementsByTagName('body');
const preloader = document.getElementById('load-Cont');
const mediaQuery1 = window.matchMedia('(max-width: 1200px)');
const mediaQuery2 = window.matchMedia('(max-width: 950px)');
const mediaQuery3 = window.matchMedia('(max-width: 740px)');
const mediaQuery4 = window.matchMedia('(max-width: 560px)');

window.addEventListener("load", function() {
    preloader.style.display = "grid";
    body[0].style.overflow = 'hidden';
    setTimeout(() => {
        preloader.style.display = "none";
        body[0].style.overflow = 'visible';
    }, 2000);
});
function togglePreloader() {
    if (mediaQuery1.matches || mediaQuery2.matches || mediaQuery3.matches || mediaQuery4.matches){
        preloader.style.display = "grid"
        body[0].style.overflow = 'hidden';
        setTimeout(() => {
            preloader.style.display = "none";
            body[0].style.overflow = 'visible';
        }, 2000);
    }
    else{
        preloader.style.display = "none";
        body[0].style.overflow = 'hidden';
    }
}

mediaQuery1.addListener(togglePreloader);
mediaQuery2.addListener(togglePreloader);
mediaQuery3.addListener(togglePreloader);
mediaQuery4.addListener(togglePreloader);

// Nav bar change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const skillsSection = document.querySelector('.navBg');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    if(sectionPos < 70)
        nav.classList.add('show');
    else if(sectionPos > 0)
        nav.classList.remove('show');
});
