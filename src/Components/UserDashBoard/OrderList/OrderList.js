import React, { useContext, useEffect, useState } from 'react';
import './OrderList.css';
import OrderListCard from '../OrderListCard/OrderListCard';
import { UserContext } from '../../../App';
import { Spinner } from 'react-bootstrap';

const OrderList = () => {
    const [user, setUser] = useContext(UserContext);
    const [userOrder, setUserOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5100/bookingByEmail?email=' + user.email)
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, [])

    return (
        <section className=" mt-2 pt-2">

            <div className=" orderList-text text-center">
                <h4> Book List </h4>
            </div>
            
            <div className="spinner text-center mt-4">
                {
                    userOrder.length === 0 &&
                    <Spinner  animation="border" variant="success" />
                }
            </div>

            <div className=" mt-4 pt-4">
                <div className="row">
                    {
                        userOrder.map(orders => <OrderListCard orders={orders} key={orders._id}></OrderListCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OrderList;