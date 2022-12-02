gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square", 
        start: "top 60%",
        end: "bottom 30%",
        markers: true,
        scrub: true,
        toggleClass: 'red'
    }
})