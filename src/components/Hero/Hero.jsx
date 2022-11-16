import React from 'react';
import './Hero.css';
import '../Divider/Divider'

const Hero = () => {
    return (
        <>
        <div className='hero'>
            <div className='image-wrapper'>
            <img src="./images/avataaars.svg"  alt="" />
            </div>
            <h1 className='text-white display-1 pt-3 fw-bolder'>START REACT</h1>
            <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-icon"><i class="fa-solid fa-star"></i></div>
                <div className="divider-line"></div>
            </div>
            <p className='text-white lead fw-bold'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </>
    );
}

export default Hero;
