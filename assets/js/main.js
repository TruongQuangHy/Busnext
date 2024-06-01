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

// ================testimonials slider==================

document.getElementsByClassName("testimonials__btn-right").onclick =
  function () {
    let lists = document.querySelectorAll(".testimonials__silder-item");
    document
      .getElementsByClassName("testimonials__silder")
      .appendChild(lists[0]);
  };

document.getElementsByClassName("testimonials__btn-left").onclick =
  function () {
    let lists = document.querySelectorAll(".testimonials__silder-item");
    document
      .getElementsByClassName("testimonials__silder")
      .prepend(lists[lists.length - 1]);
  };
