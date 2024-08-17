import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './component/Footer/Footer';
import LoginPopUp from './component/LoginPopUp/LoginPopUp';
import BestSeller from './pages/BestSeller/BestSeller'; // Import BestSeller component
import TrackYourOrder from './pages/TrackYourOrder/TrackYourOrder'; // Import TrackYourOrder component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <ToastContainer/>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/best-seller' element={<BestSeller />} /> {/* Add route for BestSeller */}
          <Route path='/track-your-order' element={<TrackYourOrder />} /> {/* Add route for TrackYourOrder */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
