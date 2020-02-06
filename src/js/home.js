let section = document.getElementById("fabrics");
let appear = document.getElementById("artist");
let navBar = document.querySelector(".navbar__mobile");
let footer = document.querySelector(".background__footer");

function revealImagesInViewport() {
  var scrollPosition = window.innerHeight + window.scrollY;

  window.requestAnimationFrame(function() {
    if (scrollPosition > section.offsetTop + 200) {
      section.classList.add("is-appear");
      console.log("here");
    }
  });
}

function reveal() {
  var scrollPosition = window.innerHeight + window.scrollY;

  window.requestAnimationFrame(function() {
    if (scrollPosition > section.offsetTop + 1200) {
      appear.classList.add("here");
      console.log("appear");
    }
  });
}

window.addEventListener("scroll", function() {
  revealImagesInViewport();
  reveal();
});
revealImagesInViewport();
reveal();

window.onscroll = function() {
  let scrollHeight;
  let totalHeight;
  scrollHeight = document.body.scrollHeight;
  totalHeight = window.scrollY + window.innerHeight;

  if (totalHeight >= scrollHeight - footer.offsetHeight) {
    console.log("at the bottom");
    navBar.classList.add("disappear");
  } else {
    navBar.classList.remove("disappear");
  }
};

console.log(footer.offsetHeight);
