import React from 'react'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import vkIcon from '../../assets/icons/vkIcon.svg'

export default function Contacts() {

    const contacts = [
        { title: 'приезжайте в наш офис', content: 'Самарская область, Тольятти, ул. Пушкина, 10, офис 1408' },
        { title: 'смотреть на карте', content: '', url: 'https://www.google.ru/maps' },
        { title: 'звоните', content: '8 (800) 000-00-00' },
        { title: 'пишите', content: 'info@info.com' },
        {
            title: 'следите за нами', content: '', img: [
                { icon: telegramIcon, url: '' },
                { icon: vkIcon, url: '' },
            ]
        },

    ]

    return (
        <div className="footer__contacts">
            {contacts.map((item, index) => (
                <div className="footer__contact" key={index}>
                    {item.url && (
                        <a className="footer__contacts-title" href={item.url}>
                            {item.title}
                        </a>) ||
                        <div className="footer__contacts-title">
                            {item.title}
                        </div>}

                    <div className="footer__contacts-content">
                        {item.content}
                        {item.img && item.img.map((icon, index) => (
                            <a href={icon.url} key={index} className="footer__contacts-content__img">
                                <img src={icon.icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}