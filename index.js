document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.page-link')
  const scrollToTopButton = document.querySelector('#scrollToTop')

  const amazingCircle = document.querySelector('#amazingCircle')
  const toggleAnimationBtn = document.querySelector('#toggleAnimation')

  // Add click event listeners to each anchor link
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault() // Prevent the default anchor link behavior
      const targetId = link.getAttribute('href').substring(1) // Get the target section ID
      const targetElement = document.getElementById(targetId) // Find the target element

      if (!targetElement) {
        return // If the target element doesn't exist, do nothing
      }
      // Smoothly scroll to the target element
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    })
  })

  // Show or hide the "Scroll to Top" button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.remove('hidden')
      scrollToTopButton.classList.add('visible')
    } else {
      scrollToTopButton.classList.remove('visible')
      scrollToTopButton.classList.add('hidden')
    }
  })

  // Scroll to the top of the page when the "Scroll to Top" button is clicked
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  // Toggle the animation state of the "amazing circle" and update the button text
  toggleAnimationBtn.addEventListener('click', () => {
    // If the animation is paused or not started, start the animation
    if (amazingCircle.style.animationPlayState === 'paused' || amazingCircle.style.animationPlayState === '') {
      amazingCircle.style.animationPlayState = 'running'
      toggleAnimationBtn.innerHTML = 'Stop Animation'
    } else {
      // If the animation is running, pause the animation
      amazingCircle.style.animationPlayState = 'paused'
      toggleAnimationBtn.innerHTML = 'Start Animation'
    }
  })
})
