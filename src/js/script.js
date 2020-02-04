
// Carrousel

let index = 0;
let lis = document.querySelectorAll(".collection__img");
let elNext = document.querySelector(".collection__arrow--right");
let elPrev = document.querySelector(".collection__arrow--left");

let jump = function(to) {
  lis[index].classList.remove("collection__img--visible");
  index = to;
  if (index > 2) index = 0;
  if (index < 0) index = 2;
  lis[index].classList.add("collection__img--visible");
};

elNext.addEventListener("click", function() {
  jump(index + 1);
  console.log(index);
});
elPrev.addEventListener("click", function() {
  jump(index - 1);
  console.log(index);
});

