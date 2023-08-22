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


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate molestiae harum saepe rem accusamus quia eum velit, modi voluptatibus, temporibus corrupti libero dicta minima natus sint impedit esse repudiandae itaque! A totam rerum praesentium recusandae. Rem perspiciatis laudantium mollitia beatae voluptatum illum accusantium consectetur quod asperiores soluta, accusamus iusto molestiae sapiente quidem eum praesentium, assumenda molestias sequi. Quam, qui? Voluptatem incidunt possimus tempora nam dolore asperiores, exercitationem suscipit laborum cumque error aliquid, quaerat, pariatur repudiandae obcaecati magnam excepturi quis alias. Quae recusandae eos numquam quos laborum quas? Adipisci omnis porro quibusdam blanditiis iure nostrum eaque quod ipsa exercitationem deserunt.</p>


        </div>
    );
};

export default AboutUs;