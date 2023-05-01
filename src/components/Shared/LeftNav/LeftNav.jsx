import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-dragon-news-server-johuruljoy69.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-semibold pb-4'>All Category</h2>
            <div className='ps-5 text-xl grid gap-5'>
                {
                    categories.map(category => <p
                        key={category.id}

                    >
                        <Link to={`/category/${category.id}`} className='font-semibold text-gray-500'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;