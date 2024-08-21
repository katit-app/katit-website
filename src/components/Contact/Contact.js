import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>HOW TO CONTACT US</h4>
        <p>
          You can send us an e-mail to katit.store@gmail.com or write us a message on our instagram account @katit.store
        </p>
        <p>
          You must describe the problem you have had with the order (size, damaged product...) and tell us your name and order number.
        </p>
        <p>Our solutions:</p>
        <ol>
          <li>
            <p>Responsibility of KATIT</p>
            <ul>
              <li>
                If our company is responsible for the issue, we will allow a return to our warehouse for a refund or exchange.
              </li>
              <li>
                Upon receipt of the item, we will either fully refund the original price of the product or send you a free replacement product at no additional cost. This solution is only applicable when KATIT is responsible for shipping the incorrect item or size.
              </li>
            </ul>
          </li>
          <li>
            <p>Responsibility of the client</p>
            <ul>
              <li>
                Incorrect order (item size):
                <p>
                  If the customer has ordered an incorrect item or size, we may also allow a return. In this case, the customer will be responsible for shipping costs in both directions (to and from our warehouse) for an exchange. <u>No shipping costs are refundable.</u>
                </p>
              </li>
              <li>
                Unwanted item:
                <p>
                  If you decide that you no longer want the item or simply want to exchange it, you can inform us within 15 days from the date of receipt of the product. In this case the product must be sent back to our warehouse. Once we receive the product and check that it is in good condition we will proceed to make the refund.
                </p>
              </li>
              <li>
                Order Cancellation Policy:
                <p>
                  If you wish to cancel your order before it has been shipped, please contact us as soon as possible. We will make every effort to process your cancellation. However, if the order has already been processed for shipping, please note that shipping costs are non-refundable.
                </p>
              </li>
              <li>
                Refund:
                <p>
                  Once your return is received and inspected, we will send an email to notify you that we have received your return. 
                </p>
                <p>
                  If the refund is approved, then it will be processed and a credit will be automatically applied to your credit card or original method of payment. This may take up to 10 business days.
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className={styles.section}>
        <h4>ADDITIONAL NOTES ON WARRANTY</h4>
        <p>*All returns must first be approved by our customer service team. </p>
        <br/>
        <p>
          *All returned items must be in perfect condition, unworn, unwashed and must retain all original tags and packaging.
        </p>
        <br/>
        <p>
          *No shipping costs will be refunded for the return of the item (unless it is the responsibility of KATIT).
        </p>
        <br/>
        <p>Any questions please email us at katit.store@gmail.com</p>
      </div>

      {/* <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Phone Number'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
