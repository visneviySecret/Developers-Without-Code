import React, { useRef, useState } from 'react'
import EmployCard from './EmployCard'


export default function Slider({ slides, newDelta }) {
    const carouselRef = useRef()
    const [count, setCount] = useState(0)

    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 5) {
            // move to left
            setCount(prev => prev == slides.length - 1 ? 0 : prev + 1)
        }
        if (touchStart - touchEnd < -5) {
            // move to right
            setCount(prev => prev == 0 ? slides.length - 1 : prev - 1)
        }
    }

    const incrementCarousel = delta => {
        if (!carouselRef.current) return
        const width = carouselRef.current.offsetWidth
        if (count + delta * 2 >= slides.length) {
            setCount(0)
            carouselRef.current.scrollTo(0, 0)
            return
        } else if (count + delta * 2 < 0) {
            setCount(slides.length - 1)
            carouselRef.current.scrollTo(
                width * (slides.length - 1),
                0
            )
            return
        }
        carouselRef.current.scrollTo(
            carouselRef.current.scrollLeft + width * delta,
            0
        )
        setCount(count => count + delta * 2)
    }

    return (
        <div className={`employ__slider carousel`}>
            <div className="solution__card-left__arrows">
                <button onClick={() => incrementCarousel(-1)} className="arrow-in-circle" />
                <button onClick={() => incrementCarousel(1)} className="arrow-in-circle right" />
            </div>
            <div className="carousel__bullets">
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className={`${index === count ? 'carousel__bullet carousel__bullet-active' : 'carousel__bullet'}`}></div>
                ))}
            </div>
            <div className="employ__slider-list" ref={carouselRef}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
            >
                {slides.map((employ, index) => {
                    return (
                        <EmployCard
                            key={employ.id}
                            id={`slide-${index}`} arrow-in-circle
                            photo={employ.photo}
                            status={employ.status}
                            name={employ.name}
                            expirience={employ.expirience}
                            contacts={employ.expirience}
                            email={employ.email}
                        />
                    )
                }
                )}
            </div>
        </div>

    )
}