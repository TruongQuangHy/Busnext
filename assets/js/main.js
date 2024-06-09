const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ==========SEARCH============

// ==========Plus==========

const buttons = document.querySelectorAll(".portfolio__list-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const textContainer = button.parentNode.parentNode.querySelector(
      ".portfolio__list-item-text"
    );
    textContainer.classList.toggle("portfolio__list-item-text-show");

    // Thay đổi dấu hiển thị giữa dấu cộng và dấu trừ
    const icon = button.querySelector("span");
    icon.textContent = icon.textContent === "+" ? "-" : "+";
  });
});

// ================ REMOVE MENU MOBILE ==================

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/

// const scrollUP = () => {
//   const scrollUP = document.getElementById("scroll-up");
//   this.scrollY >= 350
//     ? scrollUP.classList.add("show-scroll")
//     : scrollUP.classList.remove("show-scroll");
// };

// window.addEventListener("scroll", scrollUP);

// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollDown = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id"),
//       sectionsClass = document.querySelector(
//         ".nav__menu a[href*=" + sectionId + "]"
//       );

//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add("active-link");
//     } else {
//       sectionsClass.classList.remove("active-link");
//     }
//   });
// };
// window.addEventListener("scroll", scrollActive);

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count, .count-percent");
  const speed = 50; // The lower the number, the faster the count

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      let count = +counter.innerText.replace(/[^\d]/g, ""); // Remove non-numeric characters

      const increment = target / speed;

      if (count < target) {
        count = Math.ceil(count + increment);
        if (counter.classList.contains("count")) {
          counter.innerText = counter.innerText.includes("+")
            ? `${count}+`
            : `${count}`;
        } else if (counter.classList.contains("count-percent")) {
          counter.innerText = `${count}%`;
        }
        setTimeout(updateCount, 20);
      } else {
        if (counter.classList.contains("count")) {
          counter.innerText = counter.innerText.includes("+")
            ? `${target}+`
            : `${target}`;
        } else if (counter.classList.contains("count-percent")) {
          counter.innerText = `${target}%`;
        }
      }
    };

    updateCount();
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2500, //  tốc độ
  delay: 300, // thời gian hiển thị
  // interval: 100, // các phần tử
  reset: true,
});

sr.reveal(
  ".home__title, .new__data, .care__img, .contact__content, .footer, .about__title, .blog__post-img"
);
// sr.reveal(".home__data, .care__list, .contact__img", { delay: 500 });
// sr.reveal(".new__card", { delay: 500, interval: 100 });
// sr.reveal(".shop__card", { interval: 100 });

const srLeft = ScrollReveal({
  origin: "left", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2500, //  tốc độ
  delay: 300, // thời gian hiển thị
  // interval: 100, // các phần tử
  reset: true,
});

srLeft.reveal(
  ".home__desription, .home__slider, .brand__title, .portfolio__title, .newsletter__container h1, .faqs__question, .blog__title-left "
);

const srRight = ScrollReveal({
  origin: "right", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2500, //  tốc độ
  delay: 300, // thời gian hiển thị
  reset: true,
});

srLeft.reveal(
  ".home__body-title, .home__info, .brand__logo, .feature__right, .about__main-video, .ourValue__content, .portfolio__list-items, .testimonials__silder-item p, .newsletter__btn, .faqs__content, .blog__title-right"
);

const srBotton = ScrollReveal({
  origin: "botton", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2500, //  tốc độ
  delay: 300, // thời gian hiển thị
  reset: true,
});

srBotton.reveal(".scroll, .testimonials__btn");

const srZoom = ScrollReveal({
  origin: "scroll",
  distance: "0px",
  duration: 2500,
  delay: 300,
  scale: 0.85,
  reset: true,
});

srLeft.reveal(
  ".featutre__img-hover, .feature__left, .about__main-img, .about__content, .ourValue__value-text, .portfolio__list-img"
);

const srZoomRotate = ScrollReveal({
  origin: "scroll",
  distance: "0px",
  duration: 2500,
  delay: 300,
  scale: 0.85,
  rotate: { x: 0, y: 0, z: -45 }, // Thêm hiệu ứng xoay 45 độ theo trục z
  reset: true,
});

srZoomRotate.reveal(
  ".testimonials__img, .testimonials__user, .blog__post-content"
);
