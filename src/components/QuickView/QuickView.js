import React, { useState, useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

//import { generateMockProductData } from '../../helpers/mock';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import * as styles from './QuickView.module.css';
import CartContext from '../../context/CartProvider';

const QuickView = (props) => {
  const { close, buttonTitle = 'Add to Bag', item } = props;
  const sampleProduct = item;// = generateMockProductData(1, 'sample')[0];
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const cartCtx = useContext(CartContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct?.color ? sampleProduct.colorOptions.find(c => c.title == sampleProduct?.color) : sampleProduct?.colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sampleProduct?.size || sampleProduct?.sizeOptions[0]);

  const handleAddToBag = () => {
    cartCtx.addItem({...item, size: activeSize, color: activeSwatch});
    close();
    showNotification(item);
  };

  return item && (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{sampleProduct.name}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={sampleProduct.price}></CurrencyFormatter>
          </div>
          <div className={styles.productImageContainer}>
            <img alt={sampleProduct.alt} src={sampleProduct.image}></img>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <SwatchList
            swatchList={sampleProduct.colorOptions}
            activeSwatch={activeSwatch}
            setActiveSwatch={setActiveSwatch}
          />
        </div>

        <div className={styles.sectionContainer}>
          <SizeList
            sizeList={sampleProduct.sizeOptions}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </div>

        <Button onClick={() => handleAddToBag()} fullWidth level={'primary'}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default QuickView;
