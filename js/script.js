window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  })

var typed = new Typed('.type', {
  strings: [
    'ALPHA PHI BETA', 'UP COLLEGE OF LAW'],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});