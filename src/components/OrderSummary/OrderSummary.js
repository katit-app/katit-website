import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { loadStripe } from '@stripe/stripe-js';
import Button from '../Button';
import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';
const stripePromise = loadStripe("pk_test_51OvI4D032ruonfUmBz6Jki7mY6EQrbcJ8KEeODjJ490f7OVP99nWTEKhTxuAB9N9H4oYw1GftHocrpIhjn7EgpnX000vEpgpok");
const OrderSummary = ({subtotal, shipping}) => {
  const [coupon, setCoupon] = useState('');
  const [giftCard, setGiftCard] = useState('');

  const onSubmit = () => {
    fetch("/api/stripe", {
      method: "POST",
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (session) {
        return stripePromise.redirectToCheckout({ sessionId: session.id })
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };
  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>order summary</span>
        <div className={styles.calculationContainer}>
          <div className={styles.labelContainer}>
            <span>Subtotal</span>
            <span>
              <CurrencyFormatter amount={subtotal} appendZero />
            </span>
          </div>
          <div className={styles.labelContainer}>
            <span>Shipping</span>
            <span>
              <CurrencyFormatter amount={subtotal > 0 ?shipping: 0} appendZero />
            </span>
          </div>
          <div className={styles.labelContainer}>
            <span>Tax</span>
            <span>
              <CurrencyFormatter amount={0} appendZero />
            </span>
          </div>
        </div>
        {/* <div className={styles.couponContainer}>
          <span>Coupon Code</span>
          <FormInputField
            value={coupon}
            handleChange={(_, coupon) => setCoupon(coupon)}
            id={'couponInput'}
            icon={'arrow'}
          />
          <span>Gift Card</span>
          <FormInputField
            value={giftCard}
            handleChange={(_, giftCard) => setGiftCard(giftCard)}
            id={'couponInput'}
            icon={'arrow'}
          />
        </div> */}
        <div className={styles.totalContainer}>
          <span>Total: </span>
          <span>
            <CurrencyFormatter amount={subtotal + shipping} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <form>
          <Button
            onClick={onSubmit}
            fullWidth
            level={'primary'}
          >
            Checkout
          </Button>
        </form>
        
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>CONTINUE SHOPPING</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
