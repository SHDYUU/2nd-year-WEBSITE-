function showDetails(type) {
    const content = {
      event: `
        <h3>Research and Innovation Expo 2025</h3>
        <p>Experience TUPV’s groundbreaking innovations in engineering, science, and technology. Projects from students and faculty will be on full display.</p>
      `,
      admission: `
        <h3>Admissions for A.Y. 2025–2026</h3>
        <p>Submit your application through our online portal. Deadline is July 15. Entrance exam dates: June 1–15.</p>
      `,
      student: `
        <h3>Vibrant Student Life</h3>
        <p>Join our wide range of clubs and organizations. Meet our USG officers who lead various student initiatives.</p>
      `
    };
    document.getElementById('info-content').innerHTML = content[type];
    document.getElementById('info-box').classList.remove('hidden');
  }

  function hideDetails() {
    document.getElementById('info-box').classList.add('hidden');
  }
  

  /* PARA SA SLIDESHOW*/
let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0; }
  else if (n < 0) { slideIndex = slides.length - 1; }
  else { slideIndex = n; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide and dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  // Restart auto slide
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(() => {
    showSlides(slideIndex + 1);
  }, 20000);
}

// Initial display
showSlides(slideIndex);

// Arrow controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

// Dot controls
function currentSlide(n) {
  showSlides(n);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });


  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

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