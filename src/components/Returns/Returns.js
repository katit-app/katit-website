import React from 'react';
import * as styles from './Returns.module.css';

const Returns = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Return details</h3>
        <p>
        You have 14 days from the date of receipt of your order to return any unwanted or unsuitable products. 
        If you want to return items you may do so through a shipping method of your choice (this option is carried out at your own cost and responsibility).
        </p>
        <p>
        Important! The products which you wish to return cannot bear any marks of usage and must have all the original tags attached.
        </p>
      </div>
    </div>
  );
};

export default Returns;
