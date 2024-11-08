import React, { useState, useContext } from 'react';

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';
import QuickView from '../QuickView';

import * as styles from './CartItem.module.css';
import { navigate } from 'gatsby';
import CartContext from '../../context/CartProvider';

const CartItem = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const { image, alt, color, name, size, price, index, amount } = props;
  const {removeItem, editAmount} = useContext(CartContext);
  const onChange = (amount) =>  {
    editAmount(index, amount);
  };
  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate('/product/sample')}
      >
        <img src={image} alt={alt}></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
        <div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>
        <div
          className={styles.editContainer}
          role={'presentation'}
          onClick={() => setShowQuickView(true)}
        >
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem index={index} amount={amount} onChange={onChange} />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price} appendZero />
      </div>
      <div className={styles.removeContainer} onClick={() => removeItem(props)}>
        <RemoveItem />
      </div>
      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        {showQuickView && (<QuickView item={props} close={() => setShowQuickView(false)} />)}
      </Drawer>
    </div>
  );
};

export default CartItem;
