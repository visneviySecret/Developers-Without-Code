import React from 'react'
import imgCard1 from '../../../../assets/solutions/working.png'
import imgCard2 from '../../../../assets/solutions/reception.png'
import imgEmploy from '../../../../assets/solutions/employ.png'
import SolutionCard from './SolutionCard'


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
                { id: 0, name: 'Фамилия Имя Отчество', status: 'генеральный директор', photo: imgEmploy, expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года', contacts: { phone: '+7(927) 000-00-00', email: 'example@info.com' } },
                { id: 1, name: 'Фамилия Имя Отчество', status: 'генеральный директор', photo: imgEmploy, expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года', contacts: { phone: '+7(927) 000-00-00', email: 'example@info.com' } },
                { id: 2, name: 'Фамилия Имя Отчество', status: 'генеральный директор', photo: imgEmploy, expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года', contacts: { phone: '+7(927) 000-00-00', email: 'example@info.com' } },
                { id: 3, name: 'Фамилия Имя Отчество', status: 'генеральный директор', photo: imgEmploy, expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года', contacts: { phone: '+7(927) 000-00-00', email: 'example@info.com' } },
                { id: 4, name: 'Фамилия Имя Отчество', status: 'генеральный директор', photo: imgEmploy, expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года', contacts: { phone: '+7(927) 000-00-00', email: 'example@info.com' } },
                { id: 5, name: 'Фамилия Имя Отчество', status: 'генеральный директор', photo: imgEmploy, expirience: 'Опыт работы в сфере недвижимости, в том числе международной с 2000 года', contacts: { phone: '+7(927) 000-00-00', email: 'example@info.com' } },
            ]
        }
    ]

    return (
        <div className="solutions">
            <div className="solutions__header">
                <div className="solutions__header-content split__title-animation">
                    <div><span>Нас выбирают, потому что</span></div>
                    <div><span>мы автомати&shy;зируем все</span></div>
                    <div><span>gроцессы и предлагаем</span></div>
                    <div><span>комп&shy;лексные решения</span></div>
                </div>
            </div>

            {solutions.map((solution, index) => (
                <SolutionCard
                    key={index}
                    solution={solution}
                    solutionIndex={index}
                />
            ))}
        </div>
    )
}