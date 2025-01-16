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
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out"
});

gsap.from("#section3 .about-img2 img", {
    scrollTrigger: {
        trigger: "#section3",        
        start: "top 50%",           
        end: "bottom 70%",           
        scrub: true,                
    },
    x: 275,                         
    opacity: 1,                    
    duration: 2,                  
    ease: "power2.out"              
});

// Underline animation for project h1 elements
document.querySelectorAll("#section2 .project-title").forEach((title) => {
    // Create an underline element dynamically
    const underline = document.createElement("div");
    underline.style.position = "absolute";
    underline.style.left = "0";
    underline.style.width = "0"; // Start with no width
    underline.style.height = "2px"; // Adjust thickness if needed
    underline.style.backgroundColor = "black"; // Underline color
    underline.style.transition = "width 0.3s ease"; // Smooth transition
    underline.style.pointerEvents = "none"; // Prevent interaction
    title.style.position = "relative"; // Ensure the h1 is positioned relatively
    title.appendChild(underline);

    underline.style.transform = "translateY(-8px)"; // Moves the underline up by 5px


    // Hover effect
    title.addEventListener("mouseenter", () => {
        const underlineWidth = title.getAttribute("data-underline-width") || "100%"; 
        gsap.to(underline, { width: underlineWidth, duration: 0.3, ease: "power2.out" });
    });

    title.addEventListener("mouseleave", () => {
        gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });
    });
});


