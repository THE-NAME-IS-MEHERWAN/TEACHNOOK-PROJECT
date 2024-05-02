import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

const CheckoutForm = () => {
  const [error, setError] = React.useState(null);
  const [processing, setProcessing] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const { token, error } = await stripe.createToken();

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Handle form submission here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardElement">
        Credit or debit card
      </label>
      <CardElement id="cardElement" onChange={handleChange} />
      {error && <p>{error}</p>}
      <button
        type="submit"
        disabled={processing || disabled}
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;