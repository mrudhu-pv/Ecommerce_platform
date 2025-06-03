import React from "react";
import styles from '../Styles/Contact.module.css';

function ContactUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Us</h2>
      
      {/* Contact Form */}
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" className={styles.input} placeholder="Enter your name" required />
          </div>
          
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" className={styles.input} placeholder="Enter your email" required />
          </div>
          
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea className={styles.textarea} rows="4" placeholder="Type your message" required></textarea>
          </div>
          
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>

      {/* Contact Information Section (Commented-out for now) */}
      {/* 
      <div className={styles.infoContainer}>
        <h4>Contact Information</h4>
        <p><strong>Address:</strong> 123 E-Commerce St, New York, USA</p>
        <p><strong>Email:</strong> support@eshop.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      </div>
      */}

      {/* Google Maps Embed (Commented-out for now) */}
      {/* 
      <div className={styles.mapContainer}>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799140155!2d-74.25986721003406!3d40.69767006420515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAxJzI4LjgiTiA3NMKwMTUnMzMuMCJX!5e0!3m2!1sen!2sus!4v1642924202041!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      */}
    </div>
  );
}

export default ContactUs;
