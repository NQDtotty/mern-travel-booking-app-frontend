import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import Helmet from '../components/Helmet/Helmet';

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    return (
        <Helmet title="Login">
            <Container>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <div className='login-wrapper d-flex justify-content-between'>
                            <div className='login-img text-center'>
                                <img src='/images/login.png' alt='login-img' />
                            </div>
                            <div className='login-form'>
                                <div className='user-icon d-flex justify-content-center'>
                                    <img src='/images/user.png' alt='user-icon' />
                                </div>
                                <h2>Login</h2>
                                <Form>
                                    <FormGroup>
                                        <input className='form-control' type='email' placeholder='Email' required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='form-control' type='password' placeholder='Password' required />
                                    </FormGroup>
                                    <button className='btn'>Login</button>
                                    <p className='mt-4'>Create new account &nbsp; <Link className='link' to="/register">Register</Link></p>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    )
}
