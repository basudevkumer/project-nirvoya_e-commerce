import React from 'react'
import Container from '../commonComponent/Container'
import Flash_images from '../home/Flash_images/arrow-right 1.png'

const Flash = () => {
  return (
   <Container>
    <div className="flash flex items-center justify-between">
      <h2>
        Flash Deals
      </h2>
      <p className='flex items-center justify-between'>View more <span><img src={Flash_images} alt="" /></span></p>
    </div>
   </Container>
  )
}

export default Flash