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
    name: "Dr. Ashvin M Gutti",
    desn : "Director - Academics & Operations | Sunstone Eduversity",
    review: `Anita is a humble professional with a high degree of maturity to quickly understand any problems & come out with workable solutions. Her high acumen and sense of "Get the Job done on time with Quality" is her true hallmark. A smart person with sharp analytical & oratory skills coupled with good patients & integrity makes her an ideal person to bank on.`
  },
  {
    avatar: AVTR2,
    name: "Dr. Lakshmi J V N",
    desn : "Assitant Professor | Sunstone Eduversity",
    review: 'It is with great pleasure that I write this testimonial for Anita. She has impressed me with her intellectual curiosity and the ability to think critically. She is not only adept at grasping complex concepts but also proficient in applying them to real-world scenarios. Her enthusiasm for learning is evident in her active participation in class and extracurricular activities. Her dedication to academic excellence and personal growth sets a commendable example for peers and reflects her strong commitment to success.'
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
          rev.map(({avatar, name, desn, review},index)=> {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <h6 className='client__desn'>{desn}</h6>
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
