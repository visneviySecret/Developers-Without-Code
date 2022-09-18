import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export default function () {

    return (

        <Parallax speed={50} className="map">
            <div className="map__title split__title-animation" >
                <div>
                    <span>ПОД НАШИМ УПРАВЛЕНИЕМ</span>
                </div>
            </div>
            <div className="map__description" >
                <div className="map__card">
                    <div className="map__card-title split__title-animation">
                        <div>
                            <span>300 ГА</span>
                        </div>
                    </div>
                    <div className="map__card-subtitle split__title-animation">
                        <div>
                            <span>земли</span>
                        </div>
                    </div>
                </div>
                <div className="map__card">
                    <div className="map__card-title split__title-animation">
                        <div>
                            <span>4000000 М2</span>
                        </div>
                    </div>
                    <div className="map__card-subtitle split__title-animation">
                        <div>
                            <span>жилой и коммерческой недвижимости</span>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    )
}