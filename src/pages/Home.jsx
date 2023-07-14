import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css';
import Helmet from '../components/Helmet/Helmet';

import SearchBar from '../components/UI/SearchBar/SearchBar';
import ServiceList from '../components/Service/ServiceList';
import FeaturedTourList from '../components/FeaturedTour/FeaturedTourList';
import MasonryImagesGallery from '../components/Gallery/MasonryImagesGallery';
import Newsletter from '../components/Newsletter/Newsletter';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="12" sm="12">
                            <div className='hero-content'>
                                <div className='mt-4 hero-subtitle d-flex align-items-center'>
                                    <h4 className='mb-0'>Know Before You Go</h4>
                                    <img src="/images/world.png" alt='world-img' />
                                </div>
                                <h1 className='mt-4'>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nobis voluptatibus sint vero tempora repudiandae vel quo non nisi. Quibusdam sapiente, nihil quisquam sed aliquid perferendis aspernatur veniam non qui!</p>
                            </div>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <Row>
                                <Col md="4" sm="12">
                                    <div className='hero-video mb-2'>
                                        <video src="/images/hero-video.mp4" alt='hero-video' controls />
                                    </div>
                                </Col>
                                <Col md="4" sm="12">
                                    <div className='hero-img mt-2'>
                                        <img src="/images/hero-img02.jpg" alt='hero-img2' />
                                    </div>
                                </Col>
                                <Col md="4" sm="12">
                                    <div className='hero-img mt-4'>
                                        <img src="/images/hero-img01.jpg" alt='hero-img1' />
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

            {/* Featured Tour */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h4 className='mb-0 featured-subtitle'>Explore</h4>
                            <h2 className='mt-4 featured-title'>Our featured tour</h2>
                        </Col>
                    </Row>
                    <Row>
                        <FeaturedTourList></FeaturedTourList>
                    </Row>
                </Container>
            </section>

            {/* Experience */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="12" sm="12">
                            <h4 className='mb-0 experience-subtitle'>Experience</h4>
                            <h2 className='mt-4 experience-title'>With our all experience <br />We will serve you</h2>
                            <p className='mt-4 experience-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sunt repudiandae fugiat pariatur eos perferendis!</p>
                            <div className='mt-5 experience-statistic d-flex align-items-center justify-content-between'>
                                <div className='item-statistic text-center'>
                                    <span className='box-statistic'>
                                        12k+
                                    </span>
                                    <p className='mt-3 desc-statistic'>
                                        Successful trip
                                    </p>
                                </div>
                                <div className='item-statistic text-center'>
                                    <span className='box-statistic'>
                                        2k+
                                    </span>
                                    <p className='mt-3 desc-statistic'>
                                        Regular clients
                                    </p>
                                </div>
                                <div className='item-statistic text-center'>
                                    <span className='box-statistic'>
                                        15
                                    </span>
                                    <p className='mt-3 desc-statistic'>
                                        Year experience
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <div className='experience-img'>
                                <img src='/images/experience.png' alt='experience-img' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Gallery */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h4 className='mb-0 gallery-subtitle'>Gallery</h4>
                            <h2 className='mt-4 gallery-title'>Visit our customers tour gallery</h2>
                        </Col>
                    </Row>
                    <Row>
                        <MasonryImagesGallery></MasonryImagesGallery>
                    </Row>
                </Container>
            </section>

            {/* Newsletter */}
            <section className='newsletter'>
                <Newsletter></Newsletter>
            </section>
        </Helmet>
    )
}
