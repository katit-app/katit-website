import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const PaymentCancelledPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Payemnt process was cancelled.</h1>
          <p>
            If you have any concerns feel free
            to email us at katit.store@gmail.com
          </p>
          <div className={styles.actionContainer}>
            {/* <ActionCard
              title={'Order Status'}
              icon={'delivery'}
              subtitle={'Check your order status'}
              link={'/account/orders'}
              size={'lg'}
            /> */}

            <ActionCard
              title={'Shop'}
              icon={'bag'}
              subtitle={'Continue Shopping'}
              link={'/shop'}
            />

            {/* <ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'Check out FAQs page'}
              link={'/faq'}
            /> */}

            <ActionCard
              title={'Contact Us'}
              icon={'phone'}
              subtitle={'Reach out to us'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PaymentCancelledPage;
