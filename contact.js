document.addEventListener("DOMContentLoaded", () => {
    // Contact form submission
    const contactForm = document.querySelector(".contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Get form data
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Show loading state on button
        const submitButton = this.querySelector(".submit-button")
        const originalButtonText = submitButton.innerHTML
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
        submitButton.disabled = true
  
        // Simulate form submission (in a real app, this would be an API call)
        setTimeout(() => {
          // Show success message
          submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
          submitButton.style.backgroundColor = "#4CAF50"
  
          // Clear form
          contactForm.reset()
  
          // Reset button after 3 seconds
          setTimeout(() => {
            submitButton.innerHTML = originalButtonText
            submitButton.style.backgroundColor = ""
            submitButton.disabled = false
          }, 3000)
  
          // In a real application, you would send the form data to a server here
          console.log("Form submitted with:", { name, email, subject, message })
        }, 2000)
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      })
    })
  })
  // Add a function to check for viewport width and adjust elements if needed
function adjustForMobile() {
  const isMobile = window.innerWidth <= 768

  // Adjust contact cards for mobile
  if (isMobile) {
    const contactCards = document.querySelectorAll(".contact-card")
    contactCards.forEach((card) => {
      card.classList.add("mobile-optimized")
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Run mobile adjustments
  adjustForMobile()

  // Re-run on resize
  window.addEventListener("resize", adjustForMobile)

  // Contact form submission
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Show loading state on button
      const submitButton = this.querySelector(".submit-button")
      const originalButtonText = submitButton.innerHTML
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitButton.disabled = true

      // Simulate form submission (in a real app, this would be an API call)
      setTimeout(() => {
        // Show success message
        submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
        submitButton.style.backgroundColor = "#4CAF50"

        // Clear form
        contactForm.reset()

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.innerHTML = originalButtonText
          submitButton.style.backgroundColor = ""
          submitButton.disabled = false
        }, 3000)

        // In a real application, you would send the form data to a server here
        console.log("Form submitted with:", { name, email, subject, message })
      }, 2000)
    })
  }

  // Smooth scrolling for anchor links - MODIFIED to ensure it doesn't break normal scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        // Use scrollIntoView instead of scrollTo for better compatibility
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
    })
  })
})

