import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function () {

    useEffect(() => {
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
    }, [])
    return (

        <Parallax speed={50} className="map">
            <div className="map__title split__title-animation" >
                <div>
                    <span>ПОД НАШИМ УПРАВЛЕНИЕМ</span>
                </div>
            </div>
            <div className="map__description" >
                <div className="map__card">
                    <div className="map__card-title split__title-animation">
                        <div>
                            <span>300 ГА</span>
                        </div>
                    </div>
                    <div className="map__card-subtitle split__title-animation">
                        <div>
                            <span>земли</span>
                        </div>
                    </div>
                </div>
                <div className="map__card">
                    <div className="map__card-title split__title-animation">
                        <div>
                            <span>4000000 М2</span>
                        </div>
                    </div>
                    <div className="map__card-subtitle split__title-animation">
                        <div>
                            <span>жилой и коммерческой недвижимости</span>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    )
}