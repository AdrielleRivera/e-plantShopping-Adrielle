import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);  // Access cart items

  const handleAddToCart = (product) => {
    dispatch(addItem(product));  // Dispatch the addItem action
  };

  return (
    <div>
      <h2>Product List</h2>
      {/* Assuming products array is available */}
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}

      {/* Display total quantity of items in the cart */}
      <p>Total Cart Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
    </div>
  );
};

export default ProductList;
