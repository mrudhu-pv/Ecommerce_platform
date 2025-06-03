import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerColumns}>
        {/* About Section */}
        <div className={styles.footerColumn}>
          <h3>About</h3>
          <ul>
            <li><span>Contact Us</span></li>
            <li><span>About Us</span></li>
            <li><span>Careers</span></li>
            <li><span>Flipkart Stories</span></li>
            <li><span>Press</span></li>
            <li><span>Corporate Information</span></li>
          </ul>
        </div>

        {/* Group Companies */}
        <div className={styles.footerColumn}>
          <h3>Group Companies</h3>
          <ul>
            <li><span>Myntra</span></li>
            <li><span>Cleartrip</span></li>
            <li><span>Shopsy</span></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className={styles.footerColumn}>
          <h3>Help</h3>
          <ul>
            <li><span>Payments</span></li>
            <li><span>Shipping</span></li>
            <li><span>Cancellation & Returns</span></li>
            <li><span>FAQ</span></li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div className={styles.footerColumn}>
          <h3>Consumer Policy</h3>
          <ul>
            <li><span>Cancellation & Returns</span></li>
            <li><span>Terms Of Use</span></li>
            <li><span>Security</span></li>
            <li><span>Privacy</span></li>
            <li><span>Sitemap</span></li>
            <li><span>Grievance Redressal</span></li>
            <li><span>EPR Compliance</span></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerColumn}>
          <h3>Mail Us:</h3>
          <p>
            Flipkart Internet Private Limited,<br/>
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>
            Outer Ring Road, Devarabeesanahalli Village,<br/>
            Bengaluru, 560103, Karnataka, India
          </p>
         
        </div>

        {/* Registered Office */}
        <div className={styles.footerColumn}>
          <h3>Registered Office Address:</h3>
          <p>
            Flipkart Internet Private Limited,<br/>
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>
            Outer Ring Road, Devarabeesanahalli Village,<br/>
            Bengaluru, 560103, Karnataka, India<br/>
            CIN: U51109KA2012PTC066107<br/>
            Telephone: 044-45614700 / 044-67415800
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>
          © 2007-2024 Flipkart.com | <span>Become a Seller</span> | 
          <span>Advertise</span> | <span>Gift Cards</span> | 
          <span>Help Center</span>
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
