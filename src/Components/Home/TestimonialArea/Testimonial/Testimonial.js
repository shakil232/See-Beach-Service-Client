import React, { useEffect, useState } from 'react';
import './Testimonial.css'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { Spinner } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Testimonial = () => {

    const [Reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5100/reviewDisplay')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

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
        <section className="testimonials my-4 py-4">
            <div className="container">
                <div className="header-test text-center">
                    <h5>Testimonial</h5>
                    <animated.h3 style={props}>Riders Feedback</animated.h3>
                </div>


                <div className="spinner text-center mt-4">
                    {
                        Reviews.length === 0 &&
                        <Spinner animation="border" variant="success" />
                    }
                </div>

                <div className="card-deck mt-5">
                    {
                        Reviews.map(Review => <TestimonialCard Review={Review} key={Review._id}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;