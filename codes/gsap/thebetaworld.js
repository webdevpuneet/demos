gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);
ScrollTrigger.config({ 
    limitCallbacks: true,
    ignoreMobileResize: true
 });


select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);


let vw = Math.max(document.documentElement.clientWidth);
let vh = Math.max(document.documentElement.clientHeight);
let ratio = vw/vh;


window.addEventListener("load", (event) => {

});

window.addEventListener("resize", (event) => {

});


/* Scroll to top */
// function scrollTop() {
//     gsap.to(window, {
//         duration: 2, 
//         scrollTo: {
//             y: "#slide-0"
//         },
//         ease: "power2.inOut"
//     });
// }


const titles = selectAll('.section-title');
const sections = selectAll("section");
const slides = selectAll(".slide");

// Creating a custom ease for the animations:
CustomEase.create("comeIn", ".82,.4,.26,.62");

// Globe top value on first screen after intro animation ends
let globeTop = '170%';
if(ratio < 1.5){
    globeTop = '135%';
}

// Globe top value during intro animation start
let globeTopStart = '50%';

function initIntroLandscape() {
    
    gsap.set(".tbwHeader", { opacity:0,  y: -20 });
    gsap.set(".tbwsecHero__title, .tbwsecHero__desc, .tbwsecHero__buttons", { opacity: 0, y: 100 });
    gsap.set(".tbwsecHero__title", {scale: 0.50});
    gsap.set(".tbwsecHero__globe", { opacity: 0,});
    gsap.set(".tbwsecHero__logo", { opacity: 0 });

    const tl_globe = gsap.timeline({
        defaults: { 
            ease: "comeIn",
        },
        smoothChildTiming: true,
        onComplete: initGlobeLandscape,
    })
    
    tl_globe.to(".tbwsecHero__globe", {duration: 0, opacity: 1,  })
            .to(".tbwsecHero__logo", {duration: 1, opacity: 1})
            .to(".tbwsecHero__globe", {duration: 1, delay: 1, top: '50%', left: '50%', transform:'translate3D(-50%, -50%, 0) scale(0.40)'}, "-=1")
            .to(".tbwsecHero__logo", {duration: 1, scale: 0.5}, "-=1")
            .to(".tbwsecHero__logo", {duration: 0, opacity: 0})
            .to(".tbwsecHero__globe", {duration: 1, delay: 0.25, top: globeTop, left: '50%', transform:'translate3D(-50%, -50%, 0) scale(1)'})
            .to(".tbwsecHero__title", {duration: 1, opacity: 1, y: 0, scale:1}, "-=1")
            .to(".tbwsecHero__desc", {duration: 1,  y: 0, opacity: 1}, "-=0.75")
            .to(".tbwsecHero__buttons", {duration: 1,  y: 0, opacity: 1}, "-=1")
            .to(".tbwHeader", {duration: 1, opacity: 1, y: 0}, "-=1")
            .to("body", {duration: 0, overflowY: 'auto'}, "-=1")
            .to(".anti-scroller", {duration: 0, height: 'auto'}, "-=1")
            .to(".tbwsecHero__content", {zIndex: 5})

}


function initIntroPortrait() {
    
    gsap.set(".tbwHeader", { opacity:0,  y: -20 });
    gsap.set(".tbwsecHero__title, .tbwsecHero__desc, .tbwsecHero__buttons", { opacity: 0, y: 100 });
    gsap.set(".tbwsecHero__title", {scale: 0.50});
    gsap.set(".tbwsecHero__globe", { opacity: 0,});
    gsap.set(".tbwsecHero__logo", { opacity: 0 });

    const tl_globe = gsap.timeline({
        defaults: { 
            ease: "comeIn",
        },
        smoothChildTiming: true,
        onComplete: initGlobePortrait,
    })

    tl_globe.to(".tbwsecHero__globe", {duration: 0, opacity: 1,  })
            .to(".tbwsecHero__logo", {duration: 1, opacity: 1})
            .to(".tbwsecHero__globe", {duration: 1, delay: 1, top: '50%', left: '50%', transform:'translate3D(-50%, -50%, 0) scale(0.40)'}, "-=1")
            .to(".tbwsecHero__logo", {duration: 1, scale: 0.5}, "-=1")
            .to(".tbwsecHero__logo", {duration: 0, opacity: 0})
            .to(".tbwsecHero__globe", {duration: 1, delay: 0.25, top: '100%', left: '50%', transform:'translate3D(-50%, -50%, 0) scale(1)'})
            .to(".tbwsecHero__title", {duration: 1, opacity: 1, y: 0, scale:1}, "-=1")
            .to(".tbwsecHero__desc", {duration: 1,  y: 0, opacity: 1}, "-=0.75")
            .to(".tbwsecHero__buttons", {duration: 1,  y: 0, opacity: 1}, "-=1")
            .to(".tbwHeader", {duration: 1, opacity: 1, y: 0}, "-=1")
            .to("body", {duration: 0, overflowY: 'auto'}, "-=1")
            .to(".anti-scroller", {duration: 0, height: 'auto'}, "-=1")
            .to(".tbwsecHero__content", {zIndex: 5})
            
}


