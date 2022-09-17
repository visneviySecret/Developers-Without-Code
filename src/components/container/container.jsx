import React from 'react'
import MainScreen from './MainScreen/MainScreen'
import Map from './Map/map'
import Partners from './AboutUs/Partners'
import Solutions from './AboutUs/Solutions/Solutions'
import News from './News/news'
import Footer from './Footer/footer'
import { ParallaxProvider } from 'react-scroll-parallax'



export default function Container() {
    return (
        <ParallaxProvider >
            <MainScreen />

            <Map />

            <Partners />

            <Solutions />

            <News />

            <Footer />
        </ParallaxProvider >
    )
}