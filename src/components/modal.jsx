import React, { useState, useEffect } from 'react'
import imgVector from '../assets/icons/vector.svg'
import imgPhone from '../assets/icons/phoneIcon.svg'

export default function Modal({ isModalActive, setModalActive, setIsError }) {
    const clearModal = () => {
        setModalActive(false)
        setIsCallOrdered(false)
    }

    const [formState, setFormState] = useState({ name: '', phone: '' })
    const [isCallOrdered, setIsCallOrdered] = useState(false)

    const formNameHandler = event => {
        setFormState({ ...formState, name: event.target.value })
    }
    const formPhoneHandler = event => {
        setFormState({ ...formState, phone: event.target.value })
    }

    const submitHandler = () => {
        console.log(formState, 'formState')
        if (formState.name == '' || formState.phone == '') {
            setIsError('modal__error active')
            setTimeout(() => { setIsError('modal__error') }, 2000)
            return
        }
        setIsCallOrdered(true)
    }

    return (
        <div className={`modal ${isModalActive && "modal-active"} `} >

            <div className="modal-head">
                <div className="modal-head__logo">LOGOTIP</div>
                <div className="modal-head__cross" onClick={() => setModalActive(!isModalActive)}>
                    <span className="modal-head__cross__icon"></span>
                </div>

            </div>
            <div className={`modal-body ${isCallOrdered && 'modal-body-closing'}`}>
                <div className="modal-body__header">
                    <h1 className="modal-body__header__title">СВЯЗАТЬСЯ С НАМИ</h1>
                    <div className="modal-body__header__sub-title">Закажите обратный звонок, или звоните и пишите нам, чтобы обсудить подробности.</div>
                </div>
                <div className="modal-body__form">
                    <input
                        value={formState.name}
                        onChange={formNameHandler}
                        type="text" className="modal-body__form__input" placeholder="ВАШЕ ИМЯ" />
                    <input
                        value={formState.phone}
                        onChange={formPhoneHandler}
                        type="phone" className="modal-body__form__input" placeholder="ТЕЛЕФОН" />
                    <button
                        onClick={() => submitHandler()}
                        className="modal-body__form__submit">
                        <span>заказать обратный звонок</span>
                        <img src={imgVector} alt="" />
                    </button>
                    <span className="modal-body__form__policy">Нажимая на кнопку «Заказать обратный звонок», вы даете согласие на обработку персональных данных и соглашаетесь с <a src="https://store.playstation.com/en-us/product/UP2611-CUSA05877_00-PERSONA512345678">политикой конфиденциальности</a></span>

                    <div className="modal-body__contacts">
                        <div className="mdodal-body__contact">
                            <div className="modal-body__contacts__title">
                                пишите
                            </div>
                            <div className="modal-body__contacts__content">
                                info@info.com
                            </div>
                        </div>
                        <div className="mdodal-body__contact">
                            <div className="modal-body__contacts__title">
                                звоните
                            </div>
                            <div className="modal-body__contacts__content">
                                8 (800) 000-00-00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-body-succes ${isCallOrdered && 'open'}`} >
                <div className="modal-body-succes__head">
                    <img src={imgPhone} className="modal-body-succes__head__icon"></img>
                    <h1 className="modal-body-succes__head__title">Звонок успешно заказан!</h1>
                    <div className="modal-body-succes__head__subtitle">В ближайшее время наш менеджер свяжется с вами.</div>
                </div>
                <div className="modal-body-succes__footer">
                    <button
                        onClick={() => clearModal()}
                        className="modal-body-succes__footer__button modal-body__form__submit">
                        <span>вернуться на главную</span>
                        <img src={imgVector} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}