import React, { useState, useEffect, useContext } from 'react';

import Icon from '../Icons/Icon';
import * as styles from './AdjustItem.module.css';

const AdjustItem = (props) => {
  const { isTransparent, amount, onChange = () => {} } = props;
  const [qty, setQty] = useState(amount);
  
  const handleOnChange = (e) => {
    const num = parseInt(e.target.value);
    setQty(num);
    onChange(num);
  };

  const onCng = (num) => {
    setQty(num);
    onChange(num);
  }

  useEffect(() => {
    setQty(amount);
    onChange(amount);
  }, [amount]);

  return (
    <div
      className={`${styles.root} ${
        isTransparent === true ? styles.transparent : ''
      }`}
    >
      <div
        className={styles.iconContainer}
        role={'presentation'}
        onClick={() => {
          if (qty <= 1) return;
          onCng(qty - 1);
        }}
      >
        <Icon symbol={'minus'}></Icon>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${isTransparent === true ? styles.transparentInput : ''}`}
          onChange={(e) => handleOnChange(e)}
          type={'number'}
          value={qty}
        ></input>
      </div>
      <div
        role={'presentation'}
        onClick={() => onCng(qty + 1)}
        className={styles.iconContainer}
      >
        <Icon symbol={'plus'}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;
