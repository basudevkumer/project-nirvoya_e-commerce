import React from 'react'
import Container from '../commonComponent/Container'
import { FaAngleRight } from "react-icons/fa6";

const ProductDetails = () => {
  return (
    <div className='py-[50px] '>
    
    <Container>
      <div className='flex items-center'>
        <span className='font-poppins font-normal text-[16px] text-[#02344F]'>Home</span>
        <span className='flex text-center items-center justify-center font-poppins font-normal text-[16px] text-[#02344F]'><FaAngleRight/>
         <span className='font-poppins font-normal text-[16px] text-[#02344F]'> Mens fashion</span>
         <span className='font-poppins font-normal text-[16px] text-[#02344F]'><FaAngleRight/></span>
         <p className='font-poppins font-normal text-[16px] text-[#757575]'>Stand Collar Leather Jacket </p>
        </span>
      </div>
      <div className='img w-[550px] h-[550px] bg-[#f2f2f24c] mt-6'>
        
      </div>
       
        
    </Container>


    </div>
  )
}

export default ProductDetails