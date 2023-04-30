import React from 'react';
import TourCard from '../UI/Tour/TourCard';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

export default function FeaturedTourList() {
    const { data, loading, error } = useFetch(
        `${BASE_URL}/tour/search/getFeaturedTour`
    );
    return (
        <>
            {loading && <h4>Loading.........</h4>}
            {error && { error }}
            {
                !loading && !error && data.map((item) => (
                    <Col lg="3" md="4" sm="6" className='mb-4' key={item._id}>
                        <TourCard tour={item}></TourCard>
                    </Col>
                ))
            }
        </>
    )
}
