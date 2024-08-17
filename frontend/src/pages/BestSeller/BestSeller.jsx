import React, { useContext } from 'react';
import './BestSeller.css';
import { food_list } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext'; // Import StoreContext for cart operations

const BestSeller = () => {
  const { addToCart } = useContext(StoreContext); // Destructure addToCart function from StoreContext

  const handleAddToCart = (foodItem) => {
    addToCart(foodItem); // Call addToCart function with the selected food item
    alert(`${foodItem.name} added to cart!`); // Optional: Provide feedback to the user
  };

  return (
    <div className='best-seller'>
      <h2>Best Sellers</h2>
      <div className='best-seller-items'>
      {food_list.slice(0, 10).map((item) => (
          <div key={item._id} className='best-seller-item'>
            <img src={item.image} alt={item.name} />
            <div className='best-seller-info'>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item._id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
