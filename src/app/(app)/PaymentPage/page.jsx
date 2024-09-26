'use client'

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    // Make a request to your backend to create the checkout session
    const response = await fetch('http://localhost:8000/api/v1/products/stripe-checkout-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          { name: 'Product 1', quantity: 1, price: 5000 }, // Example items
        ],
      }),
    });

    console.log(response,"stripe response")
    const session = await response.json();
    console.log(session,"session")
    
    const stripe = await stripePromise;
    console.log(stripePromise,"stripePromise")
    
    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error('Stripe error:', error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Checkout</h1>
      
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Loading...' : 'Proceed to Checkout'
      }</button>
    </div>
  );
};

export default Checkout;
