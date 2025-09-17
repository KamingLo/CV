// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelectorAll('.navbar a');

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    });
  });

  // Close menu when scrolling
  window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth reveal animation on scroll
const revealElements = document.querySelectorAll(".portfolio-item, .skills li, .about p");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
