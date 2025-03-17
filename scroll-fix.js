// This script ensures scrolling works properly on mobile devices
document.addEventListener("DOMContentLoaded", () => {
    // Check if we're on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  
    if (isMobile) {
      // Remove any CSS that might prevent scrolling
      document.documentElement.style.overflow = "auto"
      document.body.style.overflow = "auto"
      document.documentElement.style.position = "static"
      document.body.style.position = "static"
      document.documentElement.style.height = "auto"
      document.body.style.height = "auto"
  
      // Force a small reflow to ensure scrolling is enabled
      setTimeout(() => {
        window.scrollTo(0, 1)
        window.scrollTo(0, 0)
      }, 100)
    }
  
    // Add touch events to ensure scrolling works
    document.addEventListener("touchstart", () => {}, { passive: true })
    document.addEventListener("touchmove", () => {}, { passive: true })
  })
  
  