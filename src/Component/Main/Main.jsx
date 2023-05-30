import React from 'react';
import Banner from '../BannerSlider/Banner';
import AboutUs from '../AboutUs/AboutUs';
import ServiceAria from '../ServiceAria/ServiceAria';

const Main = () => {
    return (
        <div className='md:mx-16'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceAria></ServiceAria>
        </div>
    );
};

export default Main;