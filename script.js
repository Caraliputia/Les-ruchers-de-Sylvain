const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {

  window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }

  });

  backToTopButton.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  });

}
