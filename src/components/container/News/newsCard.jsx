import React from 'react'

export default function NewsCard({ photo, date, title, content, index }) {
    return (
        <div className="news__card">
            {(index < 2) &&
                <img className="news__card-photo" src={photo} alt="News photo" />
            }
            <div className="news__card-info">
                <div className="news__card-info__date">{date}</div>
                <div className="news__card-info__title">{title}</div>
                <div className="news__card-info__content">{content}</div>
            </div>
        </div>
    )
}