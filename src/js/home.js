let section = document.querySelector(".fabrics__text");

function revealImagesInViewport() {
  var scrollPosition = window.innerHeight + window.scrollY;

  window.requestAnimationFrame(function() {
    if (scrollPosition > section.offsetTop + 200) {
      section.classList.add("disapear");
      console.log("here");
    }
  });
}

window.addEventListener("scroll", function() {
  revealImagesInViewport();
});
revealImagesInViewport();
