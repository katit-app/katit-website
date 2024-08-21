import React from 'react';
import * as styles from './Returns.module.css';

const Returns = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Returns and Refunds</h3>
        <p>
          At KATIT, customer satisfaction is our top priority. Whatever problems you have, we are here to help and will always look for a solution that is satisfactory to everyone.
        </p>
        <p>
          All of our products go through quality control process before they are shipped to ensure that you receive the highest quality clothes. However, in the unlikely event that you receive a faulty or damaged item, we will take responsibility and offer you a return or exchange within 15 days of receiving your order.
        </p>
        <p>
          If you have received a defective or damaged item, the wrong size or the wrong product, contact us at our email katit.store@gmail.com we will be at your service and we will answer all your requests in less than 24 hours.
        </p>
        <br/>
        <p>
          Our return policy is 15 days, so if more than 15 days have passed from the date of receipt of the item unfortunately we will not be able to offer any refund or exchange.
        </p>
        <ol>
          <li>
            Free Returns: We offer free returns to most countries. You can check if your country is eligible for free returns by contacting us before placing your order.
          </li>
          <li>
            Buyer Responsibility: If your country isn't eligible for free returns, you're responsible for covering the return shipping costs. Additionally, any customs duties and taxes incurred during the return or shipping process are also responsibility of the client.
          </li>
          <li>
            Multiple Item Returns: If you order multiple items and decide to return all of them, a fee may be deducted from your total refund to cover the costs associated with processing your specific order.
          </li>
        </ol>
        <br/>
        <p>
          Please keep in mind that we are a small business when placing an order. It is important to order responsibly to avoid unnecessary extra costs.
        </p>
      </div>
    </div>
  );
};

export default Returns;
