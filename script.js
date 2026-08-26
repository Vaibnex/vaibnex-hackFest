// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
  });
});


// ===============================
// FAQ ACCORDION
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    // Close all FAQ items
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    // Open selected item
    if (!isActive) {
      item.classList.add("active");
    }

  });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(13, 12, 14, 0.92)";
    navbar.style.borderColor = "rgba(255,255,255,0.13)";

  } else {

    navbar.style.background = "rgba(16, 14, 17, 0.72)";
    navbar.style.borderColor = "rgba(255,255,255,0.1)";

  }

});


// ===============================
// REGISTRATION LINK
// ===============================

// Replace YOUR_GOOGLE_FORM_LINK with your actual Google Form URL

const registrationLink = document.getElementById("registrationLink");

registrationLink.href = "YOUR_GOOGLE_FORM_LINK";
