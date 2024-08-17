import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menu, setMenu] = useState('home'); // to show current menu, here its "home" -> it shows underline under home
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='navbar'>
      <div className='navbar-top'>
        <span>Welcome to eMarket</span>
      </div>

      <div className='navbar-bottom'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
          <a href='#explore-more' onClick={() => setMenu('products')} className={menu === 'products' ? 'active' : ''}>Products</a>
          <Link to='/best-seller' onClick={() => setMenu('best-seller')} className={menu === 'best-seller' ? 'active' : ''}>Best Seller</Link>
          <Link to='/track-your-order' onClick={() => setMenu('track-your-order')} className={menu === 'track-your-order' ? 'active' : ''}>Track Your Order</Link>
        </ul>
        <div className='navbar-search'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img src={assets.search_icon} alt="" />
        </div>
        <div className='navbar-right'>
          <button onClick={() => setShowLogin(true)}>sign in</button>
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
