import React, { useRef, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'

export default function MainScreen() {

    return (
        <div className="main-screen">
            <Parallax speed={-100} className="main-screen__sky-img"></Parallax>
            <Parallax speed={-80} className="centered-text__content">

                <div className="centered-text">
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
                </div>
            </Parallax>

            <div className="main-screen__city-img"></div>
        </div>
    )
}