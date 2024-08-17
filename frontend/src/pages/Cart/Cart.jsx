import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import Item from '../../component/Item/Item';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div>
      <div className='items'>
      <div className="cart-items">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
     {food_list.map((item,index)=> {
      if(cartItems[item._id]>0){
        return(
          <div>
            <div className='cart-items-title cart-items-item'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{cartItems[item._id]*item.price}</p>
              <p onClick={()=> removeFromCart(item._id)} className='cross'>x</p>
            </div>
            <hr />
          </div>
        )
      }
     })}
    </div>
    <div className='cart-bottom'>

      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount()===0? 0:25}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>₹{getTotalCartAmount()===0? 0:getTotalCartAmount()+25}</p>

          </div>
        </div>
        <button onClick={()=> navigate('/order')}>CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>Apply Coupon</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder="Enter Coupon Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
    </div>
    
  );
}

export default Cart;
