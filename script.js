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

const highlights = document.querySelector('.Highlights');

// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//     highlights.classList.add('mobile');
// }
// else
//     highlights.classList.remove('mobile');
    
