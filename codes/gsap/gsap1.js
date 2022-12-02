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
    scrollTrigger: ".div3"
})

