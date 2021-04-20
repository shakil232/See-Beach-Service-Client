import React from 'react';
import './GalleryCard.css'

const GalleryCard = (props) => {

    const { GalleryUrl } = props.gallery ;

    return (
        <div className="col-md-3">
            
            <div className="mb-5">
                <img className="mx-3" src={GalleryUrl} alt="" width="200" />
                
            </div>
        </div>
    );
};

export default GalleryCard;