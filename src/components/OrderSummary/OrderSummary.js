import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = ({subtotal, shipping}) => {
  const [coupon, setCoupon] = useState('');
  const [giftCard, setGiftCard] = useState('');

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
        <form action="/api/stripe" method="POST">
          <Button type="submit"
            onClick={() => navigate('/orderConfirm')}
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
