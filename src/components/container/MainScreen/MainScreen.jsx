import React, { useRef, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import gsap from 'gsap'

export default function MainScreen() {

    useEffect(() => {
        let timeLine = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } })
        timeLine.fromTo('.centered-text__title span', { y: 100 }, { y: 0, duration: 0.3, stagger: 0.2 })
        timeLine.to('.centered-text__subtitle', { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 })
    }, [])

    return (
        <div className="main-screen">
            <div className="centered-text">
                <Parallax speed={-80} className="centered-text__content">
                    <div className="centered-text__title split__title-animation">
                        <div>
                            <span>Управля&shy;ющая компания и брокер</span>
                        </div>
                        <div >
                            <span>с базой недвижи&shy;мости</span>
                        </div>
                        <div >
                            <span>в 7 городах России</span>
                        </div>
                    </div>
                    <div className="centered-text__subtitle">Снимаем с владельцев зданий все задачи <br />по администрированию и подбираем недвижимость<br /> для инвестиций, покупки и аренды.</div>
                </Parallax>
            </div>
        </div>
    )
}