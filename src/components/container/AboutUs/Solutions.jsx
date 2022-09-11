import React from 'react'
import imgCard1 from '../../../assets/solutions/working.png'
import imgCard2 from '../../../assets/solutions/reception.png'
import imgEmploy from '../../../assets/solutions/employ.png'
import imgArrow from '../../../assets/icons/arrow.svg'

export default function Solutions() {

    const solutions = [
        {
            title: 'Клиенты «Предприятия» следят за расходами онлайн',
            description: 'Для этого у нас есть программа Oddin. Там мы публикуем отчёты о проделанной работе, например если заменили лампочку или устранили аварию. Всё с фото, датами и чеками.',
            imgUrl: imgCard1
        },
        {
            title: 'Налаживаем управление зданием с нуля',
            description: 'Оснащаем техникой, например системой дымоудаления или сигнализацией. Нанимаем персонал в охрану, клининг и администрацию.',
            imgUrl: imgCard2
        },
        {
            title: 'Наша команда — эксперты в управлении недвижимостью',
            description: 'Они знают, как организовать процессы, чтобы доход клиента был максимальным, а участие в администрировании — минимальным.',
            employData: [
                {
                    id: 0,
                    name: 'Фамилия Имя Отчество',
                    status: 'генеральный директор',
                    photo: imgEmploy,
                    expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года',
                    contacts:
                    {
                        phone: '+7(927) 000-00 - 00',
                        email: 'example@info.com'
                    }
                },
                {
                    id: 1,
                    name: 'Фамилия Имя Отчество',
                    status: 'генеральный директор',
                    photo: imgEmploy,
                    expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года',
                    contacts:
                    {
                        phone: '+7(927) 000-00 - 00',
                        email: 'example@info.com'
                    }
                },
                {
                    id: 2,
                    name: 'Фамилия Имя Отчество',
                    status: 'генеральный директор',
                    photo: imgEmploy,
                    expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года',
                    contacts:
                    {
                        phone: '+7(927) 000-00 - 00',
                        email: 'example@info.com'
                    }
                },
                {
                    id: 3,
                    name: 'Фамилия Имя Отчество',
                    status: 'генеральный директор',
                    photo: imgEmploy,
                    expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года',
                    contacts:
                    {
                        phone: '+7(927) 000-00 - 00',
                        email: 'example@info.com'
                    }
                },
                {
                    id: 4,
                    name: 'Фамилия Имя Отчество',
                    status: 'генеральный директор',
                    photo: imgEmploy,
                    expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года',
                    contacts:
                    {
                        phone: '+7(927) 000-00 - 00',
                        email: 'example@info.com'
                    }
                },
                {
                    id: 5,
                    name: 'Фамилия Имя Отчество',
                    status: 'генеральный директор',
                    photo: imgEmploy,
                    expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года',
                    contacts:
                    {
                        phone: '+7(927) 000-00 - 00',
                        email: 'example@info.com'
                    }
                },
            ]
        }
    ]

    return (
        <div className="solutions">
            <div className="solutions__header">
                <span className="solutions__header-content">
                    Нас выбирают, потому что мы автомати&shy;зируем все процессы и предлагаем комп&shy;лексные решения
                </span>
            </div>

            {solutions.map((solution, index) => (
                <div div className="solutions__card" key={index}>
                    <div className="solutions__card-left">
                        <div className="solution__card-left__header">
                            <div className="solution__card-left__index">0{index + 1}</div>
                            {solution.employData && (
                                <div className="solution__card-left__arrows">
                                    <img src={imgArrow} alt="" className="solution__card-left__arrows-left" />
                                    <img src={imgArrow} alt="" className="solution__card-left__arrows-right" />
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
                                        <div
                                            key={employ.id}
                                            id={`slide-${index}`}
                                            className="employ__card carousel-cell"
                                            data-flickity='{"cellAlign": "left", "contain":true}'
                                        >
                                            <img src={employ.photo} alt="Employ photo" className="employ__background" />
                                            <div className="employ__desription">
                                                <div className="employ__desription__status">{employ.status}</div>
                                                <div className="employ__desription__name">{employ.name}</div>
                                                <div className="employ__desription__expiriense">{employ.expirience}</div>
                                                <div className="employ__desription__contacts">
                                                    <div className="employ__desription__contacts-phone">{employ.contacts.phone}</div>
                                                    <div className="employ__desription__contacts-email">{employ.contacts.email}</div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            ))}


        </div>
    )
}