window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
// Smooth transition on "Enter Site"
document.getElementById('enterSite').addEventListener('click', function (e) {
e.preventDefault();
document.body.classList.add('fade-out');
setTimeout(() => {
  window.location.href = "website.html";
}, 800); // Should match the CSS transition duration
});