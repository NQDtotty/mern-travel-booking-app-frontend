import React, { useContext, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Helmet from '../components/Helmet/Helmet';
import { AuthContext } from '../contexts/AuthContext';
import { BASE_URL } from '../utils/config';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch({ type: 'LOGIN_START' })

        if (!email || !password) {
            toast.warn('Please input all field', {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'toast-message',
                autoClose: 800,
            });
        } else {
            try {
                const res = await fetch(`${BASE_URL}/auths/login`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email,
                        password
                    })
                })

                const result = await res.json();
                if (!res.ok) {
                    toast.warn(result.message, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        className: 'toast-message',
                        autoClose: 800,
                    });
                }
                else {
                    toast.success(result.message, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        className: 'toast-message',
                        autoClose: 1000,
                    });
                    setTimeout(() => {
                        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
                        navigate("/");
                    }, 1200);
                }
            } catch (error) {
                dispatch({ type: 'LOGIN_FAILURE' });
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Helmet title="Login">
            <ToastContainer />
            <Container>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <div className='mb-5 login-wrapper d-flex justify-content-between'>
                            <div className='login-img'>
                                <img src='/images/login.png' alt='login-img' />
                            </div>
                            <div className='login-form'>
                                <div className='user-icon d-flex justify-content-center'>
                                    <img src='/images/user.png' alt='user-icon' />
                                </div>
                                <h2>Login</h2>
                                <Form>
                                    <FormGroup>
                                        <input ref={emailRef} className='form-control' type='email' placeholder='Email' required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input ref={passwordRef} className='form-control' type='password' placeholder='Password' required />
                                    </FormGroup>
                                    <button onClick={handleSubmit} className='btn'>Login</button>
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
