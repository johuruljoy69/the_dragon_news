import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightNav from '../components/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div className='container mx-auto mt-5'>
            <Header></Header>
            <div className="grid lg:grid-cols-3 w-full gap-10">
                <div className=" w-100 lg:col-span-2 h-100">
                    <Outlet></Outlet>
                </div>

                <div className=" w-100 h-100 ">
                    <RightNav></RightNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;