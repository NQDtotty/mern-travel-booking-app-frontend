import React from 'react';
import TourCard from '../UI/Tour/TourCard';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

export default function FeaturedTourList() {
    const { data: featuredTour, loading, error } = useFetch(
        `${BASE_URL}/tours/features/featured-tour`
    );
    return (
        <>
            {loading && <h4>Loading.........</h4>}
            {error && <h4>{error}</h4>}
            {
                !loading && !error && featuredTour.map((item) => (
                    <Col lg="3" md="4" sm="6" className='mb-4' key={item._id}>
                        <TourCard tour={item}></TourCard>
                    </Col>
                ))
            }
        </>
    )
}
