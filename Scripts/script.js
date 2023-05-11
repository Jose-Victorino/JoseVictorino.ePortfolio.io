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
