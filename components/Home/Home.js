import React from "react";
import styles from "../Styles/Home.module.css";

const ProductSection = () => {
  // Product Data
  const products = [
    {
      img: "https://images.meesho.com/images/products/375220996/h1dwu_400.webp",
      title: "Shirts",
      discount: "60-90% Off",
      category: "Pretty Fshonista of Men",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/table-lamp/i/b/q/crystal-ball-night-light-2-4-inch-glass-ball-with-woodern-base-original-imah3fubhkua5ewt.jpeg?q=70",
      title: "Lamps",
      discount: "50-80% Off",
      category: "Home Decor",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
      title: "Smartphones",
      discount: "Up to 40% Off",
      category: "Mobile Phones",
    },
    {
      img: "https://images.meesho.com/images/products/375061729/0lurd_400.webp",
      title: "Shirts",
      discount: "30-70% Off",
      category: "Stylish Partywear of Men",
    },
    {
      img: "https://images.meesho.com/images/marketing/1690977773436_200.webp",
      title: "spectecals",
      discount: "30-70% Off",
      category: "Casual Unique Men",
    },
    {
      img: "https://images.meesho.com/images/products/382519791/yzcii_400.webp",
      title: "Churidar",
      discount: "30-70% Off",
      category: "Banita Voguish Kurits",
    },
    {
      img: "https://images.meesho.com/images/products/266882199/3xl12_400.webp",
      title: "Shoes",
      discount: "30-70% Off",
      category: "Essential Kids Boys...",
    },
    {
      img: "https://images.meesho.com/images/products/87179016/0gavu_400.webp",
      title: "Sarees",
      discount: "30-70% Off",
      category: "Trendy Vouguish Sarees",
    },
    {
      img: "https://images.meesho.com/images/products/310819176/7zvpb_400.webp",
      title: "Churidar Top",
      discount: "30-70% Off",
      category: "Kashvi Pretty Kurits",
    },
    {
      img: "https://images.meesho.com/images/products/328692587/9wrdz_400.webp",
      title: "churidar Top",
      discount: "30-70% Off",
      category: "Ardika Superior Women",
    },
    {
      img: "https://images.meesho.com/images/products/480709535/tkqlv_400.webp",
      title: "Smartphone",
      discount: "30-70% Off",
      category: "Mobile Phones",
    },
    {
      img: "https://images.meesho.com/images/products/235519281/yklry_400.webp",
      title: "Bangles",
      discount: "30-70% Off",
      category: "Princess colorful Bracel..",
    },

  ];

  // Carousel Images
  const carouselImages = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/511fd8168870bf6b.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8b7fd2cdec5cfbd2.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20",
  ];

  return (
    <div className="container mt-3">
      
      {/* === Carousel Section === */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {carouselImages.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* === Product Section === */}
      <div className={styles.productSection}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <img src={product.img} alt={product.title} className={styles.productImage} />
            <h5 className={styles.productTitle}>{product.title}</h5>
            <button className={styles.discountBtn}>{product.discount}</button>
            <h4 className={styles.productCategory}>{product.category}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
