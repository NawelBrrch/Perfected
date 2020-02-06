// Fabrics

let lether = document.getElementById("lether");
let wool = document.getElementById("wool");
let lyocell = document.getElementById("lyocell");

let lether__text = document.getElementById("lether__text");
let wool__text = document.getElementById("wool__text");
let lyocell__text = document.getElementById("lyocell__text");

lether.addEventListener("click", function() {
  lether__text.className = "is-checked";
  wool__text.className = "fabric__choice";
  lyocell__text.className = "fabric__choice";
});

wool.addEventListener("click", function() {
  lether__text.className = "fabric__choice";
  wool__text.className = "is-checked";
  lyocell__text.className = "fabric__choice";
});

lyocell.addEventListener("click", function() {
  lether__text.className = "fabric__choice";
  wool__text.className = "fabric__choice";
  lyocell__text.className = "is-checked";
});

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

//BUTTON ANIMATION

let bbb = {};
let btn6 = document.getElementById("btn");
let btnspan = document.getElementById("btn__span");

btn6.addEventListener("mouseover", function(e) {
  bbb.x = e.clientX - btn6.offsetLeft;
  bbb.y = e.clientY - btn6.offsetTop + window.scrollY;
  btnspan.style.top = bbb.y + "px";
  btnspan.style.left = bbb.x + "px";
  console.log(bbb.y);
});

//ARROW SCROLL

let arrow = document.querySelector(".hero__arrow--scroll");
console.log("hello", arrow);