function initGlobeLandscape() {
   

    gsap.fromTo(".tbwsecHero__title, .tbwsecHero__desc, .tbwsecHero__buttons",{
        y: 0,
    }, {
        y: -500,
        stagger:.05, 
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecHero__globe", {
        top: globeTop,
        scale: 1,
    },{
        top: '50%', 
        scale: 0.32,

        ease: "comeIn",
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top bottom",
            end: "top 0%",
            scrub: true,
            
        }  
    });
    
    gsap.fromTo( ".tbwsecHero__globe", {
        top: '50%', 
        left: '50%', 
        opacity: 1,
        scale: 0.32,
    },{
        top: '50%', 
        left: '25%', 
        opacity: 1,
        scale: 0.32,
        ease: "comeIn",
        scrollTrigger: {
            trigger: ".tbwsecWhatIsBetaworld", 
            start: "top bottom",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecHero__globe", {
        top: '50%', 
        left: '25%', 
        opacity: 1,
        scale: 0.32,
    }, {
        top: '50%', 
        left: '170%', 
        opacity: 1,
        scale: 1,
        ease: "comeIn",
        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "top bottom",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.set(".tbwsecHero__globe", {
        top: globeTop, 
        left: '50%', 
        opacity: 1,
        scale: 1,
    });
}


function initGlobePortrait() {

    gsap.fromTo(".tbwsecHero__title, .tbwsecHero__desc, .tbwsecHero__buttons",{
        y: 0,
    }, {
        y: -500,
        stagger:.05, 
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecHero__globe", {
        top: '100%',
        scale: 1,
    },{
        top: '50%', 
        scale: 0.32,

        ease: "comeIn",
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top bottom",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecHero__globe", {
        top: '50%', 
        left: '50%', 
        opacity: 1,
        scale: 0.32,
    },{
        top: '25%', 
        left: '50%', 
        opacity: 1,
        scale: 0.37,
        ease: "comeIn",
        scrollTrigger: {
            trigger: ".tbwsecWhatIsBetaworld", 
            start: "top bottom",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecHero__globe", {
        top: '25%', 
        left: '50%', 
        opacity: 1,
        scale: 0.37,
    }, {
        top: '50%', 
        left: '170%', 
        opacity: 1,
        scale: 1,
        ease: "comeIn",
        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "top bottom",
            end: "top 0%",
            scrub: true,
            
        }  
    });
    
    gsap.set(".tbwsecHero__globe", {
        top: '100%', 
        left: '50%', 
        opacity: 1,
        scale: 1,
    });
  
}


function initTabletLandscape() {
    gsap.set( ".tbwsecTablet__deviceBg", {
        opacity:0,
    });

    gsap.fromTo( ".tbwsecTablet__deviceBg", {
        opacity: 0, 
    },{
        ease: "comeIn",
        opacity: 1,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 90%",
            scrub: true,
        }  
    });


    gsap.set( ".tbwsecTablet__device", {
        opacity:0,
    });

    gsap.fromTo( ".tbwsecTablet__device", {
        opacity:0,
    },{
        opacity:1,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 90%",
            scrub: true,
        }  
    });

    gsap.to( ".tbwsecTablet__device", {
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "100% 0%",
            scrub: true,
            
            pin: '.tbwsecTablet__device',
            anticipatePin: 1,
        }  
    });

    gsap.fromTo( ".tbwsecTablet__device", {
        scale: 2,
    },{
        ease: "comeIn",
        scale:0.9, 
        opacity:1,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecTablet__device", {
        opacity:1, scale:0.9, 
    },{
        ease: "comeIn",
        scale:2, opacity:0,
            scrollTrigger: {
                trigger: ".tbwsecWhatIsBetaworld", 
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                
            }  
        } 
    );

    gsap.set( ".tbwsecTablet__device", {
        opacity:0,
    });
}


