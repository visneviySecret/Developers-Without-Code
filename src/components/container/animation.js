import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Animation() {

    // main screen
    let timeLine = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } })
    timeLine.fromTo('.centered-text__title span', { y: 120 }, { y: 0, duration: 0.3, stagger: 0.2, delay: 0.8 })
    timeLine.fromTo('.centered-text__subtitle', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 })


    // map
    gsap.fromTo('.map__title span', { y: 150 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: {
            trigger: '.map__title span',
        }
    })
    gsap.fromTo('.map__card-title span', { y: 100 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: {
            trigger: '.map__card-title span',
            start: "bottom 140%",
        }
    })
    gsap.fromTo('.map__card-subtitle span', { y: 100 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: {
            trigger: '.map__card-subtitle span',
            start: "bottom 140%",
        }
    })


    // partners
    gsap.fromTo('.partners__title span', { y: 100 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: { trigger: '.partners__title', start: "top 90%" }
    })
    gsap.fromTo('.partners__card-title span', { y: 100 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: { trigger: '.partners__card-title', start: "top 90%" }
    })
    gsap.fromTo('.partners__card-description', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.3, stagger: 0.2, scrollTrigger: { trigger: '.partners__card-description', start: "top 90%" }
    })


    // solutions
    gsap.fromTo('.solutions__header-content span', { y: 100 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: {
            trigger: '.solutions__header-content span',
        }
    })


    // news 
    gsap.fromTo('.news__header-title span', { y: 100 }, {
        y: 0, duration: 0.3, stagger: 0.2, scrollTrigger: {
            trigger: '.news__header-title',
            start: "bottom bottom",
        }
    })

}