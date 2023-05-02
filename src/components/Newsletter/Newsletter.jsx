import React from 'react';
import './newsletter.css';
import { Col, Container, Row } from 'reactstrap';

export default function Newsletter() {
    return (
        <Container>
            <Row>
                <Col lg="6" md="12" sm="12">
                    <div className='newsletter-content'>
                        <h2 className='mb-5'>Subscribe now to get useful traveling information.</h2>
                        <div className='mb-4 newsletter-input'>
                            <input type='text' placeholder='Enter your email' />
                            <button className='btn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit nulla maxime itaque fugiat illum.</p>
                    </div>
                </Col>
                <Col lg="6" md="12" sm="12">
                    <div className='newsletter-img'>
                        <img src='/images/male-tourist.png' alt='newsletter-img' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
