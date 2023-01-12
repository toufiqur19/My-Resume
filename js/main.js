// active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link =>{
    if(link.href.includes(`${activePage}`))
    {
        link.classList.add('active')
    }
});


// toggle bar
let nav_icon = document.querySelector('.nav_icon');
let line = document.querySelector('.line');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_list');
let nav_length = nav_links.length;
nav_icon.addEventListener('click', () => {
  line.classList.toggle('active');
  nav_menu.classList.toggle('active');
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `linkFadeIn 0.5s ease forwards ${
        index / nav_length + 0.2
      }s`;
    }
  });
});

// sticky navbar background
const navbar = document.querySelector(".navbar");
window.onscroll = ()=>{
  this.scrollY > 100 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}