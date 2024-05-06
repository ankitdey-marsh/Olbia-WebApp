


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

//fade in for fourthdiv

const fadeInSection_5 = document.querySelector('.fourthdiv');
window.addEventListener('scroll', () => {
    const rect = fadeInSection_5.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      fadeInSection_5.classList.add('in-view');
    }
});

//fade in for contact-form/contact-page

const fadeInSection_6 = document.querySelector('.contact-forms');
window.addEventListener('scroll', () => {
    const rect = fadeInSection_6.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInView) {
      fadeInSection_6.classList.add('in-view');
    }
});




//contact page load
const tick1=document.querySelector('.tick');
const tick2=document.querySelector('.tick2');
const contactButton = document.querySelector('.contact');
const portfolioButton = document.querySelector('.portfolio');
const pagesButton = document.querySelector('.pagestab');
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
const portfolio_page = document.querySelector('.portfolio-page');
const pages_page = document.querySelector('.pages-page');
const home_page = document.querySelector('.home');
const blog_page = document.querySelector('.blog');
const backgroundContainer = document.querySelector('.image-container');

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
  tick1.classList.remove('not-hidden');
  tick2.classList.remove('not-hidden');
  portfolio_page.classList.remove('not-hidden');
  pages_page.classList.remove('not-hidden');
});

//load blog page

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
  tick1.classList.remove('not-hidden');
  tick2.classList.remove('not-hidden');
  portfolio_page.classList.remove('not-hidden');
  pages_page.classList.remove('not-hidden');
});

//load home page

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
  tick1.classList.remove('not-hidden');
  tick2.classList.remove('not-hidden');
  portfolio_page.classList.remove('not-hidden');
  pages_page.classList.remove('not-hidden');
});

//load portfolio page
portfolioButton.addEventListener('click', () => {
  topdiv.classList.add('hidden');
  navbar.style.color='black';
  secondtopdiv.classList.add('hidden');
  thirddiv.classList.add('hidden');
  testimonials.classList.add('hidden');
  fourthdiv.classList.add('hidden');
  lastdiv.classList.add('hidden');
  portfolio_page.classList.add('not-hidden');
  image_container.classList.remove('not-hidden');
  contact_page.classList.remove('not-hidden');
  blog_pg.classList.remove('not-hidden');
  tick1.classList.remove('not-hidden');
  tick2.classList.remove('not-hidden');
  pages_page.classList.remove('not-hidden');

});

//load pages page
pagesButton.addEventListener('click', () => {
  topdiv.classList.add('hidden');
  navbar.style.color='black';
  secondtopdiv.classList.add('hidden');
  thirddiv.classList.add('hidden');
  testimonials.classList.add('hidden');
  fourthdiv.classList.add('hidden');
  lastdiv.classList.add('hidden');
  portfolio_page.classList.remove('not-hidden');
  image_container.classList.remove('not-hidden');
  contact_page.classList.remove('not-hidden');
  blog_pg.classList.remove('not-hidden');
  tick1.classList.remove('not-hidden');
  tick2.classList.remove('not-hidden');
  pages_page.classList.add('not-hidden');
});

//contact page scroll effect on image


window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const containerHeight = backgroundContainer.offsetHeight;
  const newPosition = (scrollPosition / containerHeight) * 20 ;
  backgroundContainer.style.backgroundPositionY = `${newPosition+50}%`;
});
let timeoutId;
const selectElement=document.querySelector('.welcometext');
const hoverElement = document.querySelector('.welcome');
hoverElement.addEventListener('mouseenter', () => {
  selectElement.classList.add('in-view');
});
hoverElement.addEventListener('mouseout', () => {
  timeoutId = setTimeout(() => {
    selectElement.classList.remove('in-view');
  }, 700);
});
hoverElement.addEventListener('mouseover', () => {
  clearTimeout(timeoutId);
});



//info fetch from contact

function sendmsg(){
  const anchorTag = document.querySelector('.sub2btn');


anchorTag.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('.FromMail');
  const subjectInput = document.querySelector('input[name="subject"]');
  const messageTextarea = document.querySelector('textarea[name="text"]');

  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageTextarea.value;
  console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
  emailjs.send('service_o41q0o3', 'template_611r1lg', {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then((response) => {
    console.log('Email sent successfully!', response.status, response.text);
    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    messageTextarea.value = '';
    tick2.classList.add('not-hidden');
  })
  .catch((error) => {
    console.log('Error sending email:', error);
  });
});
}
sendmsg();
//for newsletter

function newsletter() {
  const anchorTag2 = document.querySelector('.sub1btn');


anchorTag2.addEventListener('click', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('#email');

  const email = emailInput.value;
  emailjs.send('service_o41q0o3', 'template_xx2yylg', {
    email: email
  })
  .then((response) => {
    console.log('Email sent successfully!', response.status, response.text);
    tick1.classList.add('not-hidden');
    emailInput.value = '';
  })
  .catch((error) => {
    console.log('Error sending email:', error);
  });
});
  
}
newsletter();

