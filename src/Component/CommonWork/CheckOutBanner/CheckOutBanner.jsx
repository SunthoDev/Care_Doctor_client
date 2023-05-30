import React from 'react';
import banner from "../../../assets/images/checkout/checkout.png"
import "./CheckOutBanner.css"

const CheckOutBanner = () => {
    return (
        <div>

            <div className="relative">

                <div className="imgDiv relative">
                    <img className='w-full' src={banner} alt="" />
                    <div className="infoOne absolute">
                        <h2>Check Out</h2>
                    </div>
                    <div className="infoTow w-full absolute bottom-0 right-0">
                        <h2>Home/Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutBanner;