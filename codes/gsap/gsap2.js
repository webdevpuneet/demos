gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

let slideID = 0;

const titles = selectAll('.section-title');
const sections = selectAll("section");
const slides = selectAll(".slide");


function initIntro() {
    console.log('init intro animation');
}


function scrollTop() {
    gsap.to(window, {
        duration: 2, 
        scrollTo: {
            y: "#slide-0"
        },
        ease: "power2.inOut"
    });
}


function initGlobe() {
    console.log('init globe');

    gsap.to( ".tbwsecHero__earth", {
        width: '30vw',
        transform: 'translate3D(-50%, -15%, 0)',
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            pin: '.tbwsecHero__earth',
            scrub: true,
            markers: true,
        }  
    });
  
}


function initTablet() {
    console.log('init tablet');

    gsap.from(".tbwsecTablet__device", {scale: 1.5, height: '90vh', opacity: 0});

    gsap.to( ".tbwsecTablet__device", {
        scale: 1, height: '90vh', opacity: 1,
        pause: true,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            markers: true,
        }  
    });

    gsap.to( ".tbwsecTablet__device", {
        scale: 1, height: '90vh', opacity: 1,
        pause: true,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            markers: true,
        }  
    });
}

function initScrollSlide() {
    slides.forEach((slide, i) => {
        gsap.to(slide, {
            scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom",
                snap: {
                    snapTo: 0.5,
                    duration: 2,
                    ease: 'power4.inOut'
                }
            }
        })
    });
}

function initKeys() {
    document.addEventListener('keydown', (e) => {
        if(event.keyCode == 40) { //down arrow to next slide
            e.preventDefault();
            if(slideID < 0) {
                slideID = 0;
            }else if(slideID > slides.length ){
                slideID = slides.length;
            }
            console.log( slideID);
                slideID++;
                gsap.to(window, {
                    duration: 1, 
                    scrollTo:{
                        y: "#slide-" + slideID 
                    },
                    ease: "power2.inOut"
                });
            
        }
        else if(event.keyCode == 38) { // up arrow to top
            e.preventDefault();
            if(slideID < 0) {
                slideID = 0;
            }
            slideID--;
            gsap.to(window, {
                duration: 1, 
                scrollTo:{
                    y: "#slide-" + slideID 
                },
                ease: "power2.inOut"
            });
        }
    });
}

function initSlideAnimations() {
    // Animate elements on slide as trigger

    sections.forEach((section, i) => { 
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom", // position of trigger meets the scroller position
                scrub: true,

            }
            
        });

        tl.from(section.querySelectorAll('.slideAnim-text'), {
            x: 0,
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 1)
    });

}


function initSelfAnimations() {
    // Animate elements on itself

    sections.forEach((section, i) => {
        let animText = section.querySelectorAll('.selfAnim-text');
        if( animText ){
            animText.forEach( (text, j) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: text,
                        start: "50% 50%", // position of trigger meets the scroller position
                        scrub: true,
                    }
                });
        
                tl.from(text, {
                    x: 0,
                    y: 50,
                    opacity: 0,
                    duration: 2,
                    ease: "power4"
                }, 0.4)
            })
        }
    });

}




function init() { 
    initKeys();
    initScrollSlide();
    initSlideAnimations();
    initSelfAnimations();
    initIntro();
    initGlobe();
    initTablet();
}

window.onload = () => {
	init();
};