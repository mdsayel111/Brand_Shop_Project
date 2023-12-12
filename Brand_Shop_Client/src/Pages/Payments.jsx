import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../Components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51OEV5zDsoBM3ry43gjBBY7QNcBJfRrNZrlI2QSR7iEqKi4ghfcMWpkNO6sbY3qEJn8ABnucpU9keroEdpuXquY3V00e7y3B82A");

const Payments = () => {

  


  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm/>
    </Elements>
  );
};

export default Payments;
