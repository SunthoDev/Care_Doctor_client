import React from 'react';
import "./ContactUse.css"
import one from "../../assets/images/icon/1.png"
import tow from "../../assets/images/icon/2.png"
import three from "../../assets/images/icon/3.png"

const ContactUs = () => {
    return (
        <div className="my-16">
            <div className="ParentContact grid md:grid-cols-3 gap-5 bg-black py-20 px-10">

                <div className="Contacts flex items-center">
                    <img src={one} alt="img" />
                    <div className=" ml-5">
                        <h2>We are open monday-friday</h2>
                        <h3>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className="Contacts flex items-center">
                    <img src={tow} alt="img" />
                    <div className=" ml-5">
                        <h2>We are open monday-friday</h2>
                        <h3>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className="Contacts flex items-center">
                    <img src={three} alt="img" />
                    <div className=" ml-5">
                        <h2>We are open monday-friday</h2>
                        <h3>7:00 am - 9:00 pm</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;