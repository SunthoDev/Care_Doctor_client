import React from 'react';
import Carousel from 'react-grid-carousel';
import "./OurTem.css"

import img1 from "../../assets/images/team/1.jpg"
import img2 from "../../assets/images/team/2.jpg"
import img3 from "../../assets/images/team/3.jpg"




const OurTem = () => {
    return (
        <div className="mt-10">

            <div className="title md:w-[54%] ">
                <h5>team</h5>
                <h3>Meet Our Team</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className="parentTem mt-10">

                <Carousel cols={3} rows={1} gap={10} loop>
            
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img1} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img2} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img3} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img1} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img2} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img3} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img1} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img2} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="cardMain w-full bg-base-white ">
                            <div className="img rounded-xl px-5 pt-5">
                            <img width="100%" src={img3} />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                                <h3 className='font-bold text-black'>Engine Expert</h3>
                                <div className="Icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>












            </div>









        </div>
    );
};

export default OurTem;