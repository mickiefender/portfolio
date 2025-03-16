document.addEventListener("DOMContentLoaded", () => {
    // Create preloader element
    const preloader = document.createElement("div")
    preloader.className = "preloader"
    preloader.innerHTML = `
          <div class="loader"></div>
          <div class="loader-text">LOADING</div>
          <div class="loader-progress"></div>
      `
  
    // Add preloader to body
    document.body.appendChild(preloader)
  
    // Function to show preloader
    function showPreloader() {
      preloader.classList.add("active")
  
      // Animate progress bar
      const progress = preloader.querySelector(".loader-progress")
      let width = 0
  
      const interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval)
        } else {
          width += 1
          progress.style.width = width + "%"
        }
      }, 20)
    }
  
    // Function to hide preloader
    function hidePreloader() {
      preloader.classList.remove("active")
    }
  
    // Hide preloader when page is fully loaded
    window.addEventListener("load", () => {
      // Add a small delay to ensure animations are visible
      setTimeout(() => {
        hidePreloader()
      }, 500)
    })
  
    // Show preloader when clicking on links
    document.addEventListener("click", (e) => {
      // Check if clicked element is a link
      const link = e.target.closest("a")
  
      if (
        link &&
        link.href &&
        !link.target &&
        link.hostname === window.location.hostname &&
        !link.hasAttribute("data-no-preload") &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        // Show preloader
        showPreloader()
  
        // Allow time for preloader to show before navigating
        e.preventDefault()
  
        setTimeout(() => {
          window.location.href = link.href
        }, 1200) // Increased time to appreciate the animation
      }
    })
  
    // Show preloader when clicking on buttons with onclick that changes location
    document.addEventListener("click", (e) => {
      const button = e.target.closest("button")
  
      if (
        button &&
        button.hasAttribute("onclick") &&
        button.getAttribute("onclick").includes("window.location") &&
        !button.hasAttribute("data-no-preload")
      ) {
        // Extract the URL from the onclick attribute
        const onclickAttr = button.getAttribute("onclick")
        const match = onclickAttr.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/)
  
        if (match) {
          // Show preloader
          showPreloader()
  
          // Allow time for preloader to show before navigating
          e.preventDefault()
  
          setTimeout(() => {
            eval(onclickAttr)
          }, 1200) // Increased time to appreciate the animation
        }
      }
    })
  
    // Show preloader initially and then hide it
    showPreloader()
  })
  
  