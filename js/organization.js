const organizations = [
  "Technowatch", "Audio Geeks", "Archons", "Apostolic Youth Campus Ministries", "Bailei Dance Troupe",
  "TUPV Basketbolista", "TUPV Balibolista", "BRUTSA", "Campus Bible Fellowship Philippines",
  "Christian Brotherhood INT'L", "DAYS WITH THE LORD MOVEMENT", "TUPV DORM SOCIETY", "Electrified Society",
  "Filipino Inventors Society", "Hangaway Table Tennis Club", "ICeEPSE TUPV", "TUPV IECEP",
  "Instrumentation and Control Society", "JIIEE TUPV Chapter", "JMRSP", "Likas-TUPV", "Mathletes",
  "Mechatronics Club", "TUPV Peer Facilitators Guild", "PIYESA", "ROCKSWELL", "SMASHERS",
  "TUP Cuber's Association-Visayas", "3Zero Club", "Tingog Club", "TUPV-CRCY Council", "TUPV Chemical Society",
  "TUPV DOST-SEI Scholars' Association", "JPSME"
];

document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.getElementById('cardGrid');

  organizations.forEach((orgName, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    // Border spans for animation
    const borders = ['top', 'right', 'bottom', 'left'].map(pos => {
      const span = document.createElement('span');
      span.className = `border ${pos}`;
      return span;
    });

    // Image
    const img = document.createElement('img');
    img.src = `../club/photo${index + 1}.png`;
    img.alt = orgName;
    img.loading = "lazy";

    // Name text
    const p = document.createElement('p');
    p.textContent = orgName;

    // Append elements
    borders.forEach(border => card.appendChild(border));
    card.appendChild(img);
    card.appendChild(p);
    cardGrid.appendChild(card);
  });

// Animate cards on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

  // Select newly added cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => observer.observe(card));
});

// Reset scroll to top on reload
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

// Toggle nav menu on mobile (if your HTML has #menuToggle and #navBar)
const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.getElementById("navBar").classList.toggle("active");
  });
}
