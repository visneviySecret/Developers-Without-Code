import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export default function MainScreen() {


    return (
        <div className="main-screen">
            <div className="centered-text">
                <Parallax speed={-100} className="centered-text__content">
                    <div className="centered-text__title">Управля&shy;ющая компания и брокер с базой недвижи&shy;мости в 7 городах России</div>
                    <div className="centered-text__subtitle">Снимаем с владельцев зданий все задачи <br />по администрированию и подбираем недвижимость<br /> для инвестиций, покупки и аренды.</div>
                </Parallax>
            </div>
        </div>
    )
}