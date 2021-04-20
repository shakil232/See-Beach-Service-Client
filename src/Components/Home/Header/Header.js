import React, { useState } from 'react';
import './Header.css'
import TopBanner from '../../../images/Top-Banner.jpg';
import { useSpring, animated } from 'react-spring';

const Header = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 500,
        config: { duration: 800 },
        onRest: () => set(!flip),
    })
    return (
        <main className=" header-container row mt-2 mb-3 d-flex align-items-center">

            <div className="col-md-6 offset-md-1 header-left">
                <img src={TopBanner} alt="chair" className="img-fluid" />
            </div>

            <div className="col-md-4 ml-2 header-right">
                <animated.h2 style={props}> Let's Go Dream Are <br /> Make True</animated.h2>
                <p className="header-right-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dignissimos rem itaque quibusdam aspernatur atque!</p>
                <br />
                <button className=" header-btn" > <a href="#services-container"> GET BOOKING</a> </button>
            </div>

        </main>
    );
};

export default Header;