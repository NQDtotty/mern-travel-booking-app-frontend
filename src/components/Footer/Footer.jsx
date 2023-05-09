import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row, ListGroupItem, ListGroup } from 'reactstrap';
import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='mb-5'>
                    <Col lg="3" md="12" sm="12">
                        <div className='footer-logo'>
                            <img src="/images/logo.png" alt="logo-img" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, adipisci.</p>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className='footer-title'>Discover</h5>
                        <ListGroup className='footer-list'>
                            <ListGroupItem className='footer-list-item border-0'>
                                <Link to="/home">Home</Link>
                            </ListGroupItem>
                            <ListGroupItem className='footer-list-item border-0'>
                                <Link to="/about">About</Link>
                            </ListGroupItem>
                            <ListGroupItem className='footer-list-item border-0'>
                                <Link to="/tours">Tours</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className='footer-title'>Quick Links</h5>
                        <ListGroup className='footer-list'>
                            <ListGroupItem className='footer-list-item border-0'>
                                <Link to="#">Gallery</Link>
                            </ListGroupItem>
                            <ListGroupItem className='footer-list-item border-0'>
                                <Link to="/login">Login</Link>
                            </ListGroupItem>
                            <ListGroupItem className='footer-list-item border-0'>
                                <Link to="/register">Register</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className='footer-title'>Contact</h5>
                        <ListGroup className='footer-list'>
                            <ListGroupItem className='footer-list-item border-0'>
                                <i className="ri-map-pin-line"></i>&nbsp;&nbsp;
                                <span>Address:</span>&nbsp;&nbsp;&nbsp;
                                <a href='#'>Vietnam</a>
                            </ListGroupItem>
                            <ListGroupItem className='footer-list-item border-0'>
                                <i className="ri-mail-line"></i>&nbsp;&nbsp;
                                <span>Email:</span>&nbsp;&nbsp;&nbsp;
                                <a href='mailto:itnat1503@gmail.com'>itnat1503@gmail.com</a>
                            </ListGroupItem>
                            <ListGroupItem className='footer-list-item border-0'>
                                <i className="ri-phone-line"></i>&nbsp;&nbsp;
                                <span>Phone:</span>&nbsp;&nbsp;&nbsp;
                                <a href='tel:0123456789'>0123456789</a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <p className='copyright-text text-center'>&copy;Copyright - 2023, website made by Nguyễn Anh Thoại. All Rights Reserved</p>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <div className='social-links d-flex align-items-center gap-4 justify-content-center'>
                            <p className='m-0'>Follow me:</p>
                            <span>
                                <Link to="https://www.facebook.com/Ng.AnhThoai/">
                                    <i className="ri-facebook-circle-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.instagram.com/_nat_0311/">
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://github.com/NQDtotty">
                                    <i className="ri-github-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.linkedin.com/in/nguyen-anh-thoai-84756b242/">
                                    <i className="ri-linkedin-fill"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}
