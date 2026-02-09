
import Slid from '../../assets/images/slid1.png'
import Slid2 from '../../assets/images/slid2.png'
import Slid3 from '../../assets/images/slid3.png'
import Slid4 from '../../assets/images/slid4.png'
import Slid5 from '../../assets/images/slid5.png'
import Container from '../commonComponent/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const Slider = () => {


  return (
    <Container>
      <div className="pt-3">
        <div className="grid grid-cols-3 gap-x-6">

          {/* LEFT SIDE SLIDER */}
          <div className="col-span-2">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper "
            >
              <SwiperSlide>
                <div
                  className="bg-cover py-30 pl-15 pr-5"
                  style={{ backgroundImage: `url(${Slid})` }}
                >
                  <h1 className="text-[#0970CD] text-5xl/snug font-bold w-120">
                    Explore Men’s Winter Collection
                  </h1>
                  <p className="w-80 py-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="bg-[#0198E9] px-6 py-3 rounded-lg inline-block"
                  >
                    SHOP NOW
                  </a>
                </div>
              </SwiperSlide><SwiperSlide>
                <div
                  className="bg-cover py-30 pl-15 pr-5"
                  style={{ backgroundImage: `url(${Slid4})` }}
                >
                  <h1 className="text-[#0970CD] text-5xl/snug font-bold w-120">
                    Explore Men’s Winter Collection
                  </h1>
                  <p className="w-80 py-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="bg-[#0198E9] px-6 py-3 rounded-lg inline-block"
                  >
                    SHOP NOW
                  </a>
                </div>
              </SwiperSlide><SwiperSlide>
                <div
                  className="bg-cover py-30 pl-15 pr-5"
                  style={{ backgroundImage: `url(${Slid5})` }}
                >
                  <h1 className="text-[#0970CD] text-5xl/snug font-bold w-120">
                    Explore Men’s Winter Collection
                  </h1>
                  <p className="w-80 py-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="bg-[#0198E9] px-6 py-3 rounded-lg inline-block"
                  >
                    SHOP NOW
                  </a>
                </div>
              </SwiperSlide>

              

              
            </Swiper>
          </div>

          {/* RIGHT SIDE STATIC BANNERS */}
          <div className="space-y-6">
            <div
              className="bg-cover py-30"
              style={{ backgroundImage: `url(${Slid2})` }}
            />
            <div
              className="bg-cover py-30"
              style={{ backgroundImage: `url(${Slid3})` }}
            />
          </div>

        </div>
      </div>
    </Container>


  )
}

export default Slider
