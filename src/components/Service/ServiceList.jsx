import React from 'react'
import { Col } from 'reactstrap';

import ServiceCard from './ServiceCard';

const serviceData = [
    {
        imgUrl: "/images/weather.png",
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        imgUrl: "/images/guide.png",
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        imgUrl: "/images/customization.png",
        title: "Customization",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
]

export default function ServiceList() {
    return (
        <>
            {
                serviceData.map((item, index) =>
                (
                    <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
                        <ServiceCard item={item}></ServiceCard>
                    </Col>)
                )
            }
        </>
    )
}
