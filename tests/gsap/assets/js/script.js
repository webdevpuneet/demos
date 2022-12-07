gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square", 
        start: "top 60%",
        end: "top 30%",
        markers: {
            startColor: "purple",
            endColor: "purple",
            fontSize: "3rem",
        },
        toggleClass: 'red',
        toggleActions: 'restart pause resume reset',
        // onEnter onLeave onEnterBack onLeaveBack
    }
})