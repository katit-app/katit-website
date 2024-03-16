import React, { useState, useEffect } from 'react';
import * as styles from './Shop.module.css';

// import Banner from '../components/Banner';
// import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../CardController';
import Container from '../Container';
import Chip from '../Chip';
import Icon from '../Icons/Icon';
// import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../ProductCardGrid';
import { generateMockProductData } from '../../helpers/mock';
// import Button from '../components/Button';
import Config from '../../config.json';

const Shop = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const initData = generateMockProductData(13);
  const [data, setData] = useState(initData);
  const [filtersState, setFilterState] = useState(Config.filters);

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  const closeFilter = (filters) => {
    setFilterState(filters);
    let colors = [];
    filters[0].items.forEach(item => {
      if(item.value) {
        colors.push(item.name);
      }
    });
    let sizes = [];
    filters[1].items.forEach(item => {
      if(item.value) {
        sizes.push(item.name);
      }
    });
    if(colors.length > 0) {
      const newData = [];
      initData.forEach(x => {
        if(x.colorOptions.some(c => colors.includes(c.title))) {
          newData.push(x);
        }
      })
      setData(newData);
    }
    if(sizes.length > 0) {
      setData(initData.filter(x => x.sizeOptions.some(c => sizes.includes(c))));
    }
    if(colors.length === 0 && sizes.length === 0) {
      setData(initData);
    }
    setShowFilter(false);
  };

  const removeFilter = (category, index) => {
    const filterStateCopy = [...filtersState];
    filterStateCopy[category].items[index].value = false;
    closeFilter(filterStateCopy);
  }

  return (
      <div className={styles.root}>
        {/* <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/shop', label: 'Shop' },
                { link: '/', label: 'Woman' },
                { label: 'Sweaters' },
              ]}
            />
          </div>
        </Container> */}
        {/* <Banner
          maxWidth={'650px'}
          name={`Woman's Sweaters`}
          subtitle={
            'Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'
          }
        /> */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            {/* <span className={styles.itemCount}>476 items</span> */}
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              {/* <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div> */}
            </div>
          </div>
          <CardController
            closeFilter={(filterState) => closeFilter(filterState)}
            visible={showFilter}
            filters={filtersState}
          />
          <div className={styles.chipsContainer}>
            {filtersState[0].items.map((x, index) =>  { return x.value ? (<Chip name={x.name} close={() => {removeFilter(0, index)}} />) : ''})}
            {filtersState[1].items.map((x, index) => { return x.value ? (<Chip name={x.name} close={() => {removeFilter(1, index)}} />) : ''})}
          </div>
          <div className={styles.productContainer}>
            {/* <span className={styles.mobileItemCount}>476 items</span> */}
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>
          <div className={styles.loadMoreContainer}>
            {/* <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button> */}
          </div>
        </Container>
      </div>
  );
};

export default Shop;
