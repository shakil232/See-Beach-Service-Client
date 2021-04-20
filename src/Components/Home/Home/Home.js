import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import './Home.css'
import Connected from '../Connected/Connected';
import Header from '../Header/Header';
import Servicess from '../ServicesArea/Servicess/Servicess';
import Testimonial from '../TestimonialArea/Testimonial/Testimonial';
import Gallery from '../Gallery/Gallery/Gallery';


const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Servicess/>
            <Gallery/>
            <Testimonial/>
            <Connected/>
            <Footer/>
        </div>
    );
};

export default Home;