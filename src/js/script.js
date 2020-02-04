// TISSUES CHOICE
function choice(id) {
  for (var i = 1; i <= 3; i++) {
    if (i == id) {
      document.getElementById("div_" + i).style.display = "block";
    } else {
      document.getElementById("div_" + i).style.display = "hidden";
    }
  }
}

choice(2);
