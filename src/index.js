function display(val) {
  document.getElementById("textval").value += String(val);
}

function check() {
  let x = document.getElementById("textval").value;
  display(x);
  let y = eval(x);

  document.getElementById("textval").value = y;
}

function clr() {
  document.getElementById("textval").value = "";
}
