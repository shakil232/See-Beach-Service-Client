import React, { useContext, useEffect, useState } from 'react';
import './Order.css'
import { useForm } from "react-hook-form";
import ProcessPayment from '../PaymentArea/ProcessPayment/ProcessPayment';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


const Order = () => {
    const { BookId } = useParams();
    const [rideBooked, setRideBooked] = useState({});
    const [RideData, setRideData] = useState(null);
    const [user, setUser] = useContext(UserContext);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        setRideData(data);
    };

    const handlePaymentSuccess = paymentId => {
        
        const BookingDetails = {
            ...user,
            addRide:{...rideBooked},
            Ride:RideData,
            status:'Pending',
            paymentId,
            orderTime: new Date()
        };

        fetch('http://localhost:5100/bookedRide', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(BookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Please Your Booking Confirm...')
                }
            })
    };

    useEffect(() => {
        fetch(`http://localhost:5100/bookedService/${BookId}`)
            .then(res => res.json())
            .then(data => setRideBooked(data))
    }, []);

    return (
        <section className="order my-2 py-2">
            <div className="order-container">

                <div className=" ms-2 mb-3 order-head mt-3 text-center">
                    <h5 >Booked Ride </h5>
                </div>

                <div className=" mb-4  mt-3 text-center">
                    <p className="ride-name"> Ride Name- {rideBooked.ServiceName}</p>
                    <p className="ride-price"> Ride Price- ${rideBooked.ServicePrice}</p>
                </div>

                <div className="d-flex justify-content-evenly">
                    <div style={{display: RideData ? 'none' : 'block' }}  className="col-md-6 pl-5">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div>
                                <label className="ride-label "> Your Name </label> <br />
                                <input className="inputs form-control" type="text" name="name" defaultValue={user.name} {...register("name", { required: true })} />
                            </div>

                            <div>
                                <label className="ride-label "> Your Email </label> <br />
                                <input className="inputs form-control" type="email" name="email" defaultValue={user.email}   {...register("email", { required: true })} />
                            </div>

                            <div>
                                <label className="ride-label "> Ride Name </label> <br />
                                <input className="inputs form-control" type="text" name="ride" defaultValue={rideBooked.ServiceName} {...register("ride", { required: true })} />
                            </div>

                            <input className="review-btn mt-2" type="submit" value="Submit" />
                        </form>

                    </div>

                    <div style={{display: RideData ? 'block' : 'none' }}   className="col-md-4 mt-4">
                        <h5 className="text-center text-primary mb-4">Payment Here</h5>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Order;