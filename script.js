// loading screen
const preloader = document.getElementById("load-Cont");
const mediaQuery1 = window.matchMedia("(max-width: 1200px)");
const mediaQuery2 = window.matchMedia("(max-width: 950px)");
const mediaQuery3 = window.matchMedia("(max-width: 740px)");
const mediaQuery4 = window.matchMedia("(max-width: 560px)");

window.addEventListener("load", function() {
    preloader.style.display = "grid";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 2000);
});
function togglePreloader() {
    if (mediaQuery1.matches || mediaQuery2.matches || mediaQuery3.matches || mediaQuery4.matches){
        preloader.style.display = "grid";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 2000);
    }
    else{
        preloader.style.display = "none";
    }
}

togglePreloader();
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

// skills progress bar
document.querySelectorAll('.a1').forEach(element => {
    element.querySelector('.prog').setAttribute('id', '20');
});
document.querySelectorAll('.a2').forEach(element => {
    element.querySelector('.prog').setAttribute('id', '40');
});
document.querySelectorAll('.a3').forEach(element => {
    element.querySelector('.prog').setAttribute('id', '60');
});
document.querySelectorAll('.a4').forEach(element => {
    element.querySelector('.prog').setAttribute('id', '80');
});
document.querySelectorAll('.a5').forEach(element => {
    element.querySelector('.prog').setAttribute('id', '100');
});

window.addEventListener('scroll', () => {
    const progressBars = document.querySelectorAll('.prog');
    const skillsSection = document.querySelector('.Skills-Cont');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if(sectionPos < screenPos)
        progressBars.forEach(element => {
            element.style.width = element.id + '%';
        });
    else
        progressBars.forEach(element => {
            element.style.width = 0;
        });
});

// checkbox
function achieveP1(){
    document.querySelector('#s2').checked = false;
    document.querySelector('#s3').checked = false;
}
function achieveP2(){
    document.querySelector('#s1').checked = false;
    document.querySelector('#s3').checked = false;
}
function achieveP3(){
    document.querySelector('#s1').checked = false;
    document.querySelector('#s2').checked = false;
}
function actsA1(){
    document.querySelector('#a2').checked = false;
    document.querySelector('#a3').checked = false;
}
function actsA2(){
    document.querySelector('#a1').checked = false;
    document.querySelector('#a3').checked = false;
}
function actsA3(){
    document.querySelector('#a1').checked = false;
    document.querySelector('#a2').checked = false;
}
