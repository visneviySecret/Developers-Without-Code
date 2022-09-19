import React, { useRef, useState } from 'react'
import imgNews1 from '../../../assets/news/img.png'
import imgNews2 from '../../../assets/news/img (1).png'
import NewsCard from './newsCard'
import imgArrow from '../../../assets/icons/vector.svg'


export default function News() {
    const news = [
        { id: 0, date: '02/03/22', photo: imgNews1, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
        { id: 1, date: '22/02/22', photo: imgNews2, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
        { id: 2, date: '13/02/22', photo: imgNews1, title: "Длинный заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
        { id: 3, date: '01/02/22', photo: imgNews2, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
    ]
    const [count, setCount] = useState(0)
    const carouselRef = useRef()

    const incrementCarousel = delta => {
        if (!carouselRef.current) return
        const width = carouselRef.current.offsetWidth

        if (count + delta >= news.length) {
            setCount(0)
            carouselRef.current.scrollTo(0, 0)
            return
        } else if (count + delta < 0) {
            setCount(news.length - 1)
            carouselRef.current.scrollTo(
                width * (news.length - 1),
                0
            )
            return
        }
        carouselRef.current.scrollTo(
            carouselRef.current.scrollLeft + width * delta,
            0
        )
        setCount(count => count + delta)
    }

    return (
        <div className="news">
            <div className="news__header">
                <h2 className="news__header-title split__title-animation">
                    <div><span> НАШИ НОВОСТИ</span></div>
                </h2>
                <a className="news__header-link link-animation">все новости
                    <img src={imgArrow} alt="" />
                </a>
                <div className="news__header-arrows">
                    <button onClick={() => incrementCarousel(-1)} className="arrow-in-circle light "></button>
                    <button onClick={() => incrementCarousel(1)} className="arrow-in-circle light right"></button>
                </div>
            </div>
            <div className="news__body" >

                <div className="news__body__scroller" ref={carouselRef}>
                    {news.map((newsItem, index) =>
                        <NewsCard
                            key={newsItem.id}
                            date={newsItem.date}
                            photo={newsItem.photo}
                            title={newsItem.title}
                            content={newsItem.content}
                            index={index}
                        />
                    )}
                </div>

            </div>
            <a className="news__footer-link link-animation">все новости
                <img src={imgArrow} alt="" />
            </a>
        </div>
    )
}