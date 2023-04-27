import React from 'react';
import './serviceCard.css';

export default function ServiceCard({ item }) {
    const { imgUrl, title, desc } = item;
    return (
        <div className='service-item'>
            <div className='service-img'>
                <img src={imgUrl} alt='service-img' />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
}
