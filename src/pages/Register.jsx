import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/register.css';
import Helmet from '../components/Helmet/Helmet';

export default function Register() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    return (
        <Helmet title="Register">
            <Container>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <div className='register-wrapper d-flex justify-content-between'>
                            <div className='register-img text-center'>
                                <img src='/images/register.png' alt='register-img' />
                            </div>
                            <div className='register-form'>
                                <div className='user-icon d-flex justify-content-center'>
                                    <img src='/images/user.png' alt='user-icon' />
                                </div>
                                <h2>Register</h2>
                                <Form>
                                    <FormGroup>
                                        <input className='form-control' type='text' placeholder='Username' required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='form-control' type='email' placeholder='Email' required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='form-control' type='password' placeholder='Password' required />
                                    </FormGroup>
                                    <button className='btn'>Register</button>
                                    <p className='mt-4'>Already have an account &nbsp; <Link className='link' to="/login">Login</Link></p>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    )
}