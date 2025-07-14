const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = document.querySelectorAll(".sidebarLink");

// Mobile Menu Toggle
mobileMenuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Sidebar Link Active State
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");

    sidebarLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }

    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = href;
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      sidebar.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
});
