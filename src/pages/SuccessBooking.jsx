import React, { useEffect } from 'react';
import '../styles/successBooking.css';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SuccessBooking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Helmet title="Success Booking">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" className='m-auto'>
                            <div className='success-wrapper text-center'>
                                <i className="ri-checkbox-circle-line"></i>
                                <h2>Thank You</h2>
                                <p>Your tour is booked</p>
                                <button>
                                    <Link to="/">
                                        Back to Home Page
                                    </Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
