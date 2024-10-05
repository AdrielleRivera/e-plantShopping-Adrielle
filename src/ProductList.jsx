import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({}); // Track added to cart plants

  // Sample array of plants
  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Fiddle Leaf Fig",
          image: "https://example.com/fiddleleaf.jpg",
          description: "A beautiful indoor plant with large leaves.",
          cost: "$25"
        },
        {
          name: "Snake Plant",
          image: "https://example.com/snakeplant.jpg",
          description: "A hardy plant that requires minimal care.",
          cost: "$15"
        }
      ]
    },
    {
      category: "Outdoor Plants",
      plants: [
        {
          name: "Rose Bush",
          image: "https://example.com/rosebush.jpg",
          description: "A flowering plant perfect for gardens.",
          cost: "$30"
        }
      ]
    }
  ];

  // Function to handle adding plants to the cart
  const handleAddToCart = (plant) => {
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px'
      }}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '1100px' }}>
          <div><a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}>Plants</a></div>
          <div><a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}><h1 className='cart'>Cart</h1></a></div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
