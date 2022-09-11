import React from 'react'
import MainScreen from './MainScreen/MainScreen'
import Map from './map/map'
import Partners from './AboutUs/Partners'
import Solutions from './AboutUs/Solutions'

export default function Container() {
    return (
        <div>
            <MainScreen />
            <Map />
            <Partners />
            <Solutions />
        </div>
    )
}