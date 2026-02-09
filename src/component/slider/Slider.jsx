import React from 'react'
import Slid from '../../assets/images/slid1.png'
import Slid2 from '../../assets/images/slid2.png'
import Slid3 from '../../assets/images/slid3.png'
import Container from '../commonComponent/Container'

const Slider = () => {
  return (
   <Container>
    <div className='pt-3'>
        <div className='grid grid-cols-3 gap-x-6'>
            {/* left side */}
            <div className='col-span-2 bg-cover py-30 pl-15 pr-5' style={{backgroundImage:`url(${Slid})`}}>
                <h1 className='text-[#0970CD] text-5xl/snug font-bold w-120'>Explore Men’s Winter Collection</h1>
                <p className='w-80  py-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                <a href="#" className='bg-[#0198E9] px-6 py-3 rounded-lg '>SHOP NOW</a>

            </div>
            {/* right side */}
            <div className='space-y-6'>
                <div className=' bg-cover py-30' style={{backgroundImage:`url(${Slid2})`}}></div>
                <div className=' bg-cover py-30' style={{backgroundImage:`url(${Slid3})`}}></div>
            </div>

        </div> 
    </div>
   </Container>
  )
}

export default Slider
