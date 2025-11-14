// Toggle the entire nav menu on hamburger click
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navBar").classList.toggle("active");
});

// Handle dropdown logic: one open at a time
const dropdownParents = document.querySelectorAll(".dropdown-parent");

dropdownParents.forEach((item) => {
  const link = item.querySelector("a");

  link.addEventListener("click", (e) => {
    e.preventDefault();

    dropdownParents.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active-dropdown");
      }
    });

    item.classList.toggle("active-dropdown");
  });
});
