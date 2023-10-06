import React from 'react';
import { Link } from 'react-router-dom';

const Newscard = ({news}) => {
    const {_id, title, image_url, details} = news;
    return (
      <> 
     <div className="relative mb-10 mx-auto lg:w-[518px] flex flex-col text-white shadow-md">
        <div className="relative m-0  overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
          className='lg:w-[480px] h-[262px] mx-auto rounded-none'
            src={image_url}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-white antialiased">
           {
              details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}
               className='text-red-500 font-medium'>Read More...</Link></p>
              :<p>{details}</p>
           }
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            <img
              alt="natali craig"
              src={image_url}
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-1"
            />
           
          </div>
          
        </div>
      </div>
      </> 
    );
};

export default Newscard;