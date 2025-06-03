import React from "react";
import styles from "../Styles/About.module.css";
import myBulb from "../images/bulb.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>About Us</h1>

      <div className={styles.text}>
        <p>
          Welcome to our E-Commerce platform! We are committed to providing the best
          online shopping experience with a wide range of products at competitive prices.
        </p>
        <p>
          Our mission is to make shopping convenient, secure, and enjoyable for our
          customers. We value quality, customer satisfaction, and innovation.
        </p>
        <p>Thank you for choosing us for your shopping needs!</p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Our Vision</h2>
        <p className={styles.text}>
          We aim to be the leading online marketplace, connecting buyers and sellers
          from around the world with top-notch products and services.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Our Values</h2>
        <ul className={styles.list}>
          <li>Customer Satisfaction</li>
          <li>Quality Assurance</li>
          <li>Innovation and Excellence</li>
          <li>Integrity and Transparency</li>
        </ul>
      </div>

      <div>
        <h2 className={styles.subtitle}>Meet Our Team</h2>
        <p className={styles.text}>
          Our dedicated team of professionals works round the clock to ensure you have the
          best shopping experience. From our developers to customer support, everyone is
          passionate about delivering excellence.
        </p>
      </div>

      <img
        src={myBulb}
        className={styles.image}
        style={{ width: "14rem" }}
        alt="Light Bulb"
      />
    </div>
  );
};

export default AboutUs;
