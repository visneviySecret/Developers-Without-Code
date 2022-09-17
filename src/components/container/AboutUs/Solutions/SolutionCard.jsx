import React from 'react'
import Slider from './Slider'
import { ParallaxBanner } from 'react-scroll-parallax';

export default function SolutionCard({ solution, solutionIndex }) {

    return (
        <div className="solutions__card">
            <div className="solutions__card-left">
                <div className="solution__card-left__header">
                    <div className="solution__card-left__index">0{solutionIndex + 1}</div>
                </div>
                <div className="solution__card-left__description">
                    <div className="solution__card-left__description__title">{solution.title}</div>
                    <div className="solution__card-left__description__subtitle">{solution.description}</div>
                </div>
            </div>
            <div className="solutions__card-right">
                {solution.imgUrl && (
                    <ParallaxBanner
                        layers={[{ image: solution.imgUrl, speed: -30 }]}
                        className="solutions__card-right__img" />)}
                {solution.employData && (
                    <Slider slides={solution.employData} />
                )}
            </div>

        </div>
    )
}