import React, { useEffect, useState } from 'react';

const Leftnav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2>LeftNav {categories.length}</h2>
        </div>
    );
};

export default Leftnav;