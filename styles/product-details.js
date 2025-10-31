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


const thumbs = document.querySelectorAll('.thumb');
const displayImg = document.getElementById('displayed-img');
const images = Array.from(thumbs).map(t => t.src);
let currentIndex = 0;

// Thumbnail click (desktop)
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    displayImg.src = thumb.src;
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    currentIndex = index;
  });
});

// Quantity logic
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const quantity = document.getElementById('quantity');
let count = 1;

decrease.addEventListener('click', () => {
  if (count > 1) {
    count--;
    quantity.textContent = count;
  }
});

increase.addEventListener('click', () => {
  count++;
  quantity.textContent = count;
});

// Slider for small screens
const prevBtn = document.querySelector('.slide-btn.left');
const nextBtn = document.querySelector('.slide-btn.right');

function showImage(index) {
  displayImg.src = images[index];
  currentIndex = index;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Swipe support for touch devices
let startX = 0;

displayImg.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

displayImg.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextBtn.click();
  if (endX - startX > 50) prevBtn.click();
});





document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.favorites-track');
  const cards = document.querySelectorAll('.fav-card');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 40; // 240px + 40px gap
  const visibleCards = Math.floor(document.querySelector('.favorites-slider').offsetWidth / cardWidth);
  const maxIndex = cards.length - visibleCards;

  const updateSlide = () => {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  };

  rightArrow.addEventListener('click', () => {
    if (index < maxIndex) index++;
    updateSlide();
  });

  leftArrow.addEventListener('click', () => {
    if (index > 0) index--;
    updateSlide();
  });

  window.addEventListener('resize', () => {
    // recalculates when window size changes
    const newVisible = Math.floor(document.querySelector('.favorites-slider').offsetWidth / cardWidth);
    if (newVisible !== visibleCards) {
      index = 0;
      updateSlide();
    }
  });
});

