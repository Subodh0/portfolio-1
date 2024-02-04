import React from 'react';
import './about.css';
import Me from '../../assets/about-me.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About-Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>PGDM</h5>
              <small>IT, Analytics & Research | Finance</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ completed projects</small>
            </article>
          </div>
          <p>Enthusiastic and self-motivated individual passionate about Business Analysis, equipped with data
              visualization, project management, business analysis, data analysis, and market research skills. Proficient in
              interpersonal communication, presentations, teamwork, and analytical abilities, with a goal of enhancing
              data-driven decision-making within the realm of Business Analysis</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
