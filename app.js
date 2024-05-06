const button1 = document.getElementsByClassName('weddings-btn')[0];
const button2 = document.getElementsByClassName('engagements-btn')[0];
const button3 = document.getElementsByClassName('couples-btn')[0];

const div1 = document.getElementsByClassName('wedding-works')[0];
const div2 = document.getElementsByClassName('engagement-works')[0];
const div3 = document.getElementsByClassName('couple-works')[0];

const p1 = document.getElementsByClassName('pages-title')[0];
const p2 = document.getElementsByClassName('pages-title')[1];
const p3 = document.getElementsByClassName('pages-title')[2];

p1.classList.add('active');

button1.addEventListener('click',()=>{
    div1.classList.add('fade-in');
    p1.classList.add('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    div1.style.display='inline-block';
    div2.style.display='none';
    div3.style.display='none';
});
button2.addEventListener('click',()=>{
    div2.classList.add('fade-in');
    p2.classList.add('active');
    p1.classList.remove('active');
    p3.classList.remove('active');
    div1.style.display='none';
    div2.style.display='inline-block';
    div3.style.display='none';
});
button3.addEventListener('click',()=>{
    p3.classList.add('active');
    p2.classList.remove('active');
    p1.classList.remove('active');
    div3.classList.add('fade-in');
    div1.style.display='none';
    div3.style.display='inline-block';
    div2.style.display='none';
});     




//fade in animations for secondtopdiv
const fadeInSection = document.querySelector('.secondtopdiv');
window.addEventListener('scroll', () => {
    const rect = fadeInSection.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      fadeInSection.classList.add('in-view');
    }
});

//fade in animations for thirddiv
const fadeInSection_2 = document.querySelector('.thirddiv');
window.addEventListener('scroll', () => {
    const rect = fadeInSection_2.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      fadeInSection_2.classList.add('in-view');
    }
});

const fadeInSection_3 = document.querySelector('.pages');
window.addEventListener('scroll', () => {
    const rect = fadeInSection_3.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      fadeInSection_3.classList.add('in-view');
    }
});


document.getElementById('email').addEventListener('input', function() {
    this.style.opacity = 0.7;
});



const cyclingDivs = document.querySelector('.testimonials-text');
const divs = cyclingDivs.children;
let currentDiv = 0;

divs[currentDiv].classList.add('active');
document.getElementsByClassName('left-arrow')[0].addEventListener('click', function() {
    divs[currentDiv].classList.remove('active');
    divs[currentDiv].classList.remove('fade-in');
    currentDiv = (currentDiv - 3 + divs.length) % (divs.length-2);
    divs[currentDiv].classList.add('active');
    divs[currentDiv].classList.add('fade-in');
  });

  document.getElementsByClassName('right-arrow')[0].addEventListener('click', function() {
    divs[currentDiv].classList.remove('active');
    divs[currentDiv].classList.remove('fade-in');
    currentDiv = (currentDiv + 3) % (divs.length-2);
    divs[currentDiv].classList.add('active');
    divs[currentDiv].classList.add('fade-in');
  });


  //fade in for testimonials

const fadeInSection_4 = document.querySelector('.testimonials');
window.addEventListener('scroll', () => {
    const rect = fadeInSection_4.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      fadeInSection_4.classList.add('in-view');
    }
});

const fadeInSection_5 = document.querySelector('.fourthdiv');
window.addEventListener('scroll', () => {
    const rect = fadeInSection_5.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      fadeInSection_5.classList.add('in-view');
    }
});



//contact page load
const contactButton = document.querySelector('.contact');
const navbar = document.querySelector('.nav-olbia');
const topdiv = document.querySelector('.topdiv');
const secondtopdiv = document.querySelector('.secondtopdiv');
const thirddiv = document.querySelector('.thirddiv');
const testimonials = document.querySelector('.testimonials');
const fourthdiv = document.querySelector('.fourthdiv');
const lastdiv = document.querySelector('.lastdiv');
const blog_pg = document.querySelector('.blog-page');
const image_container = document.querySelector('.image-container');
const contact_page = document.querySelector('.contact-page');
console.log(blog_pg);


contactButton.addEventListener('click', () => {
  topdiv.classList.add('hidden');
  navbar.style.color='black';
  secondtopdiv.classList.add('hidden');
  thirddiv.classList.add('hidden');
  testimonials.classList.add('hidden');
  fourthdiv.classList.add('hidden');
  lastdiv.classList.add('hidden');
  image_container.classList.add('not-hidden');
  blog_pg.classList.remove('not-hidden');
  contact_page.classList.add('not-hidden');
});

//load blog page
const blog_page = document.querySelector('.blog');
blog_page.addEventListener('click', () => {
  topdiv.classList.add('hidden');
  navbar.style.color='black';
  secondtopdiv.classList.add('hidden');
  thirddiv.classList.add('hidden');
  testimonials.classList.add('hidden');
  fourthdiv.classList.add('hidden');
  lastdiv.classList.add('hidden');
  blog_pg.classList.add('not-hidden');
  contact_page.classList.remove('not-hidden');
});

//load home page
const home_page = document.querySelector('.home');
home_page.addEventListener('click', () => {
  topdiv.classList.remove('hidden');
  navbar.style.color='white';
  secondtopdiv.classList.remove('hidden');
  thirddiv.classList.remove('hidden');
  testimonials.classList.remove('hidden');
  fourthdiv.classList.remove('hidden');
  lastdiv.classList.remove('hidden');
  image_container.classList.remove('not-hidden');
  contact_page.classList.remove('not-hidden');
  blog_pg.classList.remove('not-hidden');
});

//contact page scroll effect on image
const backgroundContainer = document.querySelector('.image-container');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const containerHeight = backgroundContainer.offsetHeight;
  const newPosition = (scrollPosition / containerHeight) * 20 ;
  backgroundContainer.style.backgroundPositionY = `${newPosition+50}%`;
});

