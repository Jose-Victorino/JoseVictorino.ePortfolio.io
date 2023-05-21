// courses
const subClass = document.querySelector('.DDown');
const courses = [
  'ITS131L',
];
const highlights = [
  ['ITS131L', 'M2-SA1', 'CRUD Form'],
  ['ITS131L', 'M2-SA1', 'CRUD Form'],
  ['ITS131L', 'M2-SA1', 'CRUD Form'],
  ['ITS131L', 'M2-SA1', 'CRUD Form'],
];

for(let i = 0; i < courses.length; i++){
  if(document.querySelector('.courseList'))
    document.querySelector('.courseList').innerHTML += '<a href="Courses/' + courses[i] + '.html">' + courses[i] + '</a>';
  if(subClass.classList.contains('main'))
    subClass.innerHTML += '<li><a href="Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';
  else
    subClass.innerHTML += '<li><a href="../Courses/' + courses[i] + '.html">' + courses[i] + '</a></li>';
}
for(let i = 0; i < highlights.length; i++){
  if(document.querySelector('.Highlights'))
    document.querySelector('.Highlights').innerHTML += '<div><img src="Pictures/Course Assets/' + highlights[i][0] + '/' + highlights[i][1] + '.png" alt="' + highlights[i][2] + ' img" /><a href="Courses/' + highlights[i][0] + '.html#Activities"><div class="hover">' + highlights[i][2] + ' (' + highlights[i][0] + ')</div></a></div>'
}

// Nav bar
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

// Reveal on Scroll
const fade_up = document.querySelectorAll('.fade-up');
const fade_down = document.querySelectorAll('.fade-down');
const fade_left = document.querySelectorAll('.fade-left');
const fade_right = document.querySelectorAll('.fade-right');
const flip_up = document.querySelectorAll('.flip-up');

const screenPos = window.innerHeight - 180;

function sos(){
  for(let i = 0; i < fade_up.length; i++){
    const pos = fade_up[i].getBoundingClientRect().top;
  
    if(pos < screenPos)
      fade_up[i].classList.add('active');
    else
      fade_up[i].classList.remove('active');
  }
  for(let i = 0; i < fade_down.length; i++){
    const pos = fade_down[i].getBoundingClientRect().top;
    
    if(pos < screenPos)
      fade_down[i].classList.add('active');
    else
      fade_down[i].classList.remove('active');
  }
  for(let i = 0; i < fade_left.length; i++){
    const pos = fade_left[i].getBoundingClientRect().top;
    
    if(pos < screenPos)
      fade_left[i].classList.add('active');
    else
      fade_left[i].classList.remove('active');
  }
  for(let i = 0; i < fade_right.length; i++){
    const pos = fade_right[i].getBoundingClientRect().top;
    
    if(pos < screenPos)
      fade_right[i].classList.add('active');
    else
      fade_right[i].classList.remove('active');
  }
  for(let i = 0; i < flip_up.length; i++){
    const pos = flip_up[i].getBoundingClientRect().top;
    
    if(pos < screenPos)
      flip_up[i].classList.add('active');
    else
      flip_up[i].classList.remove('active');
  }
}

sos();
window.addEventListener('scroll', () => {
  navColor();
  sos();
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

const form = document.getElementById('contactForm');

form.addEventListener('submit', () => {
  setTimeout(() => {
    form.querySelector('#name').value = '';
    form.querySelector('#email').value = '';
    form.querySelector('#subject').value = '';
    form.querySelector('#message').value = '';
  }, 2000);
});
