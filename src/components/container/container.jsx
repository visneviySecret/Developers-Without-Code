import React from 'react'
import MainScreen from './MainScreen/MainScreen'
import Map from './map/map'
import OurPartners from './AboutUs/OurPartners'

export default function Container() {
    return (
        <div>
            <MainScreen />
            <Map />
            <OurPartners />
        </div>
    )
}