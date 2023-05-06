import React, { useEffect, useState } from 'react';
import CommonSection from '../components/UI/Common/CommonSection';
import '../styles/tours.css';
import SearchBar from '../components/UI/SearchBar/SearchBar';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { Col, Container, Row } from 'reactstrap';
import TourCard from '../components/UI/Tour/TourCard';
import Helmet from '../components/Helmet/Helmet';

export default function Tour() {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const { data: tours, loading, error } = useFetch(
        `${BASE_URL}/tour/getAllTour?page=${page}`
    );
    const { data: tourCount } = useFetch(
        `${BASE_URL}/tour/search/getTourCount`
    );

    useEffect(() => {
        const pages = Math.ceil(tourCount / 2);
        setPageCount(pages);
        window.scrollTo(1, 1);
    }, [tourCount, page]);

    return (
        <Helmet title="Tours">
            <CommonSection title={"All Tours"}></CommonSection>
            <section>
                <SearchBar></SearchBar>
            </section>
            <section className='pt-0'>
                <Container>
                    <Row>
                        {loading && <h4>Loading.........</h4>}
                        {error && <h4>{error}</h4>}
                        {
                            !loading && !error && tours.map((item) => (
                                <Col lg="3" md="4" sm="6" className='mb-4' key={item._id}>
                                    <TourCard tour={item}></TourCard>
                                </Col>
                            ))
                        }
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
