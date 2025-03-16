document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const header = document.querySelector("header")

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

  // Animate stats on scroll
  const stats = document.querySelectorAll(".stat-item h2")
  const statsSection = document.querySelector(".stats")

  function animateStats() {
    stats.forEach((stat) => {
      const target = Number.parseInt(stat.textContent)
      let count = 0
      const duration = 2000 // 2 seconds
      const interval = duration / target

      const counter = setInterval(() => {
        count++
        stat.textContent = count

        if (count === target) {
          clearInterval(counter)
        }
      }, interval)
    })
  }

  // Check if stats section is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Animate stats when scrolled into view
  let animated = false
  window.addEventListener("scroll", () => {
    if (!animated && isInViewport(statsSection)) {
      animateStats()
      animated = true
    }
  })

  // Check on page load
  if (isInViewport(statsSection)) {
    animateStats()
    animated = true
  }

  // Portfolio item hover effect enhancement
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      portfolioItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.style.opacity = "0.6"
        }
      })
    })

    item.addEventListener("mouseleave", () => {
      portfolioItems.forEach((otherItem) => {
        otherItem.style.opacity = "1"
      })
    })
  })
})

