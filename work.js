document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle (reusing from script.js)
    const menuToggle = document.querySelector(".menu-toggle")
  
    menuToggle.addEventListener("click", () => {
      // Create mobile menu
      const mobileMenu = document.createElement("div")
      mobileMenu.classList.add("mobile-menu")
  
      // Clone navigation
      const nav = document.querySelector("nav ul").cloneNode(true)
  
      // Create close button
      const closeBtn = document.createElement("div")
      closeBtn.classList.add("close-menu")
      closeBtn.innerHTML = '<i class="fas fa-times"></i>'
  
      // Clone hire button
      const hireBtn = document.querySelector(".hire-btn").cloneNode(true)
  
      // Append elements to mobile menu
      mobileMenu.appendChild(closeBtn)
      mobileMenu.appendChild(nav)
      mobileMenu.appendChild(hireBtn)
  
      // Add mobile menu to body
      document.body.appendChild(mobileMenu)
      document.body.style.overflow = "hidden"
  
      // Close menu event
      closeBtn.addEventListener("click", () => {
        document.body.removeChild(mobileMenu)
        document.body.style.overflow = "auto"
      })
  
      // Close menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll("a")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          document.body.removeChild(mobileMenu)
          document.body.style.overflow = "auto"
        })
      })
    })
  
    // Portfolio filtering
    const filterButtons = document.querySelectorAll(".filter-btn")
    const galleryItems = document.querySelectorAll(".gallery-item")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        // Get filter value
        const filterValue = button.getAttribute("data-filter")
  
        // Filter gallery items
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
            item.style.display = "block"
  
            // Reset animation to trigger again
            item.classList.remove("active")
            setTimeout(() => {
              item.classList.add("active")
            }, 10)
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  
    // Gallery item hover effect
    galleryItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.opacity = "0.6"
          }
        })
      })
  
      item.addEventListener("mouseleave", () => {
        galleryItems.forEach((otherItem) => {
          otherItem.style.opacity = "1"
        })
      })
    })
  })
  
  