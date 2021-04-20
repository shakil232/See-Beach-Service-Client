import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesDetails.css'

const ServicesDetails = (props) => {
    const { ServiceName, ServicePrice,ServiceDescription, ServiceUrl, _id } = props.service;

    const history = useHistory();

    const handleBooking = (id) => {
          const BookId = `/userDashboard/${id}`
          history.push(BookId)
    }

    return (
        <div className=" col-md-4 text-center services-container mt-2 mb-5 ">

            <img className="service-img" src={ServiceUrl} alt="service-images" />
            <h5 className="mt-2  service-name">{ServiceName}</h5>
            <p>${ServicePrice}</p>
            <small className="service-text mb-2">{ServiceDescription}</small>

            <div>
                <button onClick={()=>handleBooking(_id)} className="book-btn mt-2"> Booking Now </button>
            </div>

        </div>


    );
};

export default ServicesDetails;