import { gsap } from "gsap";


export const scrollAnimation = (positon, target, onUpdate) => {
    
    const tl = gsap.timeline();
    
    // defining properties to animate
    tl.to(positon,{
        // values to change 
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: {
            trigger: '.sound-section',
            star: "top bottom",
            end: "top top",
            scrub: 2,
            // upgrading performance
            immediateRender: false
        } ,
        onUpdate
    })
    .to(target,{
        // values to change 
        x: 1.52,
        y: 0.77,
        z: -1.08,
        scrollTrigger: {
            trigger: '.sound-section',
            star: "top bottom",
            end: "top top",
            scrub: 2,
            // upgrading performance
            immediateRender: false
        } ,

    })
    .to('.jumbotron-section',{
        // values to change 
        opacity:0,
        scrollTrigger: {
            trigger: '.sound-section',
            star: "top bottom",
            end: "top top",
            scrub: 2,
            // upgrading performance
            immediateRender: false
        } ,

    })
    .to('.sound-section-content',{
        // values to change 
        opacity:1,
        scrollTrigger: {
            trigger: '.sound-section',
            star: "top bottom",
            end: "top top",
            scrub: 2,
            // upgrading performance
            immediateRender: false
        } ,

    })
    tl.to(positon,{
        // values to change 
        x: 1.56,
        y: 5.0,
        z: 0.01,
        scrollTrigger: {
            trigger: '.display-section',
            star: "top bottom",
            end: "top top",
            scrub: 2,
            // upgrading performance
            immediateRender: false
        } ,
        onUpdate
    })
    .to(target,{
        // values to change 
        x: -0.55,
        y: 0.32,
        z: 0.0,
        scrollTrigger: {
            trigger: '.display-section',
            star: "top bottom",
            end: "top top",
            scrub: 2,
            // upgrading performance
            immediateRender: false
        } ,

    })
    
    
}