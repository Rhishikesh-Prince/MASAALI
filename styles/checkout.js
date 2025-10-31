window.addEventListener('scroll', () => {
    const element = document.querySelector('.nav1');
    
    if (window.scrollY > 20) { // adjust for when it should move
        element.style.top = '-1vh';
    } else {
        element.style.top = '0';
    }
});


// seach bar 

const searchToggle = document.querySelector('.search-toggle');
  const navMid = document.querySelector('.nav-mid');
  const closeSearch = document.querySelector('.close-search');

  searchToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMid.classList.add('active');
  });

  closeSearch.addEventListener('click', (e) => {
    e.stopPropagation();
    navMid.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!navMid.contains(e.target)) {
      navMid.classList.remove('active');
    }
  });


  // Side menu toggle
const menuIcon = document.querySelector('.fa-bars');
const sideMenu = document.querySelector('.side-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});

