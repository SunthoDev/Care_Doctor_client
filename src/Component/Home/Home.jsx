import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sharied/Footer/Footer';
import Header from '../Sharied/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;