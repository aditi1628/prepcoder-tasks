document.querySelectorAll(".question").forEach((item) => {
  item.addEventListener("click", function () {
    let parent = this.parentNode;
    parent.classList.toggle("active");

    // Close other open answers
    document.querySelectorAll(".faq").forEach((faq) => {
      if (faq !== parent) {
        faq.classList.remove("active");
      }
    });
  });
});
