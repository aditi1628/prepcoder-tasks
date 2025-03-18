document.querySelector(".add-to-cart").addEventListener("click", function () {
  this.innerText = "Added!";
  this.style.backgroundColor = "#28a745";
  setTimeout(() => {
    this.innerText = "Add to Cart";
    this.style.backgroundColor = "#ff6600";
  }, 2000);
});
