import { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/CartSlice';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

const store = configureStore({
  reducer: { cart: cartReducer }
});

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]); // Only for count display

  return (
    <Provider store={store}>
      <div>
        {/* Navbar */}
        <nav style={{
          background: '#2e7d32',
          color: 'white',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <h2>🌱 Paradise Nursery</h2>
          <div style={{ display: 'flex', gap: '25px' }}>
            <span onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>Home</span>
            <span onClick={() => setCurrentPage('about')} style={{ cursor: 'pointer' }}>About Us</span>
            <span onClick={() => setCurrentPage('plants')} style={{ cursor: 'pointer' }}>Plants</span>
            <span onClick={() => setCurrentPage('cart')} style={{ cursor: 'pointer', position: 'relative' }}>
              Cart 🛒
            </span>
          </div>
        </nav>

        {/* Pages */}
        {currentPage === 'home' && (
          <div className="landing">
            <div className="landing-content">
              <h1>Welcome to Paradise Nursery</h1>
              <p>Bring Nature Home</p>
              <button className="get-started" onClick={() => setCurrentPage('plants')}>
                Get Started
              </button>
            </div>
          </div>
        )}

        {currentPage === 'about' && <AboutUs />}

        {currentPage === 'plants' && <ProductList />}

        {currentPage === 'cart' && (
          <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1>Your Shopping Cart</h1>
            <CartContent setCurrentPage={setCurrentPage} />
          </div>
        )}
      </div>
    </Provider>
  );
}

function CartContent({ setCurrentPage }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p>Your cart is empty. <button onClick={() => setCurrentPage('plants')}>Continue Shopping</button></p>;
  }

  return (
    <>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      
      <div style={{ marginTop: '40px', textAlign: 'right' }}>
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
        <button onClick={() => alert('Checkout - Coming Soon!')} style={{ padding: '14px 40px', background: '#4caf50', color: 'white', border: 'none', marginRight: '15px' }}>
          Checkout
        </button>
        <button onClick={() => setCurrentPage('plants')} style={{ padding: '14px 30px' }}>
          Continue Shopping
        </button>
      </div>
    </>
  );
}

export default App;