import React, { useContext } from 'react';
import Styles from '../Styles/Cart.module.css';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  console.log('Cart Items in Cart.js:', cartItems); // Debug log

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={Styles.body}>
      <div className={Styles.cartContainer}>
        <h2 className={Styles.heading}>Your Cart</h2>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          <>
            <ul className={Styles.cartList}>
              {cartItems.map((item) => (
                <li key={item.id} className={Styles.cartItem}>
                  <img src={item.image} alt={item.title} className={Styles.itemImage} />
                  <div className={Styles.itemDetails}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Display Total Price */}
            <div className={Styles.totalContainer}>
              <h3>Total Price: ${totalPrice}</h3>
            </div>
          </>
        ) : (
          <p className={Styles.emptyMessage}>Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
