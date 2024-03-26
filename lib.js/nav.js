function scorllback() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//scroll back to top
const navbar = document.querySelector('#NavBarDiv');
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);


function isMobileWidth() {
  if(window.innerWidth <= 768) {
    alert("This website is not designed for Phones you might have some Issues!")
  }
}

isMobileWidth();