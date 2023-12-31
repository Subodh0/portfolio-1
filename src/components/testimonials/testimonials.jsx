import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const rev = [
  {
    avatar: AVTR1,
    name: "Client 1",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed harum recusandae dolorem quisquam illo pariatur consequatur veniam ducimus quibusdam fuga architecto eius molestias quia, eum voluptas asperiores, quo ipsam aliquam?'
  },
  {
    avatar: AVTR2,
    name: "Client 2",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed harum recusandae dolorem quisquam illo pariatur consequatur veniam ducimus quibusdam fuga architecto eius molestias quia, eum voluptas asperiores, quo ipsam aliquam?'
  },
  {
    avatar: AVTR3,
    name: "Client 3",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed harum recusandae dolorem quisquam illo pariatur consequatur veniam ducimus quibusdam fuga architecto eius molestias quia, eum voluptas asperiores, quo ipsam aliquam?'
  },
  {
    avatar: AVTR4,
    name: "Client 4",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed harum recusandae dolorem quisquam illo pariatur consequatur veniam ducimus quibusdam fuga architecto eius molestias quia, eum voluptas asperiores, quo ipsam aliquam?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
      >
        {
          rev.map(({avatar, name, review},index)=> {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
