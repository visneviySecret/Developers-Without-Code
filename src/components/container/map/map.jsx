import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export default function () {
    return (

        <Parallax speed={50} className="map">
            <div className="map__title">ПОД НАШИМ УПРАВЛЕНИЕМ</div>
            <div className="map__description">
                <div className="map__card">
                    <div className="map__card-title">
                        300 ГА
                    </div>
                    <div className="map__card-sub-title">
                        земли
                    </div>
                </div>
                <div className="map__card">
                    <div className="map__card-title">
                        4000000 М2
                    </div>
                    <div className="map__card-sub-title">
                        жилой и коммерческой недвижимости
                    </div>
                </div>
            </div>
        </Parallax>

    )
}