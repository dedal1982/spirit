const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
const mobMenu = document.querySelector(".mobile-menu");

//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  mobMenu.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

//липкий хедер
window.addEventListener("scroll", function () {
  var header = document.getElementById("sticky-header");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 400) {
    header.style =
      "backdrop-filter: blur(8px) ;background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";
    header.style.background =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))";
  } else {
    header.style = "backdrop-filter: none;";
  }
});

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const linkMobileMenu = document.querySelectorAll(".mobile-link");

//закрыть меню при клике на ссылку
for (link of linkMobileMenu) {
  link.addEventListener("click", function () {
    mobMenu.classList.remove("active");
    burgerClick.classList.remove("active");
    scrollLock.classList.remove("lock");
  });
}

const iconSocial = document.querySelectorAll(".mobile-icon");

//клик по иконке соц.сети в мобиле - переход по ссылке и закрытие бургера
for (link of iconSocial) {
  link.addEventListener("click", function () {
    mobMenu.classList.remove("active");
    burgerClick.classList.remove("active");
    scrollLock.classList.remove("lock");
  });
}
