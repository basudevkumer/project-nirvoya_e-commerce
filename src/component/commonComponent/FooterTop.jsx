import React from 'react'
import Container from './Container'
import Images from '../Images'
import footerTop1 from '../../assets/images/footerTop1.png'
import footerTop2 from '../../assets/images/footerTop2.png'
import footerTop3 from '../../assets/images/footerTop3.png'
import footerTop4 from '../../assets/images/footerTop4.png'
import navLogo from '../../assets/images/navLogo.png'
import facebook from '../../assets/images/facebook.png'
import twetter from '../../assets/images/tw.png'
import linkedin from '../../assets/images/ld.png'
import instragram from '../../assets/images/instagram.png'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    // Footer top Part start
    <div className=" w-full">
      <div className="">
        <Container className="">
          <div className=" flex align-items-center justify-between py-20 ">
            <Images src={footerTop1} />
            <Images src={footerTop2} />
            <Images src={footerTop3} />
            <Images src={footerTop4} />
          </div>
        </Container>
      </div>
      {/* // Footer top Part End  */}
      {/* Footer bottom start */}
      <footer className='w-[420px] w-full'>
        <div className="py-12 border border-[#ececec]">
          <Container className=''>
            <div className="flex  gap-x-15 ">
              <div className="pb-10">
                <div className="">
                  <Link to={'/'}>
                    <Images src={navLogo} />
                  </Link>
                </div>
                <p className='text-[#333333]/80 text-[18px] w-[390px] leading-7 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex gap-x-4 pt-8">
                  <Link to={'/'}>
                    <Images src={facebook} />
                  </Link>
                  <Link to={'/'}>
                    <Images src={twetter} />
                  </Link>
                  <Link to={'/'}>
                    <Images src={linkedin} />
                  </Link>
                  <Link to={'/'}>
                    <Images src={instragram} />
                  </Link>
                </div>
              </div>
              <div className="pb-10">
                <h4 className='font-medium text-[20px] text-[#333333]'>QUICK LINKS</h4>
                <ul className='text-[#333333]/80 py-[20px] text-sm text-[18px]'>
                  <li className='pt-4'><Link to={'/'}>About Us</Link></li>
                  <li className='pt-4'><Link to={'/'}>Contact us</Link></li>
                  <li className='pt-4'><Link to={'/'}>Products</Link></li>
                  <li className='pt-4'><Link to={'/'}>Login</Link></li>
                  <li className='pt-4'><Link to={'/'}>Sign Up</Link></li>
                </ul>
              </div>
              <div className="pb-10">
                <h4 className='font-medium text-[20px] text-[#333333] px-[130px]'>CUSTOMER AREA</h4>
                 <ul className='text-[#333333]/80 py-[20px] text-sm text-[18px] px-[130px]'>
                  <li className='pt-4'><Link to={'/'}>My Account</Link></li>
                  <li className='pt-4'><Link to={'/'}>Orders</Link></li>
                  <li className='pt-4'><Link to={'/'}>Terms</Link></li>
                  <li className='pt-4'><Link to={'/'}>Privacy Policy</Link></li>
                  <li className='pt-4'><Link to={'/'}>Shipping Information</Link></li>
                </ul>
              </div>
              <div className="pb-10">
                <h4 className='font-medium text-[20px] text-[#333333] px-[10px]'>CONTACT</h4>
                <p className='text-[#333333]/80 text-[18px] w-[390px] leading-7 pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  )
}

export default Footer