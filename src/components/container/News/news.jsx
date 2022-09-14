import React from 'react'
import imgNews1 from '../../../assets/news/img.png'
import imgNews2 from '../../../assets/news/img (1).png'
import NewsCard from './newsCard'
import imgArrow from '../../../assets/icons/vector.svg'

export default function News() {
    const news = [
        { id: 0, date: '02/03/22', photo: imgNews1, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
        { id: 1, date: '22/02/22', photo: imgNews2, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
        { id: 2, date: '13/02/22', photo: imgNews1, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
        { id: 3, date: '01/02/22', photo: imgNews2, title: "Заголовок новости", content: 'Также как реализация намеченных плановых заданий предполагает независимые способы реализации плановых заданий предполагает независимые дальнейших действий.' },
    ]

    return (
        <div className="news">
            <div className="news__header">
                <h1 className="news__header-title">НАШИ НОВОСТИ</h1>
                <a className="news__header-link">все новости
                    <img src={imgArrow} alt="" />
                </a>
                <div className="news__header-arrows">
                    <img className="arrow-in-circle "></img>
                    <img className="arrow-in-circle right"></img>
                </div>
            </div>
            <div className="news__body">
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
            <a className="news__footer-link">все новости
                <img src={imgArrow} alt="" />
            </a>
        </div>
    )
}