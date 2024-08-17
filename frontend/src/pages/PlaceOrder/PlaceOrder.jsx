import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name'required />
          <input type="text" placeholder='Last Name' required/>
        </div>
        <input type="email" placeholder='Email address' required />
        <input type="text" placeholder='Phone Number' required/>
        <input type="text" placeholder='Street/Locality' required/>
        <input type="text" placeholder='Landmark*'/>
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='  Zip Code' required/>
          <input type="text" placeholder='Country' />
        </div>
      </div>
      <div className="place-order-right">
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
        <button>PROCEED TO PAYMENT</button>
      </div>


      </div>
    </form>
  )
}

export default PlaceOrder
