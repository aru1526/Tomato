import React, { useState } from 'react';
import './TrackYourOrder.css';

const TrackYourOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackOrder = () => {
    // Placeholder for tracking order logic
    setOrderStatus({
      id: orderId,
      status: 'In Transit',
      estimatedDelivery: '2024-07-15'
    });
  };

  return (
    <div className='track-your-order'>
      <h2>Track Your Order</h2>
      <div className='track-order-form'>
        <input
          type='text'
          placeholder='Enter your order ID'
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button onClick={handleTrackOrder}>Track Order</button>
      </div>
      {orderStatus && (
        <div className='order-status'>
          <h3>Order ID: {orderStatus.id}</h3>
          <p>Status: {orderStatus.status}</p>
          <p>Estimated Delivery: {orderStatus.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
};

export default TrackYourOrder;
