import React, { useRef } from 'react';
import './searchBar.css';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../utils/config';

export default function SearchBar() {
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandle = async (e) => {
        e.preventDefault();
        const location = locationRef.current.value;
        const distance = Number(distanceRef.current.value);
        const maxGroupSize = Number(maxGroupSizeRef.current.value);

        if (location === "" || distance === 0 || maxGroupSize === 0) {
            alert("All fields are required!");
        }
        else {
            const res = await fetch(`${BASE_URL}/tour/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

            if (!res.ok) alert("Something went wrong");

            const result = await res.json();

            navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data });
        }
    }

    return (
        <Container>
            <Form className='search-bar'>
                <Row className='d-flex align-items-center justify-content-between'>
                    <Col lg="4" md="12" sm="12">
                        <FormGroup className='d-flex p-1 gap-3 form-group'>
                            <span>
                                <i className="ri-map-pin-line"></i>
                            </span>
                            <div>
                                <h6>Location</h6>
                                <input type='text' ref={locationRef} placeholder='Where are you going?' />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <FormGroup className='d-flex p-1 gap-3 form-group'>
                            <span>
                                <i className="ri-map-pin-time-line"></i>
                            </span>
                            <div>
                                <h6>Distance</h6>
                                <input type='number' ref={distanceRef} min="0" placeholder='Distance k/m' />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <FormGroup className='d-flex p-1 gap-3 form-group'>
                            <span>
                                <i className="ri-group-line"></i>
                            </span>
                            <div>
                                <h6>Max People</h6>
                                <input type='number' ref={maxGroupSizeRef} min="0" placeholder='0' />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="2" md="3" sm="12" className='d-flex justify-content-center'>
                        <button className='btn search-btn d-flex gap-1' type="submit" onClick={searchHandle}>
                            Search
                            <i className="ri-search-line"></i>
                        </button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
