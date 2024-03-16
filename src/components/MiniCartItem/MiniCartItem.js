import React, {useContext} from 'react';

import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';

import * as styles from './MiniCartItem.module.css';
import CartContext from '../../context/CartProvider';

const MiniCartItem = (props) => {
  const { image, alt, name, price, color, size, index, amount } = props;
  const { removeItem, editAmount } = useContext(CartContext);
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
        <img src={image} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={price} />
          </div>
          <span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>
            Size:
            <span className={styles.size}>{size}</span>
          </span>
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem index={index} amount={amount} onChange={onChange} />
        </div>
      </div>
      <div className={styles.closeContainer} onClick={() => removeItem(props)}>
        <RemoveItem />
      </div>
    </div>
  );
};

export default MiniCartItem;
