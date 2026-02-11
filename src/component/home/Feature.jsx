import React from 'react';
import Container from '../commonComponent/Container';
import watch1 from '../home/Feature image/watch1.png';
import watch2 from '../home/Feature image/watch2.png';
import chair1 from '../home/Feature image/chair1.png';
import chair2 from '../home/Feature image/chair2.png';
import Bed from '../home/Feature image/bed.png';
import womanOrange from '../home/Feature image/Woamn orange.png';
import womanYellow from '../home/Feature image/Women yellow.png'
import womanWhite from '../home/Feature image/Woamn white.png';
import WomanBrown from '../home/Feature image/Woman brown.png';
import black1 from '../home/Feature image/Woamn black1.png';
import black2 from '../home/Feature image/woman black2.png';
import black3 from '../home/Feature image/woman black3.png';
import bag1 from '../home/Feature image/bag1.png';
import bag2 from '../home/Feature image/bag2.png';
import womanPink from '../home/Feature image/woman pink.png';
import torchlight from '../home/Feature image/Torchlight.png';
import love from '../home/Feature image/love.png';
import { FaAngleDown } from "react-icons/fa6";




import { FaStar } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";



const Feature = () => {
    return (
        <>
        <Container>
            
            <h1 className='text-[26px] font-medium'>Featured Product</h1>
            <div className='grid grid-cols-4 gap-6'>
            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={watch1} alt="watch1" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2 >Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳10500 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' relative w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={chair1} alt="chair1" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Women fashion dress set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000 <span ><FaShoppingBasket /></span></p>
            </div>
            <img src={love} alt="love" className='absolute top-4 right-4' />
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={chair2} alt="chair2" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳5000 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={Bed} alt="Bed" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Women black dress and red hat <br/> collections</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000.00 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={womanYellow} alt="womanYellow" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳10500 <span ><FaShoppingBasket /></span></p>
            </div>

            </div>

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={WomanBrown} alt="WomanBrown" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Women fashion dress set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={womanWhite} alt="womanWhite" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳5000 <span ><FaShoppingBasket /></span></p>
            </div>
            </div>

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={black1} alt="black1" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
            <h2>Women black dress and red hat <br/> collections</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000.00 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={black2} alt="black2" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳10500 <span ><FaShoppingBasket /></span></p>
            </div>

            </div>

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={womanOrange} alt="womanOrange" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Women fashion dress set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={womanPink} alt="womanPink" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
           <h2>Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳5000 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={black3} alt="black3" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'> 
            <h2>Women black dress and red hat <br/> collections</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000.00 <span ><FaShoppingBasket /></span></p>
           </div>

            </div>
            
            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={watch2} alt="watch2" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
            <div className='space-y-2'>
             <h2>Headrest Executive Mesh Office <br/> Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳10500 <span ><FaShoppingBasket /></span></p>
            </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={torchlight} alt="torchlight" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
           <div className='space-y-2'>
           <h2>Women fashion dress set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳5000 <span ><FaShoppingBasket /></span></p>
           </div>
            </div> 

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={bag1} alt="bag1" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
           <div className='space-y-2'>
           <h2>Headrest Executive Mesh Office<br/>Chair set</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳5000 <span ><FaShoppingBasket /></span></p>
           </div>
            </div>

            <div className=' w-[310px] hover:shadow-lg hover:shadow-gray-400'>
           <img src={bag2} alt="bag2" />
           <p className='flex items-center gap-x-1 '> <span className='text-[#ffff00] flex'><FaStar /><FaStar />< FaStar /><FaStar /> </span><span className='text-[#C0C0C0]'><FaStar /></span>  (0) </p>
           <div className='space-y-2'>
            <h2>Women black dress and red hat <br/> collections</h2>
           <p className='flex items-center gap-x-55 text-[#0970CD]'>৳1000.00 <span ><FaShoppingBasket /></span></p>
           </div>
            </div> 
            </div>
         <button className=" rounded-3xl text-[#FFFFFF] mx-auto block mt-10 flex items-center p-3 bg-[#34ADED] gap-x-0.5">Show more<FaAngleDown /></button>   
        </Container> 
        </>
    );
};

export default Feature;