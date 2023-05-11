import React, { useContext, useRef, useState } from 'react';
import './booking.css';
import { Col, Form, Row } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

export default function Booking({ tour, totalReviews, avgRating }) {
    const { price, title } = tour;
    const SERVICE_CHARGE = 10;
    const [numOfGuest, setNumOfGuest] = useState(0);
    const dateRef = useRef("");
    const nameRef = useRef("");
    const phoneRef = useRef("");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const calTotal = () => {
        return numOfGuest === 0 ? "" : price * numOfGuest + SERVICE_CHARGE;
    }

    const handleBooking = async () => {
        const name = nameRef.current.value.trim();
        const phone = phoneRef.current.value.trim();
        const date = dateRef.current.value;

        if (!user || user === undefined || user === null) alert("Please Sign in to booking");
        else {
            if (!name || !phone || !date || numOfGuest === 0) alert("Required text field");
            else {
                try {
                    const res = await fetch(`${BASE_URL}/booking/createBooking`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            userId: user._id,
                            userEmail: user.email,
                            tourName: title,
                            fullName: name,
                            guestSize: numOfGuest,
                            phone,
                            bookAt: date
                        })
                    })
                    const result = await res.json();
                    if (!res.ok) alert(result.message);
                    else navigate("/booking/success");
                } catch (error) {

                }
            }
        }
    }

    return (
        <div className='booking'>
            <div className="booking-top">
                <Row className='d-flex align-items-center justify-content-between'>
                    <Col lg="6" md="6" sm="6">
                        <h3>
                            <i className="ri-money-dollar-circle-line"></i>${price}
                            <span> /per person</span>
                        </h3>
                    </Col>
                    <Col lg="6" md="6" sm="6">
                        <span className='d-flex align-items-center gap-1 justify-content-end'>
                            {
                                totalReviews === 0 ? <i className="ri-star-line"></i> : Number(avgRating) === 5 ? <i className="ri-star-fill"></i> : <i className="ri-star-half-fill"></i>
                            }{<i>{avgRating}</i>}
                            <span>{totalReviews === 0 ? "Not rated" : `(${totalReviews} rated)`}</span>
                        </span>
                    </Col>
                </Row>
            </div>
            <hr />
            <div className='mt-5 booking-infor'>
                <h2>Information</h2>
                <Form>
                    <Row>
                        <Col className='mb-2' lg="12" md="12" sm="12">
                            <input ref={nameRef} required type='text' className='form-control' placeholder='Name' />
                        </Col>
                        <Col className='mb-2' lg="12" md="12" sm="12">
                            <input ref={phoneRef} required type='text' className='form-control' placeholder='Phone' />
                        </Col>
                        <Col className='mb-2' lg="6" md="12" sm="12">
                            <input ref={dateRef} required type='date' className='form-control' />
                        </Col>
                        <Col className='mb-2' lg="6" md="12" sm="12">
                            <input onChange={e => setNumOfGuest(Number(e.target.value))} required type='number' min={0} className='form-control' placeholder='Number of guest' />
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className='booking-bottom mt-5'>
                <div className="d-flex align-items-center justify-content-between">
                    <p>${price} x 1 person:</p>
                    <p>${price}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <p>Service charge:</p>
                    <p>${SERVICE_CHARGE}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <p>Number of guest:</p>
                    <p>{numOfGuest}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <p><strong>Total:</strong></p>
                    <p><strong>{calTotal()}</strong></p>
                </div>
            </div>
            <div className='btn-booking mt-4'>
                <button className='btn' onClick={handleBooking}>Booking</button>
            </div>
        </div>
    )
}
