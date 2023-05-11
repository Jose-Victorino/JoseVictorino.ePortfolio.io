// courses
const subClass = document.querySelector('.DDown');
const courses = [
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L',
    'ITS131L'
];
for(let i = 0; i < courses.length;i++){
    if(document.querySelector('.courseList'))
        document.querySelector('.courseList').innerHTML += '<div><a href="Courses/' + courses[i] + '.html">' + courses[i] + '</a></div>';
    if(subClass.classList.contains('main'))
        subClass.innerHTML += '<li><a href="Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';
    else
        subClass.innerHTML += '<li><a href="../Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';
}

// Nav bar change
function navColor(){
    const nav = document.querySelector('.nav');
    const skillsSection = document.querySelector('.navBg');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    if(sectionPos < 70)
        nav.classList.add('show');
    else if(sectionPos > 0)
        nav.classList.remove('show');
}
navColor();

window.addEventListener('scroll', function() {
    navColor();
});

// loading screen
const body = document.getElementsByTagName('body');
const preloader = document.getElementById('load-Cont');
const mediaQuery1 = window.matchMedia('(max-width: 1200px)');
const mediaQuery2 = window.matchMedia('(max-width: 950px)');
const mediaQuery3 = window.matchMedia('(max-width: 740px)');
const mediaQuery4 = window.matchMedia('(max-width: 560px)');

window.addEventListener("load", function() {
    body[0].style.overflow = 'hidden';
    preloader.style.display = "grid";
    setTimeout(() => {
        body[0].style.overflow = 'visible';
        preloader.style.display = "none";
    }, 2000);
});
function togglePreloader() {
    if (mediaQuery1.matches || mediaQuery2.matches || mediaQuery3.matches || mediaQuery4.matches){
        body[0].style.overflow = 'hidden';
        preloader.style.display = "grid"
        setTimeout(() => {
            body[0].style.overflow = 'visible';
            preloader.style.display = "none";
        }, 2000);
    }
    else{
        body[0].style.overflow = 'hidden';
        preloader.style.display = "none";
    }
}

mediaQuery1.addListener(togglePreloader);
mediaQuery2.addListener(togglePreloader);
mediaQuery3.addListener(togglePreloader);
mediaQuery4.addListener(togglePreloader);

// const form = document.getElementById('contactForm');

// form.addEventListener('submit', () => {
//     setTimeout(() => {
//         form.querySelector('#name').value = '';
//         form.querySelector('#email').value = '';
//         form.querySelector('#subject').value = '';
//         form.querySelector('#message').value = '';
//     }, 2000);
// });

// var hasTouchScreen = false;

// if("maxTouchPoints" in navigator)
//     hasTouchScreen = navigator.maxTouchPoints > 0;
// else if("msMaxTouchPoints" in navigator)
//     hasTouchScreen = navigator.msMaxTouchPoints > 0;
// else{
//     var mQ = window.matchMedia && matchMedia("(pointer:coarse)");

//     if (mQ && mQ.media === "(pointer:coarse)")
//         hasTouchScreen = !!mQ.matches;
//     else if ('orientation' in window)
//         hasTouchScreen = true; // deprecated, but good fallback
//     else{
//         // Only as a last resort, fall back to user agent sniffing
//         var UA = navigator.userAgent;
//         hasTouchScreen = (
//             /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
//             /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
//         );
//     }
// }

// if (hasTouchScreen){
//     // Do something here. 
// }