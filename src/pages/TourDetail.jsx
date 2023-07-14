import React, { useContext, useEffect, useRef, useState } from 'react';
import '../styles/tourDetail.css';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, ListGroup, ListGroupItem } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import calculateAvgRating from '../utils/avgRating';
import Rater from 'react-rater';
import Booking from '../components/Booking/Booking';
import { AuthContext } from '../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

export default function TourDetail() {
    const { id } = useParams();
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
    const { photo, title, address, desc, price, reviews, city, distance, maxGroupSize } = tour;
    const { totalReviews, avgRating } = calculateAvgRating(reviews);
    const [rating, setRating] = useState(0);
    const reviewMsgRef = useRef("");
    const { user } = useContext(AuthContext);

    const formatDate = date => {
        return new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: 'long',
            year: "numeric"
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (!user || user === null || user === undefined) {
            toast.warn('You need login to review', {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'toast-message',
                autoClose: 800,
            });
        } else {
            const reviewText = reviewMsgRef.current.value.trim();
            if (!reviewText || rating === 0) {
                toast.warn('Required text field or rating', {
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: 'toast-message',
                    autoClose: 800,
                });
            }
            else {
                try {
                    const res = await fetch(`${BASE_URL}/reviews/${id}`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            username: user.username,
                            reviewText,
                            rating
                        })
                    });
                    const result = await res.json();
                    if (!res.ok) {
                        toast.error(result.message, {
                            position: toast.POSITION.BOTTOM_CENTER,
                            className: 'toast-message',
                            autoClose: 800,
                        });
                    } else {
                        toast.success(result.message, {
                            position: toast.POSITION.BOTTOM_CENTER,
                            className: 'toast-message',
                            autoClose: 800,
                        });
                    }
                } catch (error) {
                }
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Helmet title="Tour Detail">
            <ToastContainer />
            <section>
                <Container>
                    <Row>
                        {loading && <h4>Loading.........</h4>}
                        {error && <h4>{error}</h4>}
                        {!loading && !error && (
                            <>
                                <Col lg="8" md="12" sm="12">
                                    <div className='tour-content'>
                                        <img src={`/images/${photo}`} alt="tour-img" />
                                        <div className='mt-4 tour-infor'>
                                            <h2>{title}</h2>
                                            <Row className='mt-2 mb-2 ps-3 d-flex align-items-center'>
                                                <Col lg="4" md="6" sm="12" className='mb-2'>
                                                    <span className='d-flex align-items-center gap-1'>
                                                        {
                                                            totalReviews === 0 ? <i className="ri-star-line"></i> : Number(avgRating) === 5 ? <i className="ri-star-fill"></i> : <i className="ri-star-half-fill"></i>
                                                        }{<i>{avgRating}</i>}
                                                        <span>{totalReviews === 0 ? "Not rated" : `(${totalReviews} rated)`}</span>
                                                    </span>
                                                </Col>
                                                <Col lg="4" md="6" sm="12">
                                                    <span className='d-flex align-items-center gap-1'>
                                                        <i className='ri-map-pin-line'></i>
                                                        <span>{address}</span>
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row className='mb-4 ps-3 d-flex align-items-center justify-content-between'>
                                                <Col lg="3" md="3" sm="12" className='mb-2'>
                                                    <span className='d-flex align-items-center gap-1'>
                                                        <i className="ri-building-line"></i>
                                                        <span>{city}</span>
                                                    </span>
                                                </Col>
                                                <Col lg="3" md="3" sm="12" className='mb-2'>
                                                    <span className='d-flex align-items-center gap-1'>
                                                        <i className="ri-pin-distance-line"></i>
                                                        <span>{distance} km</span>
                                                    </span>
                                                </Col>
                                                <Col lg="3" md="3" sm="12" className='mb-2'>
                                                    <span className='d-flex align-items-center gap-1'>
                                                        <i className="ri-money-dollar-circle-line"></i>
                                                        <span>${price} /per person</span>
                                                    </span>
                                                </Col>
                                                <Col lg="3" md="3" sm="12" className='mb-2'>
                                                    <span className='d-flex align-items-center gap-1'>
                                                        <i className="ri-group-line"></i>
                                                        <span>{maxGroupSize} people</span>
                                                    </span>
                                                </Col>
                                            </Row>
                                            <h2>Description</h2>
                                            <span className='mt-2 ps-3 d-flex align-items-center gap-1'>
                                                <span>{desc}</span>
                                            </span>
                                        </div>
                                        <div className='mt-4 tour-review'>
                                            <h2>Reviews {totalReviews >= 2 ? `(${totalReviews} reviews)` : `(${totalReviews} review)`}</h2>
                                            <div className='mt-5 review-rating'>
                                                <Rater rating={0} total={5} onRate={(rating) => setRating(rating.rating)} />
                                            </div>
                                            <div className='mt-2 mb-4 review-content'>
                                                <Form>
                                                    <div>
                                                        <textarea rows={5} ref={reviewMsgRef} className='form-control' placeholder='Share your thoughts' />
                                                    </div>
                                                    <button className='mt-2 btn' onClick={handleSubmit}>Submit</button>
                                                </Form>
                                            </div>
                                            <hr />
                                            <div className='review-list'>
                                                <ListGroup>
                                                    {reviews?.map((item, index) => (
                                                        <ListGroupItem key={index} className='review-item'>
                                                            <Row className='d-flex align-items-center'>
                                                                <Col lg="2" md="2" sm="2">
                                                                    <div className='review-avatar'>
                                                                        <img src='/images/avatar.jpg' alt='review-avatar-img' />
                                                                    </div>
                                                                </Col>
                                                                <Col lg="10" md="10" sm="10">
                                                                    <div className='review-content'>
                                                                        <h6>{item.username}</h6>
                                                                        <div className='d-flex align-items-center justify-content-between'>
                                                                            <span>{formatDate(item.createdAt)}</span>
                                                                            <span className='d-flex align-items-center gap-1'>
                                                                                {item.rating}
                                                                                <i className="ri-star-fill"></i>
                                                                            </span>
                                                                        </div>
                                                                        <p>{item.reviewText}</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroupItem>
                                                    ))}
                                                </ListGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" md="12" sm="12">
                                    <Booking tour={tour} totalReviews={totalReviews} avgRating={avgRating}></Booking>
                                </Col>
                            </>
                        )}
                    </Row>
                </Container>
            </section >
        </Helmet >
    )
}
