gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
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
    }  
})

tl.to(".square", {x: 500, duration: 2})
  .to(".square", {y: 200, duration: 2})
  .to(".square", {x: 0, duration: 2})

