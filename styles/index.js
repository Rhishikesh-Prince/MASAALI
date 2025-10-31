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



// fifth section


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



// Seventh sec

    document.addEventListener("DOMContentLoaded", function () {
      const cardsContainer = document.querySelector(".feedback-cards");
      const groups = document.querySelectorAll(".feedback-group");
      const dots = document.querySelectorAll(".dot");
      const nextBtn = document.getElementById("nextBtn");
      const prevBtn = document.getElementById("prevBtn");
      let index = 0;

      function updateCarousel() {
        const width = document.querySelector(".feedback-cards-wrapper").offsetWidth;
        cardsContainer.style.transform = `translateX(-${index * width}px)`;

        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }

      nextBtn.addEventListener("click", () => {
        index = (index + 1) % groups.length;
        updateCarousel();
      });

      prevBtn.addEventListener("click", () => {
        index = (index - 1 + groups.length) % groups.length;
        updateCarousel();
      });

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          index = parseInt(dot.dataset.index);
          updateCarousel();
        });
      });

      window.addEventListener("resize", updateCarousel);
      updateCarousel();
    });

