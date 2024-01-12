const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");

  scrollLock.classList.toggle("lock");
});

//липкий хедер
window.addEventListener("scroll", function () {
  var header = document.getElementById("sticky-header");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 95) {
    header.style.top = "0";
  } else {
    header.style.top = "-95px";
  }
});
