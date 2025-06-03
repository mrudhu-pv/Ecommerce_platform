import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from '../Styles/ProductDetails.module.css'; 

function ProductDetails() {
    // Retrieve productId from URL params
    const { productId } = useParams();
    
    // State to store product details
    const [product, setProduct] = useState(null);

    // Fetch product details from API when productId changes
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product details:", error));
    }, [productId]);

    // Display loading message while the product is being fetched
    if (!product) {
        return <div className={Styles.loading}>Loading...</div>;
    }

    return (
        <div className={Styles.body}>
            <div className={Styles.productContainer}>
                <div className={Styles.card}>
                    {/* Product Image */}
                    <img src={product.image} alt={product.title} className={Styles.image} />

                    {/* Product Title */}
                    <h2 className={Styles.title}>{product.title}</h2>

                    {/* Product Description */}
                    <p className={Styles.description}>{product.description}</p>

                    {/* Product Price */}
                    <p className={Styles.price}>${product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
