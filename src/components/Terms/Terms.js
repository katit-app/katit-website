import React from 'react';
import * as styles from './Terms.module.css';

const Terms = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. General rules of using the Reserved online shop</h3>
        <p>
        1.1. The online shop may be used only by persons who are at least 18 years old.
        </p>
        <p>
        1.2. Anyone under 18 may use the online shop only with the consent of their parents or legal guardians.
        </p>
        <p>
        1.3. Anyone who registers and shops in the online shop gives their personal data and agrees to their processing by LPP on the terms as defined in the Privacy Policy .
        </p>
        <p>
        1.4. To confirm the correctness of the data given during the registration in the online shop, the Customer receives an e-mail with a request to confirm their data.
        </p>
      </div>
      <div className={styles.section}>
        <h3>2. Order placement</h3>
        <p>
        2.1. Orders are accepted through www.katit.store.
        </p>
        <p>
        2.2.  The products in the online shop are specifically marked. The website includes information about the features of the products, their prices, materials of which they are made
        </p>
        <p>
        2.3.  While ordering a product, the Customer selects it in a manner specific for that product, defining in particular its size, colour, and, if necessary, providing other specific information and the quantity of the ordered products.  
        </p>
      </div>
      <div className={styles.section}>
        <h3>3. Availability of the ordered products</h3>
        <p>
        3.1. All the products offered in the online shop are in stock.
        </p>
        <p>
        3.2. In special cases, e.g. if many Customers order the same product simultaneously, the product may not be available. If this is the case, the Customer will be informed that the order cannot be processed.
        </p>
      </div>

    </div>
  );
};

export default Terms;
