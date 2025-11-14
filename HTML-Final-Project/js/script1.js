window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

/* Show details in modal */
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

/* Slideshow logic */
let slideIndex = 0;
let autoSlideTimeout;

function toggleMute(event) {
  const video = event.currentTarget;
  video.muted = !video.muted;
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0; }
  else if (n < 0) { slideIndex = slides.length - 1; }
  else { slideIndex = n; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    const video = slides[i].querySelector("video");
    if (video) {
      video.pause();
      video.muted = true;
      video.removeEventListener('click', toggleMute);
    }
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  const currentVideo = slides[slideIndex].querySelector("video");
  if (currentVideo) {
    currentVideo.muted = true;
    currentVideo.play().catch(e => console.warn("Autoplay failed:", e));
    currentVideo.addEventListener('click', toggleMute);
  }

  clearTimeout(autoSlideTimeout);
  let delay = (slideIndex === 0) ? 300000 : 15000;
  autoSlideTimeout = setTimeout(() => {
    showSlides(slideIndex + 1);
  }, delay);
}
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex + n);
}
function currentSlide(n) {
  showSlides(n);
}

/* Scroll-fade-up animation using IntersectionObserver */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.scroll-fade-up').forEach(el => {
  observer.observe(el);
});

/* Optional: Scroll reveal using manual scroll check (your custom version) */
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };

  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation();
});

/* Mobile nav toggle */
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navBar").classList.toggle("active");
});

/* Dropdown logic */
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


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};