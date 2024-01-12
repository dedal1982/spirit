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
