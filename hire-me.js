document.addEventListener("DOMContentLoaded", () => {
    // Initialize animations
    initAnimations()
  
    // Mobile menu toggle
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
  
    // Modal functionality
    const serviceButtons = document.querySelectorAll(".service-btn")
    const modalOverlay = document.querySelector(".modal-overlay")
    const modal = document.querySelector(".modal")
    const closeModalBtn = document.querySelector(".close-modal")
    const selectedServiceElement = document.getElementById("selected-service")
    const hireForm = document.getElementById("hire-form")
  
    // Open modal when service is selected
    serviceButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const serviceCard = this.closest(".service-card")
        const serviceName = serviceCard.getAttribute("data-service")
        selectedServiceElement.textContent = serviceName
  
        // Add hidden input for service type
        const serviceInput = document.createElement("input")
        serviceInput.type = "hidden"
        serviceInput.name = "service"
        serviceInput.value = serviceName
  
        // Remove any existing service input
        const existingServiceInput = hireForm.querySelector('input[name="service"]')
        if (existingServiceInput) {
          hireForm.removeChild(existingServiceInput)
        }
  
        hireForm.appendChild(serviceInput)
  
        // Show modal with animation
        modalOverlay.classList.add("active")
        document.body.style.overflow = "hidden"
      })
    })
  
    // Close modal
    closeModalBtn.addEventListener("click", closeModal)
  
    // Close modal when clicking outside
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal()
      }
    })
  
    function closeModal() {
      modalOverlay.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  
    // Form submission to WhatsApp
    hireForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Get form data
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const budget = document.getElementById("budget").value
      const timeline = document.getElementById("timeline").value
      const message = document.getElementById("message").value
      const service = hireForm.querySelector('input[name="service"]').value
  
      // Format WhatsApp message
      const whatsappMessage = `*New Service Request*%0A%0A*Service:* ${service}%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Budget:* ${budget}%0A*Timeline:* ${timeline}%0A%0A*Project Details:*%0A${message}`
  
      // Replace with your actual WhatsApp number
      const whatsappNumber = "+233208517482"
  
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  
      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank")
  
      // Close modal and reset form
      closeModal()
      hireForm.reset()
    })
  
    // Initialize animations function
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
          rootMargin: "0px 0px -50px 0px", // Adjust trigger point
        },
      )
  
      // Observe each animated element
      animatedElements.forEach((element) => {
        observer.observe(element)
      })
    }
  })
  
  