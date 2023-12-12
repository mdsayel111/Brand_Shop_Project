import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const {user} = useContext(AuthContext)
  console.log(clientSecret);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://brand-shop-server-lime.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const {paymentIntent} = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.email,
          },
        },
      })
      console.log(paymentIntent);

      // if(confirmError){
      //   console.log(confirmError);
      // }else{
      //   console.log(paymentIntent);
      // }
  };

  return (
    <div className="w-96">
      <form onSubmit={handleSubmit}>
        <div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "red",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button className="btn bg-primary" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};
export default CheckoutForm;
