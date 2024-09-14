import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Button = ({content}) => {
    return (
        <div>
           <button className='btn bg-theme-1 text-slate-100 md:px-6 md:text-lg hover:bg-theme-4 rounded-2xl border-none'>{content} <FaArrowRightLong/></button> 
        </div>
    );
};

export default Button;