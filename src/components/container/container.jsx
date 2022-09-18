import React, { useEffect } from 'react'
import MainScreen from './MainScreen/MainScreen'
import Map from './Map/map'
import Partners from './AboutUs/Partners'
import Solutions from './AboutUs/Solutions/Solutions'
import News from './News/news'
import Footer from './Footer/footer'
import { ParallaxProvider } from 'react-scroll-parallax'
import Animation from './animation'



export default function Container({ setIsModalActive }) {
    useEffect(() => {
        Animation()
    }, [])

    return (
        <ParallaxProvider >
            <MainScreen />

            <Map />

            <Partners />

            <Solutions />

            <News />

            <Footer setIsModalActive={setIsModalActive} />
        </ParallaxProvider >
    )
}