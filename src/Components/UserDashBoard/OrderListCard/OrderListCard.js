import React from 'react';
import './OrderListCard.css';


const OrderListCard = ({orders}) => {
    
    

    return (
        <div className=" col-md-4  text-center orderCard-container mt-2 mb-3 ">

            <div>
                <div className="d-flex  orderCard-top justify-content-between mt-3">
                    <img className="orderCard-img" src={orders.addRide?.ServiceUrl} alt="orderCard-images" />
                    <button className="status">{orders.status}</button>
                    
                </div>

                <div className="orderCard-bottom mt-3">
                    <p>{orders.addRide?.ServiceName}</p>
                    <small>{orders.addRide?.ServiceDescription}</small>
                </div>
            </div>

        </div>
    );
};

export default OrderListCard;