import React, { useEffect, useState } from 'react';
import "./ServiceAria.css"
import ServiceCard from './ServiceCard/ServiceCard';

const ServiceAria = () => {
    let [service, setService] = useState([])

    useEffect(() => {
        fetch("https://care-doctor-server.vercel.app/services")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])



    return (
        <div className=''>
            <div className="title">
                <h5>Service</h5>
                <h3>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>


            <h2 className='cardLength'>total services :{service.length}</h2>
            <div className="CardData grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {
                    service.map(serve=> <ServiceCard key={serve._id} servicesDat={serve}></ServiceCard>)
                }

            </div>
            <button className="seeMore">More Services</button>





        </div>
    );
};

export default ServiceAria;