import React from 'react';
import './tourCard.css';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
    const { _id, title, city, photo, price, reviews } = tour;
    return (
        <div className='tour-card'>
            <Card>
                <div className='tour-img'>
                    <img src={`/images/${photo}`} alt='tour-img' />
                    <span>Featured</span>
                </div>
            </Card>
            <CardBody>
                <div className='ps-3 pe-3 pt-2 pb-2 card-top d-flex align-items-center justify-content-between'>
                    <span className='tour-location d-flex align-items-center gap-1'>
                        <i className='ri-map-pin-line'></i> {city}
                    </span>
                    <span className='tour-rating d-flex align-items-center gap-1'>
                        <i className='ri-star-fill'></i>
                        <span>{reviews.length === 0 ? "Not rated" : `${reviews.length} reviews`}</span>
                    </span>
                </div>
                <h5 className='p-2 tour-title'><Link to={`/tours/${_id}`}>{title}</Link></h5>
                <div className='p-3 card-bottom d-flex align-items-center justify-content-between'>
                    <h5><span>${price} </span>/per person</h5>
                    <button className='btn btn-booking'>
                        <Link to={`/tours/${_id}`}>Book Now</Link>
                    </button>
                </div>
            </CardBody>
        </div>
    )
}