function initTabletPortrait() {
    gsap.from( ".tbwsecTablet__device", {
        rotation: 90,
    });

    gsap.set( ".tbwsecTablet__deviceBg", {
        opacity:0,
    });
    
    gsap.fromTo( ".tbwsecTablet__deviceBg", {
        opacity: 0, 
    },{
        ease: "comeIn",
        opacity: 1,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 90%",
            scrub: true,
        }  
    });

    gsap.fromTo( ".tbwsecTablet__device", {
        opacity:0,
    },{
        opacity:1,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 90%",
            scrub: true,
        }  
    });
    
    gsap.to( ".tbwsecTablet__device", {
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "100% 0%",
            scrub: true,
            
            pin: '.tbwsecTablet__device',
            anticipatePin: 1,
        }  
    });

    gsap.fromTo( ".tbwsecTablet__device", {
        scale: 2, rotation: 90,
    },{
        ease: "comeIn",
        scale:0.4, rotation: 90,
        scrollTrigger: {
            trigger: ".tbwsecTablet", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecTablet__device",{
        scale:0.4, opacity:1, rotation: 90,
    },{
        ease: "comeIn",
        scale:2, opacity:0, rotation: 90,
            scrollTrigger: {
                trigger: ".tbwsecWhatIsBetaworld", 
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                
            }  
        } 
    );
    
    gsap.set( ".tbwsecTablet__device", {
        opacity:0,
    });
}


function whatIsBetaworldLandscape() {
    gsap.fromTo( ".tbwsecWhatIsBetaworld__inner",{
        scale:(0), opacity:0, borderRadius: '50%', 
    },{
        scale:(1), opacity:1, borderRadius: '0', 
        ease: "comeIn",
            scrollTrigger: {
                trigger: ".tbwsecWhatIsBetaworld", 
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                
                pin: '.tbwsecWhatIsBetaworld__inner',
                anticipatePin: 1,
            }  
        } 
    );

    gsap.fromTo( ".tbwsecWhatIsBetaworld__imgTitle, .tbwsecWhatIsBetaworld__title, .tbwsecWhatIsBetaworld__desc, .tbwsecWhatIsBetaworld__btn",{
        x:-500, 
    },
    {
        x: 0, 
        ease: "comeIn",
        stagger:.1,
        delay: 0.5,

        scrollTrigger: {
            trigger: ".tbwsecWhatIsBetaworld", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecWhatIsBetaworld__container",{
        x:0, 
    },
    {
        x: 500, 
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwsecFeatures ", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });
}


function whatIsBetaworldPortrait() {
    gsap.fromTo( ".tbwsecWhatIsBetaworld__inner",{
        scale:(0), opacity:0, borderRadius: '50%', 
    },{
        scale:(1), opacity:1, borderRadius: '0', 
        ease: "comeIn",
            scrollTrigger: {
                trigger: ".tbwsecWhatIsBetaworld", 
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                
                pin: '.tbwsecWhatIsBetaworld__inner',
                anticipatePin: 1,
            }  
        } 
    );

    gsap.fromTo( ".tbwsecWhatIsBetaworld__imgTitle, .tbwsecWhatIsBetaworld__title, .tbwsecWhatIsBetaworld__desc, .tbwsecWhatIsBetaworld__btn",{
        y:-100,
        scale: 0.5,
    },
    {
        y: 0,
        scale: 1,
        ease: "comeIn",
        stagger:-.1,
        delay: 0.5,

        scrollTrigger: {
            trigger: ".tbwsecWhatIsBetaworld", 
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            
        }  
    });

}


function tbwSecFeaturesLandscape() {
    gsap.fromTo( ".tbwsecFeatures, .tbwsecWhatIsBetaworld__inner",{
        backgroundColor:'#F6F6F6', 
    },
    {
        backgroundColor:'#b5b5b5', 

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "1% 100%",
            end: "75% 100%",
            scrub: true,
            
        }  
    });

    gsap.to( ".tbwsecFeatures, .tbwsecWhatIsBetaworld__inner",{
        backgroundColor:'#F6F6F6', 

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "75% 100%",
            end: "100% 100%",
            scrub: true,
            
        }  
    });


    gsap.fromTo( ".tbwsecFeatures__row",{
        y: 1000, 
    },
    {
        y: 0,
        ease: "comeIn",
        stagger:0.1,

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecFeatures__row",{
        y: 0,
    },
    {
        y: -1000,
        ease: "comeIn",
        stagger:0.1,

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "bottom 100%",
            end: "200% 100%",
            scrub: true,
            
        }  
    });
}


