import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './SimplePaymentCard.css'

const SimplePaymentCard = ({handlePayment}) => {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        console.log(event)
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.type);
            setPaymentError(null)
            handlePayment(paymentMethod.type)
        }
    };
    return (
        <div>
            <div className="mt-4 text-center">
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <button className="pay-btn mt-2" type="submit" disabled={!stripe}>
                        Payment
                    </button>
                </form>
            </div>
            <div>
                {
                    paymentError && <p className="text-danger"> {paymentError}</p>
                }
                {
                    paymentSuccess && <p className="text-primary"> Your Payment Was Successfully..</p>
                }
            </div>
        </div>
    );
};

export default SimplePaymentCard;