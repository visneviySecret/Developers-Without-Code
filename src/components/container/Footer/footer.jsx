import React from 'react'
import Contacts from './contacts'

export default function Footer() {
    const menu = [
        { title: 'управление недвижимостью', url: '' },
        { title: 'продажа и аренда', url: '' },
        { title: 'консалтинг', url: '' },
        { title: 'новости', url: '' },]

    return (
        <div className="footer">
            <ul className="footer__running-string">
                <li className="footer__running-string1">
                    <div >
                        <span className="footer__running-string-black">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                        <span className="footer__running-string-white">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                    </div>
                    <div className="footer__running-string1-second-half">
                        <span className="footer__running-string-black">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                        <span className="footer__running-string-white">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                    </div>
                </li>
                <li className="footer__running-string2">
                    <div >
                        <span className="footer__running-string-black">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                        <span className="footer__running-string-white">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                    </div>
                    <div className="footer__running-string2-second-half">
                        <span className="footer__running-string-black">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                        <span className="footer__running-string-white">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                    </div>
                </li>
                <li className="footer__running-string3">
                    <div >
                        <span className="footer__running-string-black">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                        <span className="footer__running-string-white">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                    </div>
                    <div className="footer__running-string3-second-half">
                        <span className="footer__running-string-black">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                        <span className="footer__running-string-white">Закажите обратный звонок, чтобы обсудить подробности</span>
                        <span className="footer__running-string__dot">&#8226;</span>
                    </div>

                </li>
            </ul>
            <div className="footer__navigation">
                <div className="footer__logo">
                    LOGOTIP
                </div>
                <div className="footer__menu">
                    {menu.map((item, index) => (
                        <div className="footer__menu-item" key={index}>{item.title}</div>
                    ))}
                </div>
                <Contacts />
                <div className="footer__rights">
                    <div>© 2000 — 2022. Все права защищены</div>
                    <div>
                        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0">    политика конфиденциальности</a>
                    </div>
                    <span>сайт сделан в CEDRO</span>
                </div>
            </div>
        </div>
    )
}