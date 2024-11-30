gsap.registerPlugin(ScrollTrigger);

// Logo animation
gsap.set(".logo", { transformOrigin: '0 0' });

gsap.from(".logo", {
    scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "50% 50%",
        scrub: true,
        pin: true,
    },
    scale: 10,
    x: 40,
    duration: 1,
    ease: "none",
});

// Project date animation in Section 2
gsap.to("#section2 .project-date", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
    },
    x: 75,
    opacity: 1,
    duration: 3,
    ease: "power2.out"
});

// Project object animation in Section 2
gsap.to("#section2 .project-object img", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 60%",
        end: " top top",
        scrub: 1,
        markers: true
    },
    y: -125,
    x: -195,
    opacity: 1,
    duration: 3,
    ease: "power2.out"
});

// About image animation in Section 3
gsap.to("#section3 .about-img1", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
        markers: true
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out"
});


// Animate h1 in Section 3 with a bounce effect
gsap.from("#section3 .about-me h1", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 75%",         // Start animation when section is 75% in view
        end: "top 50%",          // Stop tracking after top of section passes 50%
        toggleActions: "play none none none", // Play once, no resets
        markers: true            // Debugging markers (optional)
    },
    y: -50,                     // Start 100px above its position
    opacity: 0,                  // Start invisible
    duration: 1,                 // Animation duration
    ease: "bounce.out"           // Bounce effect on entry
});

// Animate h2 in Section 3 with a bounce effect
gsap.from("#section3 .about-me h2", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none none",
        markers: true
    },
    y: -50,
    opacity: 0,
    duration: 1.2,               // Slightly longer for staggered effect
    ease: "bounce.out"
});

// Animate p in Section 3 with a bounce effect
gsap.from("#section3 .about-me p", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 75%",
        end: "top 50%",
        scrub: true,
        markers: true,
    },
    x: 50,
    opacity: 0,
    duration: 1.4,               // Slightly longer for staggered effect
    ease: "power2.in"
});

