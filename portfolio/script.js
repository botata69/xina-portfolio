gsap.registerPlugin(ScrollTrigger);

// Animation for the logo
gsap.to(".logo", {
    scrollTrigger: {
        trigger: ".container", // Trigger the animation on the container
        start: "top top",      // Start when the top of the container hits the top of the viewport
        end: "50% 50%",        // End when the center of the container hits the center of the viewport
        scrub: true,           // Enable smooth scrubbing
        pin: true,             // Pin the container during the animation
        // markers: true          // Enable markers for debugging (optional)
    },
    x: -1400,
    y: 275,                    // Move to the left
    scale: 0.1,                // Scale down the logo
    duration: 1,               // Animation duration
    ease: "power1.inOut",      // Easing function
    onComplete: () => {        // Callback to execute when animation completes
        gsap.set(".logo", { opacity: 0 }); // Instantly hide the logo
    },
    onReverseComplete: () => { // Callback when animation is reversed
        gsap.set(".logo", { opacity: 1 }); // Instantly show the logo again
    }
});

// Animate the project date in section 2 as it scrolls into view
gsap.to("#section2 .project-date", {
  scrollTrigger: {
      trigger: "#section2",    // Trigger the animation on #section2
      start: "top 70%",        // Start when top of #section2 reaches 80% of viewport
      end: "top 5%",          // End when top of #section2 reaches 20% of viewport
      scrub: 1,                // Smooth scrubbing
      markers: true            // Enable markers for debugging (optional)
  },
  x: 75,                       // Slide project-date 50px to the right
  opacity: 1,                  // Fade it in
  duration: 3,               // Animation duration
  ease: "power2.out"           // Smooth easing
});


// Animate the image in section 2 as it scrolls into view
gsap.to("#section2 .img img", {
    scrollTrigger: {
        trigger: "#section2",    // Trigger animation when #section2 is in view
        start: "top 70%",        // Start when top of #section2 reaches 80% of viewport
        end: "bottom 20%",          // End when top of #section2 reaches 20% of viewport
        scrub: 1,                // Smooth scrubbing
        markers: true            // Enable markers for debugging (optional)
    },
    y: -125,
    x: -195,                     // Move image upward
    opacity: 1,                  // Fade image in
    duration: 3,               // Animation duration
    ease: "power2.out"           // Smooth easing for natural movement
});

