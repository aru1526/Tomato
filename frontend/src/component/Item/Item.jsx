import React, { useContext } from 'react';
import './Item.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import { toast } from 'react-toastify';

const Item = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    // Ensure that cartItems[id] exists before trying to access it
    const itemCount = cartItems[id] || 0;

    const handleAddToCart = (id) => {
        addToCart(id);
        toast.success(`${name} added to cart`);
    };

    return (
        <div className='item'>
            <div className="item-img-container">
                <img src={image} alt={name} className="item-image" />
                {!itemCount
                    ? <img className='add' onClick={() => handleAddToCart(id)} src={assets.add_icon_white} alt="add" />
                    : <div className='item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
                        <p>{itemCount}</p>
                        <img onClick={() => handleAddToCart(id)} src={assets.add_icon_green} alt="add" />
                    </div>
                }
            </div>
            <div className="item-info">
                <div className="item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className='item-desc'>{description}</p>
                <p className='item-price'>₹{price}</p>
            </div>
        </div>
    );
};

export default Item;
