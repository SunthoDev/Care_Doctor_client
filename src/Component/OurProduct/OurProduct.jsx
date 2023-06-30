import React from 'react';
import "./OurProduct.css"
import service1 from "../../assets/images/products/1.png"
import service2 from "../../assets/images/products/2.png"
import service3 from "../../assets/images/products/3.png"
import service4 from "../../assets/images/products/4.png"
import service5 from "../../assets/images/products/5.png"
import service6 from "../../assets/images/products/6.png"

const OurProduct = () => {
    return (
        <div>

            <div className="title md:w-[54%] ">
                <h5>Browse Our Products</h5>
                <h3>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className="parent grid md:grid-cols-3 gap-5 mt-14">

                <div className="card w-full bg-base-white ">
                    <div className="img rounded-xl px-6 pt-6">
                        <img src={service1} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
                    </div>
                    <div className="card-body items-center text-center">
                        <div className="flex">
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                        </div>
                        <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                        <h3 className='font-bold text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-full bg-base-white ">
                    <div className="img rounded-xl px-6 pt-6">
                        <img src={service2} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
                    </div>
                    <div className="card-body items-center text-center">
                        <div className="flex">
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                        </div>
                        <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                        <h3 className='font-bold text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-full bg-base-white ">
                    <div className="img rounded-xl px-6 pt-6">
                        <img src={service3} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
                    </div>
                    <div className="card-body items-center text-center">
                        <div className="flex">
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                        </div>
                        <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                        <h3 className='font-bold text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-full bg-base-white ">
                    <div className="img rounded-xl px-6 pt-6">
                        <img src={service4} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
                    </div>
                    <div className="card-body items-center text-center">
                        <div className="flex">
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                        </div>
                        <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                        <h3 className='font-bold text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-full bg-base-white ">
                    <div className="img rounded-xl px-6 pt-6">
                        <img src={service5} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
                    </div>
                    <div className="card-body items-center text-center">
                        <div className="flex">
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                        </div>
                        <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                        <h3 className='font-bold text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-full bg-base-white ">
                    <div className="img rounded-xl px-6 pt-6">
                        <img src={service6} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
                    </div>
                    <div className="card-body items-center text-center">
                        <div className="flex">
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                            <i class="fa px-1 text-[#FF912C] text-xl fa-star" aria-hidden="true"></i>
                        </div>
                        <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                        <h3 className='font-bold text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline btn-error mt-5">More Products</button>
        </div>
    );
};

export default OurProduct;