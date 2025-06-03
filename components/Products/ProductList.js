import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from '../Styles/ProductList.module.css';
import { CartContext } from '../Cart/CartContext'; // Adjust the path as needed

function ProductList({ searchTerm }) {
    const [products, setProducts] = useState([]);
    const { addItemToCart } = useContext(CartContext); // Use your context to get the function
    
    // Fetch products from API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Filter products based on the search term
    const filterProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={Styles.body}>
            <div className={Styles.productCardsContainer}>
                <div className={Styles.heading}>
                    <div className={Styles.grid}> 
                        {filterProducts.map((product) => (
                            <div key={product.id} className={Styles.card}>
                                <div className={Styles.hover}>
                                    <div className={Styles.title}>
                                        <div className={Styles.detail}>
                                            <div className={Styles.hovering}>
                                                <div className={Styles.category}>
                                                    <div className={Styles.image}>
                                                        {/* Product Image */}
                                                        <img src={product.image} width={200} alt={product.title} />
                                                        
                                                        {/* Product Title and Link */}
                                                        <NavLink to={`/products/${product.id}`} className={Styles.productTitle}>
                                                            {product.title}
                                                        </NavLink>

                                                        {/* Product Category */}
                                                        <h1 className={Styles.productCategory}>{product.category}</h1>

                                                        {/* Product Price */}
                                                        <h3 className={Styles.productPrice}>${product.price}</h3>

                                                        {/* Add to Cart Button */}
                                                        <button
                                                            className={Styles.button}
                                                            onClick={() => addItemToCart(product)}
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
