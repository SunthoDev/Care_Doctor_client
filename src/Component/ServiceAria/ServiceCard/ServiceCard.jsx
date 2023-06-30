import React from 'react';
import "./ServiceCard.css"
import { Link } from 'react-router-dom';
const ServiceCard = ({ servicesDat }) => {
    let { img, title, service_id, _id, price } = servicesDat
    // console.log(servicesDat)
    return (
        <div className="CardParent">

            <div className="card w-full bg-base-100 shadow-xl">

                <figure className=' h-[250px] '><img className='rounded-lg' src={img} alt="Shoes" /></figure>

                <div className="card-body relative bottom-0 flex py-5 justify-between">

                    <div className="info">
                        <h2 className="font-bold card-title">{title}</h2>
                        <p className="text-[#FF3811] font-semibold">Price : ${price}</p>
                    </div>

                    <div className="flex justify-end ">

                        <Link to={`/checkout/${_id}`} className='detailsBtn'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServiceCard;