const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".fx").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 15);
}


document.querySelector(".fx1").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 15);
}

document.addEventListener("DOMContentLoaded", function(){
    'use strict';
    
    const nav = document.querySelector(".nav")
    const navItems = document.querySelector(".nav-items")
    const navHome = document.querySelector(".nav-home")
    const navTop = document.querySelector(".nav-top")
    const icon = document.querySelector(".hamburguer i")    
    
    let isOpen = false;
    
    gsap.set(nav, {height: "60px "});
    gsap.set(navTop, {opacity: 0, scale: 0.9, display: "none" });
    gsap.set(navItems, {opacity: 1, display: "flex" });
    gsap.set(navHome, {flexGrow: 1 });
    
    navHome.addEventListener("click", function(){
        if(!isOpen){
            gsap.to(nav, {
                height: "370px",
                duration: 0.75,
                ease: "power4.inOut",
                immediateRender: false,
            });
            
            gsap.to(navTop, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                onStart: function() {
                    gsap.set(navTop, {display: "block"});
                },
                delay: 0.5,
                immediateRender: false,
            });
            
            gsap.to(navItems, {
                opacity: 0,
                duration: 0.1,
                onComplete: function () {
                    gsap.set(navItems, {display: "none"});
                },
                immediateRender: false,
            });
            
            gsap.to(navHome, {
                flexGrow: 1,
                duration: 0.2,
                ease: "power4.inOut",
                delay: 0,
                immediateRender: false,
                onComplete: function() {
                    icon.className = "ph-light ph-x";
                },
            });
            
        } else {
            gsap.to(nav, {
                height: "60px",
                duration: 0.75,
                ease: "power4.inOut",
                delay: 0.2,
                immediateRender: false,
            });
            
            gsap.to(navTop, {
                opacity: 0,
                scale: 0.9,
                duration: 0.2,
                onComplete: function () {
                    gsap.set (navTop, {display: "none"});
                },
                immediateRender: false,
            });
            
            gsap.to(navHome, {
                flexGrow: 1,
                duration: 0.2,
                ease: "power4.inOut",
                immediateRender: false,
                onComplete: function() {
                    icon.className = "ph-light ph-list";
                },
            });
            
            gsap.to(navItems, {
                opacity: 1,
                duration: 0.2,
                onStart: function() {
                    gsap.set(navItems, {display: "flex"});
                },
                delay: 0.5,
                immediateRender: false,
            });
        }
        isOpen = !isOpen;
        
    })
    
    
    Splitting();
    
    gsap.registerPlugin(ScrollTrigger);
    const gTl = gsap.timeline();
    gTl.from(".text-item .char", 1, {opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out"});
    gTl.to(".item", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale:1, ease: "expo.out"}, "-=1");
    gTl.from(".nav", 2, {opacity: 0, yPercent: 100, ease: "expo.out"}, "-=1.5");
    
    
    //header sumindo
    function header () {
        gsap.to('.fx', {
            scrollTrigger: {
                trigger: '.items',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -150
        })
        gsap.to('.fx1', {
            scrollTrigger: {
                trigger: '.items',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 50
        })
        gsap.to('.item', {
            scrollTrigger: {
                trigger: '.items',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -70
        })
        gsap.to('.item', {
            scrollTrigger: {
                trigger: '.items',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.3
        })
    }
    header();
    
    function work() {
        gsap.from('.work-h2', {
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9
            },
            scale:1.2
        })
        
        gsap.from('.work-h2', {
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: -50
        })
        
        gsap.from('.work-h2', {
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9
            },
            xPercent: -90
        })
        
        gsap.from('.content-work', {
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9
            },
            xPercent: -90
        })
    }
    work();
})