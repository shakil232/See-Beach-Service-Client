
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimplePaymentCard from './SimplePaymentCard';

const stripePromise = loadStripe('pk_test_51Ie1HJG1Qc9n7YCFzwC6rEa3UxuQ45UFsIpHXVfLvyosxOyhA0hnkcbY3wSePwUedbeAvln0eCjnxAd9LRtgOhZL000fiY1cUh');

const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimplePaymentCard handlePayment={handlePayment}></SimplePaymentCard>
                
            </Elements>
        </div>

    );
};

export default ProcessPayment;