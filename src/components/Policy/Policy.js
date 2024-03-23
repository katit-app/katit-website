import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Privacy Policy</h3>
        <p>
          Our top priority is to protect information and respect your privacy as you use our Website 
          so we take care of appropriate security measures and your convenience of using our websites. 
          This Policy lays down the rules and scope of our processing of your data and your related rights and responsibilities.
        </p>
      </div>

      <div className={styles.section}>
        <h3>2. Info & cookies</h3>
        <p>
          At our website, we use cookies to enhance your browsing experience and 
          provide you with personalized content and services. Cookies are small text 
          files that are placed on your computer or mobile device when you visit a website. 
          They help the website remember your preferences, settings, and login information, 
          and provide you with a more seamless experience.
        </p>
        <p>
          We use several types of cookies on our website, including session cookies, persistent 
          cookies, and third-party cookies. Session cookies are temporary cookies that are 
          deleted when you close your browser, while persistent cookies remain on your device 
          for a set period of time. Third-party cookies are placed by a third-party service 
          provider, such as Google Analytics, to collect data about your browsing behavior and 
          provide analytics to help us improve our website.
        </p>
        <p>
          Our use of cookies and third-party scripts is in accordance with our Privacy Policy, 
          which outlines how we collect, use, and protect your personal information. We only 
          collect data that is necessary to provide you with the best possible user experience 
          and to improve our website's performance.
        </p>
      </div>
      <div className={styles.section}>
        <h3>3. Rights of data subjects</h3>
        <p>
          In connection with personal data processing, you have the right to:
        </p>
        <p>
          3.1 Delete your account on your own by requesting the account deletion procedure via email.
        </p>
        <p>
          3.2 Erase your data without giving the reason why; it may, as the case may be, result in the deletion of your account on the Website.
        </p>
        <p>
          3.3 Object to the processing of your data in whole or in part and for a specific purpose.
        </p>
        <p>
          3.4 Correct or rectify your personal data.
        </p>
        <p>
          3.5 Transfer your data to another entity. To this end, you may contact us through the contact form, 
          specifying the name and address of the entity to which we are to transfer your data and the scope of the data – 
          i.e. specify which information we are to transfer. The transfer will take place electronically once your request is confirmed. 
          This is necessary to guarantee the security of such data and to confirm that the request comes specifically from you
        </p>
        <p>
          3.6 Be informed about the scope of personal data processing.
        </p>
        <p>
          3.7 Lodge a complaint with a personal data supervisory authority; 
          in Poland this is the President of the Data Protection Office, address: Urząd Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
        </p>
      </div>
      <div className={styles.section}>
        <h3>4. Communications related to personal data</h3>
        <p>
        You can send us any notices or requests related to personal data using a channel of your choice:
        </p>
        <p>
          4.1 Email to: catherine.ekt@gmail.com.
        </p>
        <p>
          4.2 Phone call to: +48 516 290 866.
        </p>
      </div>
    </div>
  );
};

export default Policy;
