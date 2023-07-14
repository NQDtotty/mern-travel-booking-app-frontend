import React, { useRef } from 'react';
import './searchBar.css';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
            toast.warn('All field are required!!', {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'toast-message',
                autoClose: 800,
            });
        }
        else {
            navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: { location, distance, maxGroupSize } });
        }
    }

    return (
        <Container>
            <ToastContainer />
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
