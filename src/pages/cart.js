import { Link } from 'gatsby';
import React, { useContext } from 'react';

import Brand from '../components/Brand';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';

import * as styles from './cart.module.css';
import CartContext from '../context/CartProvider';

const CartPage = (props) => {
  // const sampleCartItem = {
  //   image: '/products/pdp1.jpeg',
  //   alt: '',
  //   name: 'Lambswool Crew Neck Jumper',
  //   price: 220,
  //   color: 'Anthracite Melange',
  //   size: 'XS',
  // };
  const { state } = useContext(CartContext);
  const getTotal = () => {
    return state?.reduce((s, item) => s + item.price * item.amount, 0) || 0;
  };

  return (
    <div>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/shop'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Continue Shopping
                </span>
              </Link>
            </div>
            <Brand />
            <div className={styles.loginContainer}>
              <Link to={'/login'}>Login</Link>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <h3>My Bag</h3>
            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                {state?.map((item, index) => (<CartItem {...item} color={item.color.title} index={index} />))}
              </div>
              <OrderSummary subtotal={getTotal()} shipping={20} />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
