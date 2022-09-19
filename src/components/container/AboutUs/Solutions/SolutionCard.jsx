import React from 'react'
import Slider from './Slider'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax, Background } from 'react-parallax';


export default function SolutionCard({ solution, solutionIndex }) {


    return (
        <div id={`solution__card${solutionIndex}`} className="solutions__card">
            <div className="solutions__card-left">
                <div className="solution__card-left__header">
                    <div className="solution__card-left__index">0{solutionIndex + 1}</div>
                </div>
                <div className="solution__card-left__description">
                    <div
                        id={`solution__card-left__description__title${solutionIndex}`}
                        className="solution__card-left__description__title split__title-animation">
                        <div><span>{solution.title}</span></div>
                    </div>
                    <div
                        id={`solution__card-left__description__subtitle${solutionIndex}`}
                        className="solution__card-left__description__subtitle">
                        <span>{solution.description}</span>
                    </div>
                </div>
            </div>
            <div className="solutions__card-right">
                {solution.imgUrl && (
                    <ParallaxBanner strength={400} className="solutions__card-right__img"
                        layers={[{
                            image: solution.imgUrl,
                            speed: -30
                        }]}
                    >
                    </ParallaxBanner>)}
                {solution.employData && (
                    <Slider slides={solution.employData} />
                )}
            </div>

        </div>
    )
}