import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.PNG';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/Go green,go healthy4.jpg';
import IMG5 from '../../assets/portfolio5.PNG';
import IMG6 from '../../assets/portfolio6.PNG';
import IMG7 from '../../assets/portfolio7.png';

const data = [
  {
    id:1,
    image: IMG1,
    title: "HR Analytics Dashboard",
    github: "https://github.com/Anita-Sah/HR_Analytics_Dashboard",
    demo: "#"
  },
  {
    id:2,
    image: IMG2,
    title: "Sales Dashboard Creation",
    github: "https://github.com/Anita-Sah/Power_BI_Sales_Dashboard",
    demo: "#"
  },
  {
    id:3,
    image: IMG3,
    title: "Store Data Analysis and Dashboard Creation",
    github: "https://github.com/Anita-Sah/Vrinda_Store_Data_Analysis",
    demo: "#"
  },
  {
    id:4,
    image: IMG7,
    title: "Sales and Inventory Analysis Dashboard",
    github: "https://github.com/Anita-Sah/Sales_and_Inventory_Analysis_Dashboard",
    demo : "#"
  },
  {
    id:5,
    image: IMG4,
    title: "Go Green, Go Healthy Food Fest: Budget-Friendly Nutrition-Rich Initiative",
    View: "https://docs.google.com/document/d/1z25dYGvXoIgFQFSRxuNP90VRT9y74oq6/edit?usp=sharing&ouid=115532867938428525869&rtpof=true&sd=true",
    demo: "#"
  },
  {
    id:6,
    image: IMG5,
    title: "The PISM Timekeepers' E-Magazine",
    View: "https://drive.google.com/file/d/1h_L4Q_Cv126HeuAUKxy2PrNe9oes1dh8/view?usp=sharing",
    demo: "#"
  },
  {
    id:7,
    image: IMG6,
    title: "Scientific Research Paper Presentation Competition (BSR)",
    View: "https://docs.google.com/document/d/16jkELGfUoVHBnQp63HQq6oXKr_6rf_xP/edit?usp=sharing&ouid=115532867938428525869&rtpof=true&sd=true",
    demo: "#"
  }
]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
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

export default Portfolio;
