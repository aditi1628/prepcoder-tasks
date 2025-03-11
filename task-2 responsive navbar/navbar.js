function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.classList.contains("topnav")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
