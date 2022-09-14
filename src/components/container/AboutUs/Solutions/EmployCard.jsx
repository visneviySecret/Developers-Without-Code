import React from 'react'

export default function EmployCard({ photo, status, name, expirience, contacts }) {
    const { phone, email } = contacts
    return (
        <div className="employ__card carousel-cell">
            <img className="employ__background" src={photo} alt="Employ photo" />
            <div className="employ__desription">
                <div className="employ__desription__status">{status}</div>
                <div className="employ__desription__name">{name}</div>
                <div className="employ__desription__expiriense">{expirience}</div>
                <div className="employ__desription__contacts">
                    <a href={`tel:${phone}`} className="employ__desription__contacts-phone">{phone}</a>
                    <a className="employ__desription__contacts-email">{email}</a>
                </div>
            </div>
        </div>

    )
}