import React, { useEffect, useContext, useRef } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';
import Helmet from '../components/Helmet/Helmet';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

export default function Register() {
    const usernameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password || !username) {
            toast.warn('Please input all field', {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'toast-message',
                autoClose: 800,
            });
            console.log("Enter")
        } else {
            try {
                const res = await fetch(`${BASE_URL}/auths/register`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                });

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
                        dispatch({ type: 'REGISTER_SUCCESS' });
                        navigate("/login");
                    }, 1200);
                }
            } catch (error) {
            }
        }
    }

    return (
        <Helmet title="Register">
            <ToastContainer />
            <Container>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <div className='mb-5 register-wrapper d-flex justify-content-between'>
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
                                        <input ref={usernameRef} className='form-control' type='text' placeholder='Username' required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input ref={emailRef} className='form-control' type='email' placeholder='Email' required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input ref={passwordRef} className='form-control' type='password' placeholder='Password' required />
                                    </FormGroup>
                                    <button onClick={handleSubmit} className='btn'>Register</button>
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