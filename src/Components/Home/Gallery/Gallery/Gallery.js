import React, { useEffect, useState } from 'react';
import './Gallery.css';
import GalleryCard from '../GalleryCard/GalleryCard';
import { Spinner } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Gallery = () => {

    const [galleryData, setGalleryData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5100/allGallery')
            .then(res => res.json())
            .then(data => setGalleryData(data))
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
        <section className="gallery my-4 py-4">
            <div className="container">
                <div className="gallery-test text-center">
                    
                    <animated.h3 style={props}>Our Gallery </animated.h3>
                </div>

                <div className="spinner text-center mt-4">
                    {
                        galleryData.length === 0 &&
                        <Spinner animation="border" variant="success" />
                    }
                </div>

                <div className="card-deck mt-5">
                    {
                        galleryData.map(gallery => <GalleryCard gallery={gallery} key={gallery._id}></GalleryCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;