document.addEventListener("DOMContentLoaded", function () {
  const callouts = document.querySelectorAll('.callout');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  callouts.forEach(callout => {
    observer.observe(callout);
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};