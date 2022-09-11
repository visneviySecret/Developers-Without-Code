import React from 'react'
import EmployCard from './EmployCard'

export default function SolutionCard({ solution, solutionIndex }) {
    return (
        <div className="solutions__card">
            <div className="solutions__card-left">
                <div className="solution__card-left__header">
                    <div className="solution__card-left__index">0{solutionIndex + 1}</div>
                    {solution.employData && (
                        <div className="solution__card-left__arrows">
                            <img alt="" className="arrow-in-circle" />
                            <img alt="" className="arrow-in-circle right" />
                        </div>
                    )}
                </div>

                <div className="solution__card-left__description">
                    <div className="solution__card-left__description__title">{solution.title}</div>
                    <div className="solution__card-left__description__subtitle">{solution.description}</div>
                </div>

            </div>
            <div className="solutions__card-right">
                {solution.imgUrl && (<img className="solutions__card-right__img" src={solution.imgUrl} />)}
                {solution.employData && (
                    <div className="employ__scroller">
                        {/* <div className="employ__scroller-navigation">
                                    {solution.employData.map((item, index) => (
                                        <div>
                                            <input type="radio" value={`#slide-${index}`} name="radio" />
                                            <label htmlFor={`#slide-${index}`} className="radio">{index}</label>
                                        </div>
                                    ))}
                                </div> */}

                        <div className="employ__scroller-list main-carousel">
                            {solution.employData.map((employ, index) => (
                                <EmployCard
                                    key={employ.id}
                                    id={`slide-${index}`}
                                    data-flickity='{"cellAlign": "left", "contain":true}'
                                    photo={employ.photo}
                                    status={employ.status}
                                    name={employ.name}
                                    expirience={employ.expirience}
                                    contacts={employ.expirience}
                                    email={employ.email}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}