import React, { useState, useContext, useEffect } from 'react';
import * as styles from './sample.module.css';
import { Link } from 'gatsby';


import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
//import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

// import { generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
// import ProductCardGrid from '../../components/ProductCardGrid';
//import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import CartContext from '../../context/CartProvider';

const ProductPage = ({pageContext}) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  //const sampleProduct = generateMockProductData(1, 'sample')[0];
  const cartCtx = useContext(CartContext);
  const {sampleProduct} = pageContext;
  const [qty, setQty] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct?.colorOptions[0]  || {color: "#ffffff", title: "White"}
  );
  const [activeSize, setActiveSize] = useState(sampleProduct?.sizeOptions[0] || "S");
  //const suggestions = generateMockProductData(4);
  
  const [gallery, setGallery] = useState(!sampleProduct?.gallery ? [{image: sampleProduct?.image}] : (Array.isArray(sampleProduct.gallery[0]) ? sampleProduct.gallery[0] : sampleProduct.gallery));
  const addToBag = () => {
    if(activeSwatch.soldout) return;
    cartCtx.addItem({...sampleProduct, size: activeSize, color: activeSwatch, amount: qty });
    showNotification(sampleProduct);
  };

  useEffect(() => {
    if(!sampleProduct.gallery || !Array.isArray(sampleProduct.gallery[0])) return;

    const idx = Math.max(sampleProduct?.colorOptions.findIndex(x => x.color === activeSwatch.color), 0);
    setGallery(sampleProduct.gallery[idx]);
  }, [activeSwatch]);

  return sampleProduct && (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { label: 'Shop', link: '/shop' },
              { label: `${sampleProduct.name}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={gallery} />
              {/* <div><span className={styles.vendor}>{sampleProduct.description}</span></div> */}
            </div>
            <div className={styles.details}>
              <h1>{sampleProduct.name}</h1>
              <span className={styles.vendor}> by Katit</span>
              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={sampleProduct.price} />
              </div>

              <div>
                <SwatchList
                  swatchList={sampleProduct.colorOptions}
                  activeSwatch={activeSwatch}
                  setActiveSwatch={setActiveSwatch}
                />
              </div>

              <div className={styles.sizeContainer}>
                <SizeList
                  sizeList={sampleProduct.sizeOptions}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              </div>

              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem amount={qty} onChange={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={addToBag}
                    fullWidth
                    level={'primary'}
                  >
                    { activeSwatch.soldout ? 'Sold out' : 'Add to Bag'}
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
                {/* <span>Product code: {sampleProduct.productCode}</span> */}
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'composition & care'}
                >
                  <p className={styles.information}>
                    {sampleProduct.materials}
                  </p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'delivery & returns'}
                >
                  <p className={styles.information}>
                    You can see our return rules <Link to="/support#returns">here.</Link>
                  </p>
                </Accordion>
                {/* <Accordion type={'plus'} customStyle={styles} title={'help'}>
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion> */}
              </div>
            </div>
          </div>
          {/* <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div> */}
        </Container>

        {/* <div className={styles.attributeContainer}>
          <Split
            image={'/cloth.png'}
            alt={'attribute description'}
            title={'Sustainability'}
            description={
              'We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.'
            }
            ctaText={'learn more'}
            cta={() => navigate('/blog')}
            bgColor={'var(--standard-light-grey)'}
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default ProductPage;
