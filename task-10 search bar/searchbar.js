const searchInput = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");

// Predefined search suggestions
const suggestions = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Bootstrap",
  "Tailwind CSS",
  "MongoDB",
  "Express.js",
  "TypeScript",
];

// Show suggestions based on input
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query) {
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(query)
    );

    if (filteredSuggestions.length > 0) {
      suggestionsBox.style.display = "block";
      filteredSuggestions.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("suggestion");
        div.textContent = item;
        div.addEventListener("click", () => {
          searchInput.value = item;
          suggestionsBox.style.display = "none";
        });
        suggestionsBox.appendChild(div);
      });
    } else {
      suggestionsBox.style.display = "none";
    }
  } else {
    suggestionsBox.style.display = "none";
  }
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = "none";
  }
});
