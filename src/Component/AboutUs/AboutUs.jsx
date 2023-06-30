import React from 'react';
import "./AboutUs.css"
import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="my-16">

            <div className="parent grid md:grid-cols-2 gap-8 items-center">

                <div className="left">

                    <div className="relative">

                        <img className='w-4/5 rounded-xl' src={person} alt="" />

                        <div className="overlay mt-[-105px] md:mt-0 absolute border-white  flex justify-end ">
                            <img className='w-3/5 ' src={parts} alt="" />
                        </div>

                    </div>

                </div>


                <div className="right">
                    <h4 className='text-[#FF3811]'>About Us</h4>
                    <h2 className='md:w-[48%]'>We are qualified & of experience in this field</h2>
                    <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn  btn-warning">Discover More</button>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;