
const mainNav = document.querySelector(".main-nav");
const navItems = document.querySelectorAll(".menu-link");

function toggleMenu() {
    mainNav.classList.toggle("menu-opened");
}

document.addEventListener("click", (event) => {
    let target = event.target;
    if (target !== mainNav && !mainNav.contains(target) && mainNav.classList.contains("menu-opened")) {
        mainNav.classList.remove("menu-opened");
    }
});

function setActive(e) {
    const parent = e.target.parentNode;
    const active = parent.querySelector(".active");
    if(active){
        active.classList.toggle("active")
    }
    e.target.classList.add("active");
    if (mainNav.classList.contains("menu-opened")) {
        mainNav.classList.remove("menu-opened");
    }
}

navItems.forEach(listItem => {
  listItem.addEventListener("click", setActive)
});

const swiper = new Swiper('.cards-swiper', {
    loop: true,
    speed:1000,
    autoplay:{
        delay:4000,
        disableOnInteraction:true
    },
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });