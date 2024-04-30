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


