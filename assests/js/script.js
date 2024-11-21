// GSAP Animation
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".portfolio-item", {
      duration: 1.5,
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "power2.out",
    });
  });