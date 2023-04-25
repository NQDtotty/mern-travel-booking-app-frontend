import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css';
import Helmet from '../components/Helmet/Helmet';

import heroImg1 from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';


export default function Home() {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className='hero-content'>
                                <div className='mt-4 hero-subtitle d-flex align-items-center'>
                                    <h4 className='mb-0'>Know Before You Go</h4>
                                    <img src={worldImg} alt='world-img' />
                                </div>
                                <h1 className='mt-4'>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nobis voluptatibus sint vero tempora repudiandae vel quo non nisi. Quibusdam sapiente, nihil quisquam sed aliquid perferendis aspernatur veniam non qui!</p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero-img'>
                                <img src={heroImg1} alt='hero-img1' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero-video'>
                                <video src={heroVideo} alt='hero-video' controls />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero-img'>
                                <img src={heroImg2} alt='hero-img2' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
