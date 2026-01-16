import React from 'react';
import Footer from './Footer';
import Navbar2 from '../components/Navbar2';
import './Career.css';

const Career = () => {
    return (
        <div>
            <Navbar2 />
            <div className="career-container">
                <h1>Looking to Work at Mumbai's Top Interior Design Firm?</h1>
                <div className="career-content">
                    <div className="job-listings">
                        <div className="job-card">
                            <h2>1. Interior Designer</h2>
                            <p>Position Open – 1 nos</p>
                            <h3>General Duties of our Interior Designers:</h3>
                            <ul>
                                <li>Meeting with clients to understand and assess their requirements</li>
                                <li>Developing design concepts and preparing detailed design presentations</li>
                                <li>Selecting materials and finishes</li>
                                <li>Preparing detailed construction drawing sets</li>
                                <li>Preparing BOQ</li>
                                <li>Visiting the site to assess construction progress</li>
                            </ul>
                            <a href="#">Read More</a>
                        </div>
                        <div className="job-card">
                            <h2>2. AutoCAD Interior Draughtsman</h2>
                            <p>Position Open – 2 nos</p>
                            <h3>General Duties of our Draughtsman:</h3>
                            <ul>
                                <li>Preparing interior design drawings including floor plans, sections, elevations, furniture details, and general details</li>
                                <li>Preparing specifications based on technical knowledge, given information and/or sketch drawings</li>
                                <li>Producing fully coordinated and accurate GFC drawing sets and documentation packages</li>
                            </ul>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                    <div className="apply-form">
                        <h2>Apply Now</h2>
                        <form>
                            <label>Full Name<span>*</span></label>
                            <input type="text" placeholder="Enter your full name" required />

                            <label>Email ID<span>*</span></label>
                            <input type="email" placeholder="Enter your email" required />

                            <label>Mobile Number<span>*</span></label>
                            <input type="text" placeholder="Enter your mobile number" required />

                            <label>Upload Resume<span>*</span></label>
                            <input type="file" required />

                            <label>Message</label>
                            <textarea placeholder="Enter your message"></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Career;
