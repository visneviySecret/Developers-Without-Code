import React from 'react'
import linkArrowImg from "../../../assets/icons/vector.svg"
import workImg1 from '../../../assets/partners/work-pic.svg'
import workImg2 from '../../../assets/partners/work-pic(1).svg'
import workImg3 from '../../../assets/partners/work-pic(2).svg'
import { Parallax } from 'react-scroll-parallax'


export default function Partners() {

    const partners = [
        {
            img: workImg1,
            title: 'С арендодателями',
            description: 'Берём на себя все заботы по управлению помещениями: ищем арендаторов, решаем юридические вопросы, готовим налоговые отчёты и нанимаем персонал.',
            url: ''
        },
        {
            img: workImg2,
            title: 'С инвесторами и бизнесом',
            description: 'Подбираем помещения под любую задачу. Бизнесу — под офисы и склады. Инвесторам — коммерческую недвижимость, которую можно будет сдавать в аренду.',
            url: ''
        },
        {
            img: workImg3,
            title: 'С другими управляющими компаниями',
            description: 'Предоставляем услуги своей аварийно-диспетчерской службы: устраняем поломки и следим за исправностью всех внутридомовых систем.',
            url: ''
        },
    ]

    return (
        <Parallax speed={1} className="partners container">
            <span className="partners__title">С КЕМ МЫ СОТРУДНИЧАЕМ</span>

            <div className="patners__list">
                {partners.map(partner => (
                    <div className="partners__card" key={partner.title}>
                        <img className="partners__card-img" src={partner.img} alt="Worker's black and white picture" />
                        <p className="partners__card-title">{partner.title}</p>
                        <div className="partners__card-description">{partner.description}</div>
                        <a className="partners__card__link" url={partner.url} >
                            <span className="partners__card__link-word">подробнее</span>
                            <img className="partners__card__link-linkArrow" src={linkArrowImg} alt="link arrow" />
                        </a>
                    </div>))}

            </div>
        </Parallax>
    )
}