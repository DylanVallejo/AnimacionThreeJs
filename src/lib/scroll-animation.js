import { gsap } from "gsap";


export const scrollAnimation = (positon, target, onUpdate) => {
    
    const tl = gsap.timeline();
    
    // defining properties to animate
    tl.to(positon,{
        scrollTrigger: {
            trigger: '.sound-section'
        }
    })
    
}