import React from 'react';
import '../styles/tourDetail.css';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';

export default function TourDetail() {
    const { id } = useParams();
    const { data: tour } = useFetch(`${BASE_URL}/tour/getTourById/${id}`);
    const { photo, title, address, desc, price, reviews, city, distance, maxGroupSize } = tour;
    return (
        <Helmet title="Tour Detail">
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className='tour-content'>
                                <img src={`/images/${photo}`} alt="tour-img" />
                                <div className='mt-4 tour-infor'>
                                    <h2>{title}</h2>
                                    <span className='mt-2 mb-2 ps-3 d-flex align-items-center justify-content-start gap-5'>
                                        <span className='d-flex align-items-center gap-1'>
                                            <i className='ri-star-fill'></i>
                                            {/* <span>{reviews.length === 0 ? "Not rated" : `${reviews.length} reviews`}</span> */}
                                        </span>
                                        <span className='d-flex align-items-center gap-1'>
                                            <i className='ri-map-pin-line'></i>
                                            <span>{address}</span>
                                        </span>
                                    </span>
                                    <span className='mb-4 ps-3 d-flex align-items-center justify-content-start gap-5'>
                                        <span className='d-flex align-items-center gap-1'>
                                            <i className="ri-building-line"></i>
                                            <span>{city}</span>
                                        </span>
                                        <span className='d-flex align-items-center gap-1'>
                                            <i className="ri-money-dollar-circle-line"></i>
                                            <span>${price} /per person</span>
                                        </span>
                                        <span className='d-flex align-items-center gap-1'>
                                            <i className="ri-group-line"></i>
                                            <span>{maxGroupSize}</span>
                                        </span>
                                    </span>

                                    <h2>Description</h2>
                                    <span className='mt-2 ps-3 d-flex align-items-center gap-1'>
                                        <i className="ri-file-text-line"></i>
                                        <span>{desc}</span>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
