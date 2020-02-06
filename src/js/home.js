let section = document.getElementById("fabrics");
let appear = document.getElementById("artist");

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
