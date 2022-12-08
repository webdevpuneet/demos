// Install Plugins - https://greensock.com/docs/v3/Installation
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>


// Register plugin 
gsap.registerPlugin(ScrollTrigger);

// ease set to back, elastic, and other - https://greensock.com/docs/v3/Eases
gsap.to(".logo", {duration:2, x: 300, backgroundColor:"#560563", borderRadius: "50%", border: "5px solid white", ease: "back"});

// writing like css
gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square", 
        start: "center center",
        markers: true,
        scrub: true,
        toggleClass: 'red'
    }
})

// setting triggers top bottom, pixel and in percentage
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

// Toggle Actions:
// toggleActions: 'restart reverse restart reverse',
// toggleActions: 'restart pause resume none',
// toggleActions: 'restart pause resume complete',
// toggleActions: 'restart pause resume reset',

// Customise Markers / Indicators
/*
    markers: {
        startColor: "purple",
        endColor: "purple",
        fontSize: "3rem",
    },
*/


// Scrub Property - https://www.youtube.com/watch?v=SCfZBtedicw&list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp&index=4
/**
    scrub: true,
 */

/*  Pinning, with same and other one a trigger

    pin: true,

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
        pinSpacing: true, // adds margin/padding so pinned element does not overlaps
        // onEnter onLeave onEnterBack onLeaveBack
    }  
*/


