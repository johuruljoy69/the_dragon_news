import React from 'react';
import moment from 'moment';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'
import { FaCalendar } from 'react-icons/fa';

const EditorSight = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-3'>Editors Insight</h2>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img src={first} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring!</h2>
                        <div className="flex items-center">
                            <FaCalendar></FaCalendar>
                            <p className='ps-3'> {moment().format('yyyy-mm-d')}</p>
                        </div>
                    </div>
                </div>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img src={second} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring!</h2>
                        <div className="flex items-center">
                            <FaCalendar></FaCalendar>
                            <p className='ps-3'> {moment().format('yyyy-mm-d')}</p>
                        </div>
                    </div>
                </div>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img src={third} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring!</h2>
                        <div className="flex items-center">
                            <FaCalendar></FaCalendar>
                            <p className='ps-3'> {moment().format('yyyy-mm-d')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorSight;