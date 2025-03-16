document.addEventListener("DOMContentLoaded", () => {
    // Get all download CV buttons
    const downloadButtons = document.querySelectorAll(".download-btn")
  
    downloadButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Show loading state
        const originalText = this.innerHTML
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...'
        this.style.pointerEvents = "none"
  
        // Simulate processing time (in a real scenario, this would be the time to generate the PDF)
        setTimeout(() => {
          // Create a link to download the CV
          const link = document.createElement("a")
          link.href = "assets/luke-coleman-resume.pdf" // Path to your PDF file
          link.download = "Luke-Coleman-Resume.pdf"
          link.target = "_blank"
  
          // Append to body, click and remove
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
  
          // Reset button state with success message
          this.innerHTML = '<i class="fas fa-check"></i> Downloaded!'
  
          // Reset button after 2 seconds
          setTimeout(() => {
            this.innerHTML = originalText
            this.style.pointerEvents = "auto"
          }, 2000)
        }, 1500)
      })
    })
  
    // Handle print resume button
    const printButton = document.querySelector(".download-btn.alt")
    if (printButton) {
      printButton.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Show loading state
        const originalText = this.innerHTML
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...'
        this.style.pointerEvents = "none"
  
        // Simulate processing time
        setTimeout(() => {
          // Print the page
          window.print()
  
          // Reset button state
          this.innerHTML = originalText
          this.style.pointerEvents = "auto"
        }, 500)
      })
    }
  })
  
  