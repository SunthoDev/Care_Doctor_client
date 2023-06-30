import React from 'react';
import "./Testomonial.css"
import Carousel from 'react-grid-carousel'
import quat from "../../assets/images/icon/quote 1.png"
import shipon from "../../assets/images/testimonial/Shipon.jpg"

const Testimonial = () => {
    return (
        <div className='my-20'>

            <div className="title md:w-[54%] ">
                <h5>Testimonial</h5>
                <h3>What Customer Says</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className="testimonialAll mt-10">
                <Carousel cols={2} rows={1} gap={20} loop>

                    <Carousel.Item>

                        <div className="testimonialParent">

                            <div className="info flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="img">
                                        <img src={shipon} alt="shipon" />
                                    </div>
                                    <div className="name ml-3">
                                        <h3>Shipon Dev</h3>
                                        <h5 className='text-black'>Businessman</h5>
                                    </div>
                                </div>
                                <img src={quat} alt="img" />
                            </div>
                            <p className='write'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className="ratting mt-4">
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="testimonialParent">

                            <div className="info flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="img">
                                        <img src={shipon} alt="shipon" />
                                    </div>
                                    <div className="name ml-3">
                                        <h3>Shipon Dev</h3>
                                        <h5 className='text-black'>Businessman</h5>
                                    </div>
                                </div>
                                <img src={quat} alt="img" />
                            </div>
                            <p className='write'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className="ratting mt-4">
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="testimonialParent">

                            <div className="info flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="img">
                                        <img src={shipon} alt="shipon" />
                                    </div>
                                    <div className="name ml-3">
                                        <h3>Shipon Dev</h3>
                                        <h5 className='text-black'>Businessman</h5>
                                    </div>
                                </div>
                                <img src={quat} alt="img" />
                            </div>
                            <p className='write'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className="ratting mt-4">
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="testimonialParent">

                            <div className="info flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="img">
                                        <img src={shipon} alt="shipon" />
                                    </div>
                                    <div className="name ml-3">
                                        <h3>Shipon Dev</h3>
                                        <h5 className='text-black'>Businessman</h5>
                                    </div>
                                </div>
                                <img src={quat} alt="img" />
                            </div>
                            <p className='write'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className="ratting mt-4">
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                                <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Carousel.Item>







                </Carousel>
            </div>








        </div>
    );
};

export default Testimonial;