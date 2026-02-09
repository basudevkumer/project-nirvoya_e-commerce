import React from 'react';
import Container from '../commonComponent/Container';
import watch1 from '../home/Feature image/watch1.png'
import { FaStar } from "react-icons/fa";





const Feature = () => {
    return (
        <>
        <Container>
            <div className='border w-[332px]'>
           <img src={watch1} alt="watch1" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
           <h2>Headrest Executive Mesh Office Chairset</h2>
           <p>৳10500 <span></span></p>
            </div> 
        </Container> 
        </>
    );
};

export default Feature;