import React, { useEffect, useState } from 'react';
import './Servicess.css';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import { Spinner } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Servicess = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5100/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

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

        <section id="services-container" className=" mt-2 pt-3">

            <div className="text-center service-text">
                <animated.h3 style={props}> Our Services </animated.h3>
                
            </div>


            <div className="spinner text-center mt-4">
                {
                    services.length === 0 &&
                    <Spinner animation="border" variant="success" />
                }
            </div>

            <div className=" mt-5 pt-4">
                <div className=" row">
                    {
                        services.map(service => <ServicesDetails service={service} key={service._id}></ServicesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Servicess;