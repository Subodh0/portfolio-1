import React from 'react';
import './services.css';
// import {BiCheck} from 'react-icons/bi';
import {BsPatchCheckFill} from 'react-icons/bs' 

const Services = () => {
  return (
    <section id='services'>
      <h5>My Experience</h5>
      <h2>Internships</h2>

      <div className="container service__container">
        <div className="service__frontend">
          <h3>Marketing Internship</h3>
          <div className="service__content">
            <article className="service__details">
              <BsPatchCheckFill className="service__details-icon" />
              <div>
                <h4>SSVM Health Private Limited (brand "Evenly") </h4>
                <small className='text-light'><p className="para">Key responsibilities:</p>
                <ul>
                  <li className="ex__list">Conducted market research and competitor analysis, resulting in a 15% increase in informed decision making for strategic initiatives</li>
                  <li className="ex__list">Cultivated partnerships with businesses and influencers, implementing offline marketing strategies and
                  visually appealing materials that contributed to a 20% boost in brand visibility</li>
                  <li className="ex__list">Enhanced online presence by creating engaging social media content, contributing to website design, and
                  producing informative videos, leading to a 25% improvement in audience engagement</li></ul>
                  </small>
                  <a href="https://drive.google.com/file/d/1IC3re8xUaDRS5afGG4DfEJoJboWuHfbn/view?usp=sharing" className='btn btn-primary buttonCerti'>Certificate</a>
              </div>
            </article>
          </div>
        </div>
        <div className="service__backend">
        <h3>Social Media Marketing Internship</h3>
          <div className="service__content">
            <article className="experince__details">
              <BsPatchCheckFill className="service__details-icon" />
              <div>
                <h4>Anar B2B Business Community App</h4>
                <small className='text-light'><p className="para">Key responsibilities:</p>
                <ul>
                  <li className="ex__list">Onboarded 403 businesses, streamlining the process and improving efficiency by 20%</li>
                  <li className="ex__list">Supervised and mentored a team of 9 Social Media Marketing interns, conducting daily meetings, and
                                            guiding on customer acquisition strategies, resulting in a 15% increase in intern productivity</li>
                  <li className="ex__list">Monitored and enhanced intern team performance, achieving a 10% boost in overall efficiency</li></ul>
                  </small>
                  <a href="https://drive.google.com/file/d/1PMjK3Nk4wzIWriCyTuKhp1ekYbneE5c0/view?usp=sharing" className='btn btn-primary buttonCerti'>Certificate</a>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
