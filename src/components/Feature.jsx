import React from 'react';
import box from "../assets/icons/box.png"
import hours from "../assets/icons/24-hours.png"
import truck from "../assets/icons/delivery-truck.png"
import shield from "../assets/icons/shield.png"
const Feature = () => {
    return (
        <div className='bg-theme-1 flex flex-col px-12 gap-12 md:flex-row md:justify-around md:py-10 py-8 rounded-3xl md:my-10 my-6'>
            <div className="flex gap-4">
                <img className='md:w-12 aspect-auto' src={box} alt="Discount Box" />
                <div className="">
                    <p className='text-stone-100 text-lg font-bold'>Discount</p>
                    <p className='text-sm text-slate-200'>Every week new sales</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className='md:w-12 aspect-auto' src={truck} alt="Delivery-Truck" />
                <div className="">
                    <p className='text-stone-100 text-lg font-bold'>Home Delivery</p>
                    <p className='text-sm text-slate-200'>100% Free for all orders</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className='md:w-12 aspect-auto' src={hours} alt="24-Hours" />
                <div className="">
                    <p className='text-stone-100 text-lg font-bold'>Great Support 24/7</p>
                    <p className='text-sm text-slate-200'>We care your experiences</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className='md:w-12 aspect-auto' src={shield} alt="Shield" />
                <div className="">
                    <p className='text-stone-100 text-lg font-bold'>Secure Payment</p>
                    <p className='text-sm text-slate-200'>100% Secure Payment Method</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;