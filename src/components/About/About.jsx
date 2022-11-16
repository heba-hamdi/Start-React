import React from 'react';

import './About.css'

const About = () => {
    return (
        <div className='section1'>
        <div className='container py-5'>
            <h2>About</h2>
            <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-icon"><i class="fa-solid fa-star"></i></div>
                <div className="divider-line"></div>
            </div>
            <div className="row w-50 m-auto pt-3">
                <div className="col-md-6">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
                <div className="col-md-6">
                You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
