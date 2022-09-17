import React, { useRef } from 'react'
import Slider from './Slider'

export default function SolutionCard({ solution, solutionIndex }) {
    const newDelta = useRef(0)

    const incrementCarousel = delta => {
        newDelta.current = delta
    }


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
                {solution.imgUrl && (<img className="solutions__card-right__img" src={solution.imgUrl} />)}
                {solution.employData && (
                    <Slider
                        slides={solution.employData}
                        newDelta={newDelta}
                    />
                )}
            </div>

        </div>
    )
}