const $ = (x) => document.querySelector(x),
  $$ = (x) => document.querySelectorAll(x);

const overshadow = $(".overlay");
const body = $("body");
const hamburgerIcon = $("#hamburger");
const hamburgerBtn = $("#hamburger-container");
const headerMenu = $("#header-menu");
const homeImage = $(".home-image");

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerBtn.classList.contains("open")) {
    body.classList.remove("no-scroll");
    overshadow.style.display = "none";
    overshadow.classList.remove("fade-in");
    overshadow.classList.add("fade-out");
    headerMenu.classList.add("has-fade");
    homeImage.style.opacity = "1";
    homeImage.style.visibility = "visible";

    // todo. create fade-out effect for overshadow
    // add fade in fade out to header menu
  } else {
    body.classList.add("no-scroll");
    overshadow.style.display = "block";
    overshadow.classList.add("fade-in");
    overshadow.classList.remove("fade-out");
    headerMenu.classList.remove("has-fade");
    homeImage.style.opacity = "0";
    homeImage.style.visibility = "hidden";
  }
  hamburgerBtn.classList.toggle("open");
  hamburgerIcon.classList.toggle("fa-xmark");
  hamburgerIcon.classList.toggle("fa-bars");
});


const options = { root: null, rootMargin: "0px", threshold: 0 };
const pageEffect = (element) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let target = entry.target;
        target.classList.add("slideUp");
        observer.disconnect();
      }
    });
  }, options);
  io.observe(element);
};
let sections = $$(".obs");
// console.log(sections);
sections.forEach((section) => pageEffect(section));