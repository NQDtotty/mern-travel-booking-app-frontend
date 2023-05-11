import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/Common/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../components/UI/Tour/TourCard';

export default function SearchResultList() {
    const location = useLocation();
    const [data] = useState(location.state);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Helmet title="Search Result">
            <CommonSection title={"Search Result List"}></CommonSection>
            <section>
                <Container>
                    <Row>
                        {data.length === 0 ?
                            <Col lg="12">
                                <h4>No tour found</h4>
                            </Col> :
                            data.map((item, index) => (
                                <Col lg="3" md="4" sm="6" className='mb-4' key={item._id}>
                                    <TourCard tour={item}></TourCard>
                                </Col>
                            ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
