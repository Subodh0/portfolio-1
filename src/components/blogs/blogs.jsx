import React from 'react';
import './blogs.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Blogs = () => {
    return(
        <>
            <section id='blogs'>
                <h5>What blogs I have written</h5>
                <h2>My Blogs</h2>

                <div className="container experience__container certiContainer">
                <div className="certificate__frontend">
                    {/* <h3>Technical skills</h3> */}
                    <div className="certicontain__content">
                    <article className="experince__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4><a href="https://www.linkedin.com/posts/anita-sah07_filmproductioninsurance-insurance-typesoffilminsurance-activity-7096482907208220672-fH9M?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer">Film Production Insurance</a></h4>
                        <small className='text-light'>LinkedIn</small>
                        </div>
                    </article>
                    <article className="experince__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4><a href="https://www.linkedin.com/posts/anita-sah07_businessanalysis-businessanalyst-ba-activity-7099765374732144641-cbrB?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer">Importance of Business Analysis</a></h4>
                        <small className='text-light'>LinkedIn</small>
                        </div>
                    </article>
                    <article className="experince__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4><a href="https://www.linkedin.com/posts/anita-sah07_powerquery-datatransformation-datacleaning-activity-7105222836029427712-mlTH?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer">Power Query - The Data Transformation Tool</a></h4>
                        <small className='text-light'>LinkedIn</small>
                        </div>
                    </article>
                    <article className="experince__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4><a href='https://business-analytics-vs-analysis.blogspot.com/2023/09/business-analytics-vs-business-analysis.html' target='_blank' rel="noopener noreferrer">Business Analytics Vs Business Analysis</a></h4>
                        <small className='text-light'>Blogger</small>
                        </div>
                    </article>
                    {/* <article className="experince__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4><a href='https://drive.google.com/file/d/1wdUJsHRL0JiK4nchzrOjGbe9vQh7sxR1/view?usp=sharing' target='_blank'  rel="noopener noreferrer">Microsoft Excel - Excel from Beginner to Advanced</a></h4>
                        <small className='text-light'>Udemy</small>
                        </div>
                    </article> */}
                    </div>
                </div>
                </div>
                </section>
        </>
    )
}

export default Blogs;