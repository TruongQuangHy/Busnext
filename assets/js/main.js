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

const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
});

searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
});

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

// ============show faqs============

document.querySelectorAll(".faqs__poser").forEach(function (poser) {
  poser.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const parentItem = this.parentElement;

    if (answer.classList.contains("show")) {
      answer.classList.remove("show");
      parentItem.classList.remove("expanded");
    } else {
      document.querySelectorAll(".faqs__answer").forEach(function (ans) {
        ans.classList.remove("show");
        ans.parentElement.classList.remove("expanded");
      });
      answer.classList.add("show");
      parentItem.classList.add("expanded");
    }
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

  const updateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = +counter.innerText.replace(/[^\d]/g, ""); // Remove non-numeric characters

    const increment = target / speed;

    const countToTarget = () => {
      if (count < target) {
        count = Math.ceil(count + increment);
        if (counter.classList.contains("count")) {
          counter.innerText =
            counter.getAttribute("data-has-plus") === "true"
              ? `${count}+`
              : `${count}`;
        } else if (counter.classList.contains("count-percent")) {
          counter.innerText = `${count}%`;
        }
        setTimeout(countToTarget, 20);
      } else {
        if (counter.classList.contains("count")) {
          counter.innerText =
            counter.getAttribute("data-has-plus") === "true"
              ? `${target}+`
              : `${target}`;
        } else if (counter.classList.contains("count-percent")) {
          counter.innerText = `${target}%`;
        }
      }
    };

    countToTarget();
  };

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // trigger when at least 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        // Reset to 0 with + if it initially contained +
        const hasPlus = counter.innerText.includes("+");
        counter.setAttribute("data-has-plus", hasPlus);
        counter.innerText = counter.classList.contains("count-percent")
          ? "0%"
          : hasPlus
          ? "0+"
          : "0";
        updateCount(counter);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2000, //  tốc độ
  delay: 300, // thời gian hiển thị
  // interval: 100, // các phần tử
  reset: true,
});

sr.reveal(
  ".home__title, .new__data, .care__img, .contact__content, .footer, .about__title, .blog__post-img, .about__main-img-1"
);

const srLeft = ScrollReveal({
  origin: "left", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2000, //  tốc độ
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
  duration: 2000, //  tốc độ
  delay: 300, // thời gian hiển thị
  reset: true,
});

srLeft.reveal(
  ".home__body-title, .home__info, .brand__logo, .feature__right, .about__main-video, .ourValue__content, .portfolio__list-items, .testimonials__silder-item p, .newsletter__btn, .faqs__content, .blog__title-right, .feature__img p, .testimonials__silder-item"
);

const srBotton = ScrollReveal({
  origin: "botton", // hướng đổ
  distance: "100px", //khoản cách đổ
  duration: 2000, //  tốc độ
  delay: 300, // thời gian hiển thị
  reset: true,
});

srBotton.reveal(".scroll, .testimonials__btn");

const srZoom = ScrollReveal({
  origin: "scroll",
  distance: "0px",
  duration: 2000,
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
  duration: 2000,
  delay: 300,
  scale: 0.85,
  rotate: { x: 0, y: 0, z: -45 }, // Thêm hiệu ứng xoay 45 độ theo trục z
  reset: true,
});

srZoomRotate.reveal(
  ".testimonials__img, .testimonials__user, .blog__post-content, .about__main-img-2"
);
