export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = 80;
    const startPosition = window.pageYOffset;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds
    let startTime = null;

    // Easing function for smooth animation
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
};
