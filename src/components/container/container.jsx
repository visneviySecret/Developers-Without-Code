import React from 'react'
import MainScreen from './MainScreen/MainScreen'
import Map from './map/map'

export default function Container() {
    return (
        <div className="container">
            <MainScreen />
            <Map />
        </div>
    )
}