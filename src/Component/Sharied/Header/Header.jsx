import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg"
import ActiveRoute from '../../CommonWork/ActiveRoute/ActiveRoute';
import { useContext } from 'react';
import { AuthContext } from '../../Authencation/AuthProvider/AuthProvider';

const Header = () => {

        let {user,logOut}=useContext(AuthContext)

        let handleLogOut=()=>{
            logOut()
            .then(result=> {})
            .catch(error=>console.log(error))
        }


    
    const navItem = <>
        <li><ActiveRoute to="/">Home</ActiveRoute></li>
        <li><ActiveRoute to="/">About</ActiveRoute></li>
        <li><ActiveRoute to="/">Services</ActiveRoute></li>
        <li><ActiveRoute to="/">Blog</ActiveRoute></li>
        <li><ActiveRoute to="/">Contact</ActiveRoute></li>
        {
            user?.email? <>
            <li><ActiveRoute to="/booking">My Booking</ActiveRoute></li>
                <li><button onClick={handleLogOut}>LogOut</button></li>
            </>  :
            <li><ActiveRoute to="/login">Login</ActiveRoute></li>
        }
    </>

    return (
        <div className='md:mx-16'>
            <div className="navbar bg-whitw  h-24 mb-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {navItem}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='h-16' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <Link className="btn btn-outline btn-secondary">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;