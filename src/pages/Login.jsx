import React from 'react';
import { Container, Row, Col, Form } from 'reactstrap';

export default function Login() {
    return (
        <Container>
            <Row>
                <Col lg="6" md="12" sm="12"></Col>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <div>
                            <input type='text' className='form-control' />
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
