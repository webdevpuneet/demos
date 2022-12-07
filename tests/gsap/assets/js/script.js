gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square", 
        start: "top 60%",
        end: "top 30%",
        markers: true,
        toggleClass: 'red',
        toggleActions: 'restart pause resume reset',
        // onEnter onLeave onEnterBack onLeaveBack
    }
})