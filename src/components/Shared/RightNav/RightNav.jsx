import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='grid justify-center '>
            <div className=' ps-3 '>
                <h2 className='text-2xl font-semibold mb-3'>Login With</h2>
                <div className='grid grid-cols-1'>
                    <button className="btn btn-outline mb-3"><FaGoogle /><span className='ps-2'>Login with Google</span> </button>
                    <button className="btn btn-outline btn-primary mb-3"><FaGithub /><span className='ps-2'>Login with GitHub</span> </button>
                </div>
            </div>
            <div className=' mt-2 ps-3 '>
                <h2 className='text-xl font-semibold mb-3'>Find Us On</h2>
                <div className="btn-group btn-group-vertical">
                    <button className="btn text-black bg-gray-50 px-12"><FaFacebook /><span className='ps-5'>Facebook</span></button>
                    <button className="btn text-black bg-gray-50 px-12"><FaTwitter /><span className='ps-5'>Twitter</span></button>
                    <button className="btn text-black bg-gray-50 px-12"><FaInstagram /><span className='ps-5'>Instagram</span></button>
                </div>
            </div>
            <QZone></QZone>
            <div className='mt-3'>
                <img src={bg} alt=""  />
            </div>
        </div>
    );
};

export default RightNav;