import React, { useState } from 'react';
import * as styles from './ProductCardGrid.module.css';

import Drawer from '../Drawer';
import ProductCard from '../ProductCard';
import QuickView from '../QuickView';
import Slider from '../Slider';

const ProductCardGrid = (props) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { height, columns = 3, data, spacing, showSlider = false } = props;
  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const renderCards = () => {
    return data.map((product, index) => {
      return (
        <ProductCard
          key={index}
          height={height}
          price={product.price}
          imageAlt={product.alt}
          name={product.name}
          image={product.image}
          meta={product.meta}
          originalPrice={product.originalPrice}
          link={product.link}
          showQuickView={() => setQuickViewProduct(product)}
          description={product.description}
        />
      );
    });
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {data && renderCards()}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{data && renderCards()}</Slider>
        </div>
      )}

      <Drawer visible={!!quickViewProduct} close={() => setQuickViewProduct(null)}>
        {!!quickViewProduct && (<QuickView item={quickViewProduct} close={() => setQuickViewProduct(null)} />)}
      </Drawer>
    </div>
  );
};

export default ProductCardGrid;
