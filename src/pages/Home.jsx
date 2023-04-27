import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css';
import Helmet from '../components/Helmet/Helmet';

import heroImg1 from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';

import SearchBar from '../components/UI/SearchBar/SearchBar';
import ServiceList from '../components/Service/ServiceList';

export default function Home() {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="12" sm="12">
                            <div className='hero-content'>
                                <div className='mt-4 hero-subtitle d-flex align-items-center'>
                                    <h4 className='mb-0'>Know Before You Go</h4>
                                    <img src={worldImg} alt='world-img' />
                                </div>
                                <h1 className='mt-4'>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nobis voluptatibus sint vero tempora repudiandae vel quo non nisi. Quibusdam sapiente, nihil quisquam sed aliquid perferendis aspernatur veniam non qui!</p>
                            </div>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <Row>
                                <Col md="4" sm="12">
                                    <div className='hero-video mb-2'>
                                        <video src={heroVideo} alt='hero-video' controls />
                                    </div>
                                </Col>
                                <Col md="4" sm="12">
                                    <div className='hero-img mt-2'>
                                        <img src={heroImg2} alt='hero-img2' />
                                    </div>
                                </Col>
                                <Col md="4" sm="12">
                                    <div className='hero-img mt-4'>
                                        <img src={heroImg1} alt='hero-img1' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Search Bar */}
            <section>
                <SearchBar />
            </section>

            {/* What we serve */}
            <section>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col lg="3" md="12" sm="12" className='mb-4'>
                            <h4 className='text-center service-subtitle'>What we serve</h4>
                            <h1 className='text-center service-title'>We offer our<br /> best services</h1>
                        </Col>
                        <ServiceList></ServiceList>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
