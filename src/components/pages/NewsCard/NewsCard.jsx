import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <div className="card card-compact w-100 bg-base-100 border mb-5">
                <div className="flex justify-between mb-3 p-5 bg-slate-100">
                    <div className='flex items-center gap-3'>
                        <img className='rounded-full w-10' src={author?.img} />
                        <div>
                            <h2 className="text-base font-semibold">{author?.name}</h2>
                            <p><small>{moment(author?.published_date).format('yyyy-mm-d')}</small></p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-5">
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='mb-5'>
                        <h2 className="card-title">{title}</h2>
                        <figure><img className='w-100 h-100 mt-5' src={image_url} alt="Shoes" /></figure>
                        <p className='mt-4'>
                            {details.length < 250 ? <>{details}</> :
                                <>{details.slice(0, 250)}... <br /> <Link className='text-orange-500' to={`/news/${_id}`} >Read more</Link></>}
                        </p>
                    </div>
                    <hr />
                    <div className="flex justify-between p-5 ">
                        <div className='flex items-center gap-3'>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number) || 0} readonly />
                            <span className='ms-2'>{rating?.number}</span>
                        </div>
                        <div className=" flex items-center gap-3">
                            <FaEye></FaEye> {total_view}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;