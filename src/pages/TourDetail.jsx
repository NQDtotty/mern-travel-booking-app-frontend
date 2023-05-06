import React, { useState } from 'react';
import '../styles/tourDetail.css';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, ListGroup, ListGroupItem } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import calculateAvgRating from '../utils/avgRating';
import Rater from 'react-rater'

export default function TourDetail() {
    const { id } = useParams();
    const { data: tour } = useFetch(`${BASE_URL}/tour/getTourById/${id}`);
    const { photo, title, address, desc, price, reviews, city, distance, maxGroupSize } = tour;
    const { totalReviews, avgRating } = calculateAvgRating(reviews);
    const [rating, setRating] = useState(5);

    return (
        <Helmet title="Tour Detail">
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="12" sm="12">
                            <div className='tour-content'>
                                <img src={`/images/${photo}`} alt="tour-img" />
                                <div className='mt-4 tour-infor'>
                                    <h2>{title}</h2>
                                    <Row className='mt-2 mb-2 ps-3 d-flex align-items-center'>
                                        <Col lg="4" md="6" sm="12" className='mb-2'>
                                            <span className='d-flex align-items-center gap-1'>
                                                {
                                                    totalReviews === 0 ? <i className="ri-star-line"></i> : avgRating === 5 ? <i className="ri-star-fill"></i> : <i className="ri-star-half-fill"></i>
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
                                                <textarea rows={5} className='form-control' placeholder='Share your thoughts' />
                                            </div>
                                            <button className='mt-2 btn'>Submit</button>
                                        </Form>
                                    </div>
                                    <hr />
                                    <div className='review-list'>
                                        <ListGroup>
                                            {reviews?.map((item, index) => (
                                                <ListGroupItem key={index} className='review-item'>
                                                    <Row className='d-flex align-items-center justify-content-between'>
                                                        <Col lg="2" md="2" sm="2">
                                                            <div className='review-avatar'>
                                                                <img src='/images/avatar.jpg' alt='review-avatar-img' />
                                                            </div>
                                                        </Col>
                                                        <Col lg="10" md="10" sm="10">
                                                            <div className='review-content'>
                                                                <h6>{item.username}</h6>
                                                                <span>20/4/2023</span>
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
                    </Row>
                </Container>
            </section >
        </Helmet >
    )
}
