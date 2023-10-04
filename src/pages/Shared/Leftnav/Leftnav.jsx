import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='space-y-6'>
            <h2 className='text-2xl'>All Categories</h2>
            <div>
                {
                    categories.map(category => <Link
                        className='block ml-4 text-xl font-semibold'
                        to={`category/${category.id}`}
                        key={category.id}
                        category={category}>
                        {category.name}</Link>)
                }
            </div>
        </div>
    );
    
};

export default Leftnav;