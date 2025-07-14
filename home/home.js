// Add some interactivity to CV sections
document.querySelectorAll(".cvItem").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#f0f0f0";
    this.style.transform = "translateY(-2px)";
    this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    this.style.transition = "all 0.3s ease";
  });

  item.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#f9f9f9";
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Add loading animation for the profile image
document.addEventListener("DOMContentLoaded", function () {
  const profileImage = document.querySelector(".profileImage");
  if (profileImage) {
    profileImage.style.opacity = "0";
    profileImage.style.transform = "translateY(20px)";
    profileImage.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    // Simulate image loading
    setTimeout(() => {
      profileImage.style.opacity = "1";
      profileImage.style.transform = "translateY(0)";
    }, 300);
  }
});

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe text sections for animation
document
  .querySelectorAll(".leftTextSection, .rightTextSection")
  .forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
