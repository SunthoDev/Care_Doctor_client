import React from 'react';
import bannerOne from "../../assets/images/banner/1.jpg"
import bannerTow from "../../assets/images/banner/2.jpg"
import bannerThree from "../../assets/images/banner/3.jpg"
import bannerFour from "../../assets/images/banner/4.jpg"
import bannerFive from "../../assets/images/banner/5.jpg"
import bannerSix from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerOne} className="w-full rounded-xl" />

                    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0   top-0">
                        <div className="text-white ml-12 space-y-7 w-1/3">
                            <h1 className='text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority...</p>
                            <div className="md:flex">
                            <button className="btn  btn-warning">Discover More</button>
                            <button  className="btn mt-3 md:mt-0 ml-4 btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn ml-4 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerTow} className="w-full rounded-xl" />

                    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0   top-0">
                        <div className="text-white ml-12 space-y-7 w-1/3">
                            <h1 className='text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority...</p>
                            <div className="md:flex">
                            <button className="btn  btn-warning">Discover More</button>
                            <button  className="btn mt-3 md:mt-0 ml-4 btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn ml-4 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerThree} className="w-full rounded-xl" />

                    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0   top-0">
                        <div className="text-white ml-12 space-y-7 w-1/3">
                            <h1 className='text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority...</p>
                            <div className="md:flex">
                            <button className="btn  btn-warning">Discover More</button>
                            <button  className="btn mt-3 md:mt-0 ml-4 btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn ml-4 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bannerFour} className="w-full rounded-xl" />

                    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0   top-0">
                        <div className="text-white ml-12 space-y-7 w-1/3">
                            <h1 className='text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority...</p>
                            <div className="md:flex">
                            <button className="btn  btn-warning">Discover More</button>
                            <button  className="btn mt-3 md:mt-0 ml-4 btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn ml-4 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={bannerFive} className="w-full rounded-xl" />

                    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0   top-0">
                        <div className="text-white ml-12 space-y-7 w-1/3">
                            <h1 className='text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority...</p>
                            <div className="md:flex">
                            <button className="btn  btn-warning">Discover More</button>
                            <button  className="btn mt-3 md:mt-0 ml-4 btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn ml-4 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={bannerSix} className="w-full rounded-xl" />

                    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0   top-0">
                        <div className="text-white ml-12 space-y-7 w-1/3">
                            <h1 className='text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority...</p>
                            <div className="md:flex">
                            <button className="btn  btn-warning">Discover More</button>
                            <button  className="btn mt-3 md:mt-0 ml-4 btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn ml-4 btn-circle">❯</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;