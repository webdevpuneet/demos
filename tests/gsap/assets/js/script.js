gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square2", 
        start: "top 60%",
        end: "top 30%",
        markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "1rem",
        },
        toggleClass: 'red',
        toggleActions: 'restart reverse restart reverse',
        pin: '.square',
        pinSpacing: true,
        // onEnter onLeave onEnterBack onLeaveBack
    }   
})