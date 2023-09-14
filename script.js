document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const dotsContainer = document.querySelector(".carousel-dots"); // The container for dots
  let currentIndex = 0;

  // Create dots for each slide
  for (let i = 0; i < carousel.children.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    dot.setAttribute("data-index", i); // Set a data attribute to store the slide index
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  // Function to update the dots
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Dot click handler
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"));
      updateCarousel();
    });
  });

  function updateCarousel() {
    const itemWidth = carousel.offsetWidth;
    if (currentIndex !== 0) {
      carousel.style.transform = `translateX(-${
        (currentIndex * itemWidth) / 2 + 10
      }px)`;
    } else {
      carousel.style.transform = `translateX(-${
        (currentIndex * itemWidth) / 2
      }px)`;
    }
    updateDots();
  }

  // Initial setup
  updateCarousel();
});

const collapsibleContainers = document.querySelectorAll(
  ".collapsible-container"
);
const collapsibles = document.querySelectorAll(".collapsible");

collapsibleContainers.forEach((container) => {
  container.addEventListener("click", function () {
    const content = container.querySelector(".content");

    container.classList.toggle("active"); // Toggle the active class on the container
    if (container.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});

collapsibles.forEach((collapsible) => {
  const icon = collapsible.querySelector(".fa");
  // Set the initial icon class to "fa-angle-right" by default
  icon.classList.add("fa-angle-right");

  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    if (collapsible.classList.contains("active")) {
      // If active, change the class to "fa-angle-down"
      icon.classList.remove("fa-angle-right");
      icon.classList.add("fa-angle-down");
    } else {
      // If not active, change the class back to "fa-angle-right"
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-right");
    }
  });
});

// JavaScript for toggling the mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const closeIcon = document.querySelector(".close-icon");
const navLinks = document.querySelector(".mobile-navbar");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleIcon();
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("active");
  toggleIcon();
});

function toggleIcon() {
  if (navLinks.classList.contains("active")) {
    // If the mobile menu is active, display the "X" icon and hide the hamburger icon
    menuToggle.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    // If the mobile menu is closed, display the hamburger icon and hide the "X" icon
    menuToggle.style.display = "flex";
    closeIcon.style.display = "none";
  }
}

// Initial call to set the correct icon based on the default state
toggleIcon();

