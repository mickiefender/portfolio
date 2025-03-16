document.addEventListener("DOMContentLoaded", () => {
    // Initialize animations when DOM is loaded
    initAnimations()
  
    function initAnimations() {
      // Get all elements with the 'animate' class
      const animatedElements = document.querySelectorAll(".animate")
  
      // Create Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // If element is in viewport
            if (entry.isIntersecting) {
              // Add active class to trigger animation
              entry.target.classList.add("active")
              // Unobserve element after animation is triggered
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
          rootMargin: "0px 0px -50px 0px", // Adjust trigger point (negative value means element needs to scroll further up)
        },
      )
  
      // Observe each animated element
      animatedElements.forEach((element) => {
        observer.observe(element)
      })
  
      // Add floating animation to hero image
      const heroImage = document.querySelector(".image-container")
      if (heroImage) {
        heroImage.classList.add("float")
      }
    }
  })
  
  