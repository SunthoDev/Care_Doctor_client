import React from 'react';
import "./Choose.css"

import img1 from "../../assets/images/choose/1.png"
import img2 from "../../assets/images/choose/2.png"
import img3 from "../../assets/images/choose/3.png"
import img4 from "../../assets/images/choose/4.png"
import img5 from "../../assets/images/choose/5.png"
import img6 from "../../assets/images/choose/6.png"

const Choose = () => {
    return (
        <div className='mt-14'>
            <div className="title md:w-[54%] ">
                <h5>Core Feature</h5>
                <h3>Why Choose Us</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className="parent grid md:grid-cols-6 gap-5 mt-10">

                <div className="choose">
                    <div className="img">
                        <img src={img1} alt="img" />
                    </div>
                    <h2>Expert Team</h2>
                </div>
                <div className="choose">
                    <div className="img">
                        <img src={img3} alt="img" />
                    </div>
                    <h2>Expert Team</h2>
                </div>
                <div className="choose">
                    <div className="img">
                        <img src={img3} alt="img" />
                    </div>
                    <h2>Expert Team</h2>
                </div>
                <div className="choose">
                    <div className="img">
                        <img src={img4} alt="img" />
                    </div>
                    <h2>Expert Team</h2>
                </div>
                <div className="choose">
                    <div className="img">
                        <img src={img5} alt="img" />
                    </div>
                    <h2>Expert Team</h2>
                </div>
                <div className="choose">
                    <div className="img">
                        <img src={img6} alt="img" />
                    </div>
                    <h2>Expert Team</h2>
                </div>
               
            </div>
        </div>
    );
};

export default Choose;