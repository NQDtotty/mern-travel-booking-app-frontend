import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/Common/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../components/UI/Tour/TourCard';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

export default function SearchResultList() {
    const location = useLocation();
    const [city] = useState(location.state.location);
    const [distance] = useState(Number(location.state.distance));
    const [maxGroupSize] = useState(Number(location.state.maxGroupSize));

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const { data: tours, loading, error } = useFetch(
        `${BASE_URL}/tours/search/search-tour?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}?page=${page}`
    );

    useEffect(() => {
        const pages = Math.ceil(tours.length / 4);
        setPageCount(pages);
        window.scrollTo(0, 0);
    }, [tours]);

    return (
        <Helmet title="Search Result">
            <CommonSection title={"Search Result List"}></CommonSection>
            <section>
                <Container>
                    <Row>
                        {loading && <h4>Loading.........</h4>}
                        {error && <h4>{error}</h4>}
                        {!loading && !error && tours.length === 0 ?
                            <Col lg="12">
                                <h4>No tour found</h4>
                            </Col> :
                            tours.map((item) => (
                                <Col lg="3" md="4" sm="6" className='mb-4' key={item._id}>
                                    <TourCard tour={item}></TourCard>
                                </Col>
                            ))}
                    </Row>
                    <Row>
                        <Col lg="12">
                            <div className='pagination d-flex align-items-center justify-content-center gap-2'>
                                {[...Array(Number(pageCount)).keys()].map(number => (
                                    <span key={number} onClick={() => setPage(number)} className={
                                        page === number ? "active-page" : ""
                                    }>
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
