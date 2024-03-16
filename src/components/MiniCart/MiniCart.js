import { Link, navigate } from 'gatsby';
import React, { useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';
import CartContext from '../../context/CartProvider';

const MiniCart = (props) => {
  // const sampleCartItem = {
  //   image: '/products/pdp1.jpeg',
  //   alt: '',
  //   name: 'Lambswool Crew Neck Jumper',
  //   price: 220,
  //   color: 'Anthracite Melange',
  //   size: 'xs',
  // };

  const {state} = useContext(CartContext);
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {state?.map((item, index) =>(<MiniCartItem {...item} color={item.color.title} index={index} />))}
        {/* <MiniCartItem {...sampleCartItem} />
        <MiniCartItem {...sampleCartItem} />
        <MiniCartItem {...sampleCartItem} /> */}

      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          {/* <div className={styles.linkContainer}>
            <Link to={'/shop'}>continue shopping</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
