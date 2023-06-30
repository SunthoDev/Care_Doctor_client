import React from 'react';
import Banner from '../BannerSlider/Banner';
import AboutUs from '../AboutUs/AboutUs';
import ServiceAria from '../ServiceAria/ServiceAria';
import ContactUs from '../ContactUs/ContactUs';
import OurProduct from '../OurProduct/OurProduct';
import OurTem from '../OurTem/OurTem';
import Choose from '../Choose/Choose';
import Testimonial from '../Testomonial/Testomonial';

const Main = () => {
    return (
        <div className='md:mx-16 px-4'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceAria></ServiceAria>
            <ContactUs></ContactUs>
            <OurProduct></OurProduct>
            <OurTem></OurTem>
            <Choose></Choose>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Main;