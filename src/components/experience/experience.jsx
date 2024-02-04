import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs' 

const Experience = () => {
  return (
    <>
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical skills</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MS Excel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Power BI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Project Management</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Data Visualization</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Business Analysis</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Soft skills</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Excellent orator/ Presentation skills</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Problem solving</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Active collaboration</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Expert Attention to Detail</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Outstanding resilience</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Creativity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Leardership</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Certifications</h2>

    <div className="container experience__container certiContainer">
      <div className="certificate__frontend">
        {/* <h3>Technical skills</h3> */}
        <div className="certicontain__content">
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4><a href="https://drive.google.com/file/d/1WpHmX4_vx-mtjoDubkhGurWJcGCUKvQc/view?usp=sharing" target="_blank" rel="noopener noreferrer">Google Foundation of Project Management</a></h4>
              <small className='text-light'>Coursera</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4><a href="https://drive.google.com/file/d/1oDqLcue7h64UqYH9WquUEcvxlLZwgfW-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Microsoft Power BI Course</a></h4>
              <small className='text-light'>Tutorialspoint</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4><a href="https://drive.google.com/file/d/1Z5DGaWFwDK7eM3UaldZg-tMT2rd7LRH-/view?usp=sharing" target="_blank" rel="noopener noreferrer">PwC Switzerland Power BI Job Simulation</a></h4>
              <small className='text-light'>Forage</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4><a href='https://drive.google.com/file/d/1c29Q8YQmvTQn6CmzxSDHtlwTSU3mTbX9/view?usp=sharing' target='_blank' rel="noopener noreferrer">TCS iON Career Edge - Young Professional</a></h4>
              <small className='text-light'>TCS iON</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4><a href='https://drive.google.com/file/d/1wdUJsHRL0JiK4nchzrOjGbe9vQh7sxR1/view?usp=sharing' target='_blank'  rel="noopener noreferrer">Microsoft Excel - Excel from Beginner to Advanced</a></h4>
              <small className='text-light'>Udemy</small>
            </div>
          </article>
        </div>
      </div>
      </div>
      </section>
      </>
  )
}

export default Experience;
