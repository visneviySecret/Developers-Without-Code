import React, { useState, useEffect } from 'react'
import imgVector from '../assets/icons/vector.svg'
import Modal from './modal'
import imgCross from '../assets/icons/cross.svg'
import imgMinus from '../assets/icons/minus.svg'


export default function Menu({ isModalActive, setIsModalActive }) {
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
    const [activeMenu, setActiveMenu] = useState(-1)
    const [activeMenuItems, setActiveMenuItems] = useState(null)
    const [hideNavbar, setHideNavbar] = useState(false)
    const toggleClassHandler = () => { setActive(!isActive) }
    const toggleModalHandler = () => { setIsModalActive(!isModalActive) }
    const controlNavbar = () => {
        const footer = document.querySelector('.footer')
        const rect = footer.getBoundingClientRect()
        if (rect.top <= 0) { setHideNavbar(true) }
        else { setHideNavbar(false) }
    }
    const clearActiveMenu = () => {
        setActiveMenuItems(null)
        setActiveMenu(null)
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => { window.removeEventListener('scroll', controlNavbar) }
    }, [])


    return (
        <div className={`menu ${hideNavbar && "menu__navigation-disapear"}`} >
            <nav className={`menu__navigation ${isActive && "menu__burger-active"}`}>
                <div className="logotip">LOGOTIP</div>
                <div className="menu__navigation-items"
                >
                    {menu.map((menuItem, index) => (
                        <div
                            key={index}
                            className={`menu__navigation-item ${index == activeMenu && 'menu__navigation-item-active'}`}
                            onMouseEnter={() => {
                                if (menuItem.parameters) {
                                    setActiveMenuItems(menuItem.parameters)
                                    setActiveMenu(index)
                                }
                            }}
                            onClick={() => {
                                if (activeMenuItems?.length == menuItem.parameters.length) clearActiveMenu()
                                else if (menuItem.parameters) {
                                    setActiveMenuItems(menuItem.parameters)
                                    setActiveMenu(index)
                                }
                            }}
                        >
                            <div className='menu__navigation-item__title'>
                                <span>{menuItem.title}</span>
                                {menuItem.parameters && <span className={`plusIcon ${index == activeMenu && 'plusIcon-active'}`} />}
                            </div>

                            {activeMenuItems && activeMenu == index &&
                                <div className="accordion__parameters">
                                    {activeMenuItems.map((item, index) => (
                                        <a
                                            href={item.url}
                                            className="accordion__parameters__item"
                                            key={index + 1}
                                        >{item.title}</a>
                                    ))}
                                </div>}
                        </div>
                    ))}
                    <div className="menu__navigation__parameters"
                        onMouseLeave={() => clearActiveMenu()}>
                        {activeMenuItems?.map((item, index) => (
                            <a
                                href={item.url}
                                className="menu__navigation__parameters__item"
                                key={index + 1}
                            >{item.title}</a>
                        ))}
                    </div>
                </div>
                <div
                    className="menu__navigation-item menu__navigation-call-us  link-animation"
                    onClick={() => {
                        clearActiveMenu()
                        toggleModalHandler()
                    }}
                >
                    <span>cвязаться с нами</span>
                    <img onClick={() => toggleModalHandler()} src={imgVector} alt="" className="menu__navigation-item-icon" />
                </div>
            </nav>


            <div className={`menu__burger ${isActive && "menu__burger-active"}`} onClick={() => toggleClassHandler()}>
                <span className="menu__burger__icon" src="" alt="burger menu" />
                <span className="menu__burger__title">{isActive ? "закрыть" : "меню"}</span>
            </div>
            <Modal
                isModalActive={isModalActive}
                setModalActive={setIsModalActive} />
        </div>
    )
}