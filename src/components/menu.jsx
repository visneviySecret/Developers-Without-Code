import React, { useState, useRef, useEffect } from 'react'
import imgVector from '../assets/icons/vector.svg'
import imgCross from '../assets/icons/cross.svg'
import imgMinus from '../assets/icons/minus.svg'


export default function Menu() {
    const menu = [
        {
            id: 0, title: 'управление недвижимостью', parameters: [
                { title: 'технический аудит недвижимости', url: '' },
                { title: 'Эксплуатация и техническое обслуживание недвижимости', url: '' },
                { title: 'Пожарная безопасность', url: '' },
                { title: 'Клининг', url: '' },
                { title: 'Управление арендными отношениями', url: '' },
                { title: 'Аварийно-диспетчерская служба', url: '' },
            ]
        },
        { id: 1, title: 'продажа и аренда' },
        {
            id: 2, title: 'консалтинг', parameters: [
                { title: 'бухгалтерские и кадровые услуги', url: '' },
                { title: 'юридическое сопровождение', url: '' },
            ]
        },
    ]
    const [isActive, setActive] = useState(false)
    const toggleClassHandler = () => { setActive(!isActive) }
    const [activeMenuItems, setActiveMenuItems] = useState(null)
    const [hideNavbar, setHideNavbar] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 6700) { setHideNavbar(true) }
        else { setHideNavbar(false) }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => { window.removeEventListener('scroll', controlNavbar) }
    }, [])
    return (
        <div className={`menu ${isActive && "menu menu__burger-active"} ${hideNavbar && "menu__navigation-disapear"}`} >
            <nav className={`menu__navigation `}>
                <div className="logotip">LOGOTIP</div>
                <div className="menu__navigation-items"
                >
                    {menu.map((menuItem, index) => (
                        <div
                            key={index}
                            className="menu__navigation-item"
                            onMouseEnter={() => {
                                if (menuItem.parameters) {
                                    setActiveMenuItems(menuItem.parameters)
                                }
                            }}
                            onClick={() => {
                                activeMenuItems ? setActiveMenuItems(null) : menuItem.parameters ? setActiveMenuItems(menuItem.parameters) : null
                            }}
                        >
                            <span>{menuItem.title}</span>
                            {menuItem.parameters && <span className="plusIcon" />}
                        </div>
                    ))}
                    {activeMenuItems &&
                        <div className="menu__navigation__parameters"
                            onMouseLeave={() => setActiveMenuItems(null)}>
                            {activeMenuItems.map((item, index) => (
                                <a
                                    href={item.url}
                                    className="menu__navigation__parameters__item"
                                    key={index + 1}
                                >{item.title}</a>
                            ))}
                        </div>}
                </div>
                <div
                    className="menu__navigation-item menu__navigation-call-us"
                    onClick={() => setActiveMenuItems(null)}
                >
                    <span>cвязаться с нами</span>
                    <img src={imgVector} alt="" className="menu__navigation-item-icon" />
                </div>
            </nav>


            <div className="menu__burger" onClick={() => toggleClassHandler()}>
                <span className="menu__burger__icon" src="" alt="burger menu" />
                <span className="menu__burger__title">{isActive ? "закрыть" : "меню"}</span>
            </div>
        </div>
    )
}