/*
  Student Name: Pargat Singh
  File Name: script.js
  Date: 28 November, 2024
*/

// Enhanced hamburger menu function with smooth animations
function hamburger() {
  const menu = document.getElementById("menu-links");
  const menuIcon = document.querySelector(".menu-icon div");
  
  if (menu.classList.contains("show")) {
    // Close menu
    menu.classList.remove("show");
    menuIcon.innerHTML = "&#9776;";
    menuIcon.style.transform = "rotate(0deg)";
  } else {
    // Open menu
    menu.classList.add("show");
    menuIcon.innerHTML = "&#10005;";
    menuIcon.style.transform = "rotate(90deg)";
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu-links");
  const menuIcon = document.querySelector(".menu-icon");
  
  if (!menuIcon.contains(event.target) && menu.classList.contains("show")) {
    menu.classList.remove("show");
    const menuIconDiv = document.querySelector(".menu-icon div");
    menuIconDiv.innerHTML = "&#9776;";
    menuIconDiv.style.transform = "rotate(0deg)";
  }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const navHeight = document.querySelector("nav").offsetHeight;
        const totalOffset = headerHeight + navHeight + 20;
        
        const targetPosition = targetElement.offsetTop - totalOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

// Add loading animation for images
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img");
  
  images.forEach(img => {
    img.addEventListener("load", function() {
      this.style.opacity = "1";
    });
    
    // Set initial opacity for loading effect
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease-in-out";
    
    // If image is already loaded
    if (img.complete) {
      img.style.opacity = "1";
    }
  });
});

// Add intersection observer for scroll animations
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);
  
  // Observe feature and product cards
  const cards = document.querySelectorAll(".feature, .product, .team-card, .special-item");
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(card);
  });
});

// Add form validation enhancement
document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll("form");
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll("input, textarea, select");
    
    inputs.forEach(input => {
      // Add focus and blur effects
      input.addEventListener("focus", function() {
        this.style.borderColor = "var(--primary-color)";
        this.style.boxShadow = "0 0 0 3px rgba(65, 105, 225, 0.1)";
      });
      
      input.addEventListener("blur", function() {
        this.style.borderColor = "#d1d5db";
        this.style.boxShadow = "none";
        
        // Basic validation
        if (this.hasAttribute("required") && !this.value.trim()) {
          this.style.borderColor = "#ef4444";
          this.style.boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.1)";
        }
      });
    });
    
    // Form submission handling
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Add loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Submitting...";
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual submission logic)
      setTimeout(() => {
        submitBtn.textContent = "Submitted!";
        submitBtn.style.backgroundColor = "var(--accent-color)";
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = "var(--primary-color)";
        }, 2000);
      }, 1000);
    });
  });
});

// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  // Update icon based on current theme
  updateThemeIcon(currentTheme);
  
  // Theme toggle event listener
  themeToggle.addEventListener("click", function() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
    
    // Add a subtle animation to the toggle
    themeToggle.style.transform = "scale(0.9)";
    setTimeout(() => {
      themeToggle.style.transform = "scale(1)";
    }, 150);
  });
  
  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeIcon.textContent = "☀️";
    } else {
      themeIcon.textContent = "🌙";
    }
  }
});

// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("back-to-top");
  
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });
    
    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
