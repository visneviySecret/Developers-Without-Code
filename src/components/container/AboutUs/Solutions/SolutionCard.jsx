import React, { useEffect } from 'react'
import Slider from './Slider'
import { ParallaxBanner } from 'react-scroll-parallax';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function SolutionCard({ solution, solutionIndex }) {
    useEffect(() => {
        gsap.fromTo('.solution__card-left__description__title span', { y: 100 }, {
            y: 0, duration: 0.3, stagger: 1.2, scrollTrigger: {
                trigger: `.solution__card-left__description__title span`,
                start: "top center",
            }
        })
        gsap.fromTo('.solution__card-left__description__subtitle', { y: 100, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.3, stagger: 1.2, scrollTrigger: {
                trigger: `.solution__card-left__description__subtitle`,
                start: "top center"
            }
        })
    }, [])

    return (
        <div id={`solution__card${solutionIndex}`} className="solutions__card">
            <div className="solutions__card-left">
                <div className="solution__card-left__header">
                    <div className="solution__card-left__index">0{solutionIndex + 1}</div>
                </div>
                <div className="solution__card-left__description">
                    <div className="solution__card-left__description__title split__title-animation">
                        <div><span>{solution.title}</span></div>
                    </div>
                    <div className="solution__card-left__description__subtitle">
                        <span>{solution.description}</span>
                    </div>
                </div>
            </div>
            <div className="solutions__card-right">
                {solution.imgUrl && (
                    <ParallaxBanner
                        layers={[{ image: solution.imgUrl, speed: -30 }]}
                        className="solutions__card-right__img" />)}
                {solution.employData && (
                    <Slider slides={solution.employData} />
                )}
            </div>

        </div>
    )
}