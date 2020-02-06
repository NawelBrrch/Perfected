let clickers = document.querySelectorAll(".creation__choice");
let selections = document.querySelectorAll(".creation__change");
let theClass = "creation__change--visible";
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let validate = document.getElementById("validate");
let index = 0;

let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let step6 = document.getElementById("step6");
let step7 = document.getElementById("step7");
let step8 = document.getElementById("step8");
let step9 = document.getElementById("step9");
let illustrationList = document.querySelectorAll(".creation__img");
let steps = [step1, step2, step3, step4, step5, step6, step7, step8, step9];

prev.addEventListener("click", function() {
  jump(index - 1);
  verify();
  console.log("hehe");
});
next.addEventListener("click", function() {
  jump(index + 1);
  verify();
});

function jump(to) {
  selections[index].classList.remove(theClass);
  index = to;
  if (index > selections.length - 1) index = selections.length - 1;
  if (index < 0) index = 0;

  selections[index].classList.add(theClass);
}

for (let i = 0; i < clickers.length; i++) {
  clickers[i].addEventListener("click", function() {
    jump(i);
    verify();

    if (index > clickers.length - 2) {
      removeClassBefore();
      illustrationList[7].classList.add("creation__img--visible");
      illustrationList[9].classList.add("creation__img--visible");
      console.log("test");
    }
  });
}

function verify() {
  if (index === selections.length - 1) {
    next.classList.remove("creation__step--visible");
    validate.classList.add("creation__step--visible");
  } else {
    validate.classList.remove("creation__step--visible");
    next.classList.add("creation__step--visible");
  }
}

let uniquestep = document.getElementById("unique");

uniquestep.addEventListener("click", () => {
  removeClassBefore();
});

function removeClassBefore() {
  for (let i = 0; i < illustrationList.length; i++) {
    illustrationList[i].classList.remove("creation__img--visible");
  }
}

function addClassNext(index) {
  illustrationList[index].classList.add("creation__img--visible");
}

function addEvents(index) {
  steps[index].addEventListener("click", function() {
    removeClassBefore();
    addClassNext(index + 1);
    console.log(index);
  });
}

for (let i = 0; i < steps.length; i++) {
  addEvents(i);
}
