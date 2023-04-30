import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='mb-6'>
            <div className='grid justify-center text-center items-center mb-5'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='flex bg-sky-50 p-3 mb-5'>
                <button className='px-5 py-2 text-white font-semibold bg-red-700'>Latest</button>
                <Marquee>
                    <p className='font-semibold text-red-700'>
                        Anarchism has a long history in political philosophy, especially since the 19th century. Mohammed Hiran had been waiting at Chattogram Railway Station for the Dhaka-bound Mahanagar Express since 12:00pm today.The actor often avoids questions regarding her relationship status. However, she has decided to change that now. Sajeeb Wazed Joy, the ICT adviser to the prime minister, renewed his party membership today.A smashing partnership between Vijay Shankar and David Miller steered holders Gujarat Titans to the top of the IPL table with a seven-wicket win over Kolkata Knight Riders on Saturday.Members of the coast guard have rescued 19 fishermen along with a fishing trawler from the deep sea of Cox's Bazar today.Emphasising that all preparations regarding tomorrow's SSC exam have been made, Education Minister Dipu Moni has said that there is no chance of questions leaking.
                    </p>
                </Marquee>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a>
                                    About
                                </a>
                            </li>
                            <li><a>Career</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                About                             
                            </a>
                        </li>
                        <li><a>Career</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="" />
                            </div>                            
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <button className='px-7 py-2 mx-5 text-white font-semibold bg-gray-600 '>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;