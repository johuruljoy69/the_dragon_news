import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import EditorSight from './EditorSight';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <div className="card card-compact w-100 bg-base-100 border mb-5">
                <div className='p-5'>
                    <div className='mb-5'>
                        <h2 className="card-title">{title}</h2>
                        <figure><img className='w-100 h-100 mt-5' src={image_url} alt="Shoes" /></figure>
                        <p className='mt-4'>
                            {details}
                        </p>
                    </div>
                    <Link to={`/category/${category_id}`} >
                        <button className='btn bg-red-500 border-0'><FaArrowLeft></FaArrowLeft> <span className='ps-3'>All news in this category</span> </button>
                    </Link>
                </div>
            </div>
            <div>
                <EditorSight></EditorSight>
            </div>
        </div>
    );
};

export default News;