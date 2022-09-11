import React from 'react'
import MainScreen from './MainScreen/MainScreen'
import Map from './map/map'
import Partners from './AboutUs/Partners'
import Solutions from './AboutUs/Solutions/Solutions'
import News from './News/news'

export default function Container() {
    return (
        <div>
            <MainScreen />
            <Map />
            <Partners />
            <Solutions />
            <News />
        </div>
    )
}