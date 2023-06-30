import React, { useEffect, useState } from 'react';
import "./ServiceAria.css"
import ServiceCard from './ServiceCard/ServiceCard';

const ServiceAria = () => {
    let [service, setService] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])



    return (
        <div className='mt-20'>

            <div className="title md:w-[54%] ">
                <h5>Service</h5>
                <h3>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <h2 className='cardLength mb-5 md:w-[17%]'>total services :{service.length}</h2>
            <div className="CardData grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    service.map(serve => <ServiceCard key={serve._id} servicesDat={serve}></ServiceCard>)
                }

            </div>
            <button className="seeMore">More Services</button>
        </div>
    );
};

export default ServiceAria;