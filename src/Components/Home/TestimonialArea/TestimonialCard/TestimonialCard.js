import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = (props) => {
    const { ReviewName, ReviewCompany, ReviewDescription } = props.Review;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{ReviewDescription}</p>
            </div>
            <div className="card-footer d-flex justify-content-evenly ">

                
                    <h6 className="text-primary">{ReviewName}</h6>
                    <small className="text-secondary">{ReviewCompany}</small>
                

            </div>
        </div>
    );
};

export default TestimonialCard;