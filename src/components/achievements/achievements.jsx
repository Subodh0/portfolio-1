import React from 'react';
import './achievements.css';
import IMG1 from '../../assets/NGO_Certificate.png';
import IMG2 from '../../assets/Appreciation_Certificate.PNG';

const data = [
  {
    id:1,
    image: IMG1,
    title: "Volunteering work at Chesire Homes India",
    view: "https://drive.google.com/file/d/1f305VyxpU06_03pxyXB1fCiglG8JHGy3/view?usp=sharing",
    demo: "#"
  },
  {
    id:2,
    image: IMG2,
    title: "Certificate of Appreciation for Outstanding Task Management",
    view: "https://drive.google.com/file/d/1iCwszxdBcARiADATtNrhHcEsLRHeLM5k/view?usp=sharing",
    demo: "#"
  }
]

const Achievements = () => {

  return (
    <section id='achievements'>
      <h5>My</h5>
      <h2>Achievements</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, View})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__itam-cta">
                  <>{
                    (github) ?
                    <a href={github} target='_blank'className='btn'>Github</a>
                    :
                    <a href={View} target='_blank'className='btn'>View</a>
                  }</>
                  {/* <a href={demo} target='_blank'className='btn btn-primary'>Live Demo</a> */}
                </div>
              </article> 
            )
          })
        } 
      </div>
    </section>
  )
}

export default Achievements;
