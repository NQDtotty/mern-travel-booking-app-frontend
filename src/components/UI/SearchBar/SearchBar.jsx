import React, { useRef } from 'react';
import './searchBar.css';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

export default function SearchBar() {
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandle = () => {
        const location = locationRef.current.valueOf;
        const distance = distanceRef.current.valueOf;
        const maxGroupSize = maxGroupSizeRef.current.valueOf;

        if (location === "" || distance === 0 || maxGroupSize === 0) {
            alert("All fields are required!");
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
                                <input type='number' ref={distanceRef} placeholder='Distance k/m' />
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
                                <input type='number' ref={maxGroupSizeRef} placeholder='0' />
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