function tbwSecFeaturesPortrait() {
    gsap.fromTo( ".tbwsecFeatures, .tbwsecWhatIsBetaworld__inner",{
        backgroundColor:'#F6F6F6', 
    },
    {
        backgroundColor:'#b5b5b5', 

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "1% 100%",
            end: "75% 100%",
            scrub: true,
            
        }  
    });

    gsap.to( ".tbwsecFeatures, .tbwsecWhatIsBetaworld__inner",{
        backgroundColor:'#F6F6F6', 

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "75% 100%",
            end: "100% 100%",
            scrub: true,
            
        }  
    });


    gsap.fromTo( ".tbwsecFeatures__rowMob",{
        y: 200, 
    },
    {
        y: 0,
        ease: "comeIn",
        stagger:0.1,

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwsecFeatures__rowMob",{
        y: 0,
    },
    {
        y: -200,
        ease: "comeIn",
        stagger:0.1,

        scrollTrigger: {
            trigger: ".tbwsecFeatures", 
            start: "bottom 100%",
            end: "200% 100%",
            scrub: true,
            
        }  
    });
}


function tbwLongSec() {
    //tbwLongSec-1
    gsap.fromTo( ".tbwLongSec-1",{
        backgroundPosition: 'left -100vh center',
    },
    {
        backgroundPosition: 'left -45vh center',
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwLongSec-1", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-1",{
        backgroundPosition: 'left -45vh center',
    },
    {
        backgroundPosition: 'left -100vh center',
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwLongSec-2", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-1-img",{
       scale: 1.5,
    },
    {
        scale: 1,

        scrollTrigger: {
            trigger: ".tbwLongSec-1", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-1-img",{
        scale: 1,
     },
     {
         scale: 1.5,
 
         scrollTrigger: {
             trigger: ".tbwLongSec-2", 
             start: "top 100%",
             end: "bottom 100%",
             scrub: true,
             
         }  
     });

    gsap.fromTo( ".tbwLongSec-2",{
        backgroundPosition: 'right -100vh center',
    },
    {
        backgroundPosition: 'right -45vh center',
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwLongSec-2", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });
    gsap.fromTo( ".tbwLongSec-2",{
        backgroundPosition: 'right -45vh center',
        
    },
    {
        backgroundPosition: 'right -100vh center',
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwLongSec-3", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });
    gsap.fromTo( ".tbwLongSec-2-img",{
        scale: 1.5,
     },
     {
         scale: 1,
 
         scrollTrigger: {
             trigger: ".tbwLongSec-2", 
             start: "top 100%",
             end: "bottom 100%",
             scrub: true,
             
         }  
     });
 
    gsap.fromTo( ".tbwLongSec-2-img",{
        scale: 1,
    },{
        scale: 1.5,

        scrollTrigger: {
            trigger: ".tbwLongSec-3", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });
    

    gsap.fromTo( ".tbwLongSec-3",{
        backgroundPosition: 'left -100vh center',
    },{
        backgroundPosition: 'left -45vh center',
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwLongSec-3", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-3",{
        backgroundPosition: 'left -45vh center',
    },{
        backgroundPosition: 'left -100vh center',
        ease: "comeIn",

        scrollTrigger: {
            trigger: ".tbwsecJoinBetaworld", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-3-img",{
        scale: 1.5,
     },{
         scale: 1,
 
         scrollTrigger: {
             trigger: ".tbwLongSec-3", 
             start: "top 100%",
             end: "bottom 100%",
             scrub: true,
             
         }  
     });
 
    gsap.fromTo( ".tbwLongSec-3-img",{
        scale: 1,
    },{
        scale: 1.5,

        scrollTrigger: {
            trigger: ".tbwsecJoinBetaworld", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-1 .slideUpOut",{
    y: 500,
    },{
        y: 0,
        stagger: 0.1,
        ease: 'comIn',

        scrollTrigger: {
            trigger: ".tbwLongSec-1", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-2 .slideUpOut",{
    y: 500,
    },{
        y: 0,
        stagger: 0.1,
        ease: 'comIn',

        scrollTrigger: {
            trigger: ".tbwLongSec-2", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

    gsap.fromTo( ".tbwLongSec-3 .slideUpOut",{
    y: 500,
    },{
        y: 0,
        stagger: 0.1,
        ease: 'comIn',

        scrollTrigger: {
            trigger: ".tbwLongSec-3", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
    });

}


function joinBetaworldSec() {
    gsap.fromTo( ".tbwsecJoinBetaworld__container",{
        transform: 'translateY(100%) rotate(25deg)',
        opacity:0,
     },{
        transform: 'translateY(-50%) rotate(0deg)',
        ease: 'comIn',
        opacity: 1,

        scrollTrigger: {
            trigger: ".tbwsecJoinBetaworld", 
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
            
        }  
     });
}


function tbwsecHistorySplashLandscape() {
    gsap.fromTo( ".tbwsecHistorySplash",{
        transform: 'translateY(0)',
    },{
        transform: 'translateY(-100%)',
        ease: 'comIn',
        delay:1.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".tbwsecHistory", 
            toggleActions: 'restart complete none reverse',
            start: "top 100%",
            end: "bottom 100%",
            

        }  
    });
}


function tbwsecHistorySplashPortrait() {
    gsap.fromTo( ".tbwsecHistorySplash",{
        transform: 'translateY(0)',
    },{
        transform: 'translateY(-100%)',
        ease: 'comIn',
        duration: 1.25,
        scrollTrigger: {
            trigger: ".tbwsecHistory", 
            toggleActions: 'restart complete none reverse',
            start: "top 100%",
            end: "bottom 100%",
            scrub: true,
        }  
    });
}


function tbwsecHistory() {
    gsap.fromTo( ".tbwsecHistory-row",{
        transform: 'translateY(200px)',
    },{
        transform: 'translateY(0%)',
        ease: 'comIn',
        delay:1.25,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".tbwsecHistory", 
            toggleActions: 'restart complete none reverse',
            start: "top 100%",
            end: "bottom 100%",

        }  
    });
}


function tbwsecNews() {
    gsap.fromTo( ".tbwsecNews-row",{
        transform: 'translateY(200px)',
    },{
        transform: 'translateY(0%)',
        ease: 'comIn',
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".tbwsecNews", 
            toggleActions: 'restart complete none reverse',
            start: "top 100%",
            end: "top 50%",
            scrub: true,

        }  
    });
}


// Scroll animate sections on mousewheel
function initScrollSlide() {
    
    slides.forEach((slide, i) => {
        gsap.to(slide, {
            ease: "none",
            scrollTrigger: {
                trigger: slide,
                start: "top 100%",
                end: "top 0%",
                snap: {
                    snapTo: 1,
                    duration: 1,
                    directional: true,
                }
            }
        })
    });
}

// Scroll to top before page reloads
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


function initKeys() {
    
    let slideID = 0;
    
    document.addEventListener('keydown', (e) => {
        

        if(slideID <= 0) {
            slideID = 0;
        }else if(slideID >= slides.length ){
            slideID = slides.length - 1;
        }

        if(event.keyCode == 40) { //down arrow to next slide
            e.preventDefault();
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


// function initSlideAnimations() {
//     // Animate elements on slide as trigger

//     slides.forEach((section, i) => { 
//         let tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top bottom", // position of trigger meets the scroller position
//                 scrub: true,

//             }
            
//         });

//         tl.from(section.querySelectorAll('.slideAnim-text'), {
//             x: 0,
//             y: 50,
//             opacity: 0,
//             duration: 2,
//             ease: "power4"
//         }, 1)
//     });

// }


// function initSelfAnimations() {
//     // Animate elements on itself

//     sections.forEach((section, i) => {
//         let animText = section.querySelectorAll('.selfAnim-text');
//         if( animText ){
//             animText.forEach( (text, j) => {
//                 let tl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: text,
//                         start: "50% 50%", // position of trigger meets the scroller position
//                         scrub: true,
//                     }
//                 });
        
//                 tl.from(text, {
//                     x: 0,
//                     y: 50,
//                     opacity: 0,
//                     duration: 2,
//                     ease: "power4"
//                 }, 0.4)
//             })
//         }
//     });

// }


// Init
function init() { 
    window.scrollTo(0, 0);

    //initSelfAnimations();

    if(vw > vh){
        initIntroLandscape();
        initTabletLandscape();
        whatIsBetaworldLandscape();
        tbwSecFeaturesLandscape();
        tbwsecHistorySplashLandscape();
    }else{
        initIntroPortrait();
        initTabletPortrait();
        whatIsBetaworldPortrait();
        tbwSecFeaturesPortrait();
        tbwsecHistorySplashPortrait();
    }
    
    tbwLongSec();
    joinBetaworldSec();
    tbwsecHistory();
    tbwsecNews();

    // Scroll slide sections on big screens
    if(vw >= 1200){
        initScrollSlide();
        //initKeys();
    }
}


// Animate Menu links
const animateMenuLinks = function(active){
    if (active){
        gsap.set(".menu ul li a", {
            x: -200,
        })
        
        gsap.to(".menu ul li a", {
            x: 0,
            duration: 0.23,
            delay: 0.5,
            ease: "power2.out"
        })
    }
};


/* Other JS */
const menubtn = select('.menu-hamburder');
const tbwHeader = select('.tbwHeader');
menubtn.addEventListener('click',function(){
    tbwHeader.classList.toggle('active');
    if ( tbwHeader.classList.contains('active')){
        //animateMenuLinks('active');
    }else{
        //animateMenuLinks();
    }
    
})


/* Scroll smooth to a section, using jQuery */
$(document).ready(function(){
    $(".menu a").on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();
        $( ".anti-scroller" ).fadeTo( "fast" , 0, function() {
            // Animation complete.
        });

        // Store hash
        var hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 
        {
            //duration: $(hash).offset().top / 1.5,
            duration: 1000,
            // specialEasing: {
            //     width: "linear",
            //     height: "easeOutBounce"
            // },
            complete: function() {
                //window.location.hash = hash;
                setTimeout(function(){
                    $( ".anti-scroller" ).fadeTo( "slow" , 1, function() {
                        // Animation complete.
                    });
                }, 0);
                
            }
        });
        
        }
    });
});





/* line and ring coordinates */
let coordsArray = [
    {
        startLat: 23,
        startLng: 76,
        endLat: 36,
        endLng: 99,
        color: 'violet',
    },
    {
        startLat: 25,
        startLng: 41,
        endLat: 18,
        endLng: 28,
        color: 'pink',
    },
    {
        startLat: 14,
        startLng: 75,
        endLat: -0.1,
        endLng: 100,
        color: 'blue',
    },
    {
        startLat: 7.3,
        startLng: -75.7,
        endLat: 24.5,
        endLng: -103.7,
        color: 'yellow',
    },
    {
        startLat: 20.6,
        startLng: 6.4,
        endLat: 50.1,
        endLng: 20.2,
        color: 'orange',
    },
    {
        startLat: -18.1,
        startLng: 46.4,
        endLat: -13.6,
        endLng: 23.1,
        color: 'green',
    },
    {
        startLat: 4.5,
        startLng: 18.4,
        endLat: -8.2,
        endLng: -46.6,
        color: 'violet',
    },
    {
        startLat: 37.7,
        startLng: -101.1,
        endLat: 57.4,
        endLng: -113.1,
        color: 'blue',
    },
    {
        startLat: -23.0,
        startLng: 131.9,
        endLat: 29.3,
        endLng: 108.5,
        color: 'yellow',
    },
    {
        startLat: 48.2,
        startLng: -78.5,
        endLat: 30.3,
        endLng: -1.0,
        color: 'green',
    },
    
];


const ARC_REL_LEN = 1; // relative to whole arc
const FLIGHT_TIME = 2000;
const NUM_RINGS = 1;
const RINGS_MAX_R = 3; // deg
const RING_PROPAGATION_SPEED = 2; // deg/sec

const arcsData = [...Array(coordsArray.length).keys()].map((currElement, index) => ({
    startLat: coordsArray[index]['startLat'],
    startLng: coordsArray[index]['startLng'],
    endLat: coordsArray[index]['endLat'],
    endLng: coordsArray[index]['endLng'],
    //color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]],
    color: coordsArray[index]['color'],
    initialGap: Math.floor(Math.random() * coordsArray.length),
}));

fetch('./js/countries.geojson').then(res => res.json()).then(countries => {
    const world = Globe({
        animateIn: false,
    })
    .width(1.55*vw)
    .height(1.55*vw)
    .backgroundColor('#ffffff00')
    .globeImageUrl('./images/landing/globe/earth-blue4.jpg')
    //.globeImageUrl('https://unpkg.com/three-globe@2.24.13/example/img/earth-night.jpg')
    .showAtmosphere(true)
    .atmosphereColor('#ffffff')
    .atmosphereAltitude(0.075)

    // Hex Polygons
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .hexPolygonAltitude(0.001)
    //.hexPolygonColor(() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`)
    .hexPolygonColor(() => `#ffffff`)
    .hexPolygonLabel(({ properties: d }) => ``)

    // Globe click lat long
    .onGlobeClick(emitArc)

    // On Globe Ready
    .onGlobeReady( init )
    
    // Arcs
    .arcColor(() => '#eaa538')
    .onGlobeClick(emitArc)
    .arcDashLength(ARC_REL_LEN)
    .arcDashGap(2)
    .arcDashInitialGap(1)
    .arcDashAnimateTime(FLIGHT_TIME)
    .arcsTransitionDuration(0)
    .arcStroke(0.2)

    // Rings
    .ringColor(() => `#eaa538`)
    .ringMaxRadius(RINGS_MAX_R)
    .ringPropagationSpeed(RING_PROPAGATION_SPEED)
    .ringRepeatPeriod(FLIGHT_TIME * ARC_REL_LEN / NUM_RINGS)

    (document.getElementById('globeViz'))
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 1;
    world.controls().enableZoom = false;
    world.controls().animateIn = false;

    // custom globe material
    const globeMaterial = world.globeMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load('https://thebetaworld.io/images/landing/globe/earth-blue4.jpg', texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color('grey');
      globeMaterial.shininess = 15;
    });
    
    setTimeout(() => { // wait for scene to be populated (asynchronously)
        const directionalLight = world.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
        directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
    
    
    function emitArc(startLat, startLng, endLat, endLng) {

        // add and remove arc after 1 cycle
        const arc = { startLat, startLng, endLat, endLng };
        world.arcsData([...world.arcsData(), arc]);
        setTimeout(() => world.arcsData(world.arcsData().filter(d => d !== arc)), FLIGHT_TIME * 2);

        // add and remove start rings
        const srcRing = { lat: startLat, lng: startLng };
        world.ringsData([...world.ringsData(), srcRing]);
        setTimeout(() => world.ringsData(world.ringsData().filter(r => r !== srcRing)), FLIGHT_TIME * ARC_REL_LEN);

        // add and remove target rings
        setTimeout(() => {
            const targetRing = { lat: endLat, lng: endLng };
            world.ringsData([...world.ringsData(), targetRing]);
            setTimeout(() => world.ringsData(world.ringsData().filter(r => r !== targetRing)), FLIGHT_TIME * ARC_REL_LEN);
        }, FLIGHT_TIME);
    }

    function playArcs(){
        coordsArray.forEach(fireEmitArc);
        setTimeout(function(){
            playArcs();
        }, 500 * coordsArray.length);
    }

    function fireEmitArc(item, index){
        setTimeout(function(){
            emitArc(item.startLat, item.startLng, item.endLat, item.endLng);
        }, 1000 * index);
    }

    playArcs();
   
});


