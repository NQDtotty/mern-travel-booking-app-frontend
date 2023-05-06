import React from 'react';
import './commonSection.css';
import { Col, Container, Row } from 'reactstrap';

export default function CommonSection({ title }) {
    return (
        <section className='common-section'>
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
