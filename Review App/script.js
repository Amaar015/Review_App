const tl = gsap.timeline();

tl
    .to(".loader", {
        width: "0%",
        duration: 3,
        delay: 0.2,
        ease: Power4.easeInOut
    })
    .to("h3", {
        y: 100,
        duration: 0.1,
        delay: -0.3,
        opacity: 1,
        ease: Power4.easeInOut
    })
    .to(".loader", {
        height: 0,
        top: "100%",
        duration: 0.8,
        delay: -0.6,
        ease: Circ.easeInOut
    })
    .to("h2", {
        y: 0,
        duration: 0.1,
        delay: -0.2,
        ease: Power3.easeInOut
    })

// logo and navbar animation
gsap.from('.logo h1', 1, {
    delay: 3,
    scale: 0,
    ease: ' ease.out'
})
gsap.from('header ul li', 1, {
    delay: 3,
    y: -250,
    ease: Expo.easeOut,
    stagger: .4
})

// home image
gsap.from('.image img', 1, {
    delay: 4,
    scale: 0,
    ease: ' ease.out'
})

// home page heading
gsap.from('.home-text h1', 1.4, {
    delay: 6,
    y: 250,
    skewY: 20,
    stagger: .8,
    opacity: 0
})
gsap.from('.home-text p', 1, {
    delay: 6.5,
    y: -50,
    opacity: 0
})

gsap.from('.home-text .btn', 1, {
    delay: 6.5,
    y: 150,
    opacity: 0
})



