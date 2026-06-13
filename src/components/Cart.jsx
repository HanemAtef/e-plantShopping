import { useState } from 'react';
import CartItem from './CartItem';

function Cart({ cart, updateQuantity, removeFromCart, setView }) {
  const [showModal, setShowModal] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      // Clear cart after checkout
      // setCart([]); // Uncomment if you want to clear cart
    }, 2500);
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Your cart is empty 🌱</h2>
        <button onClick={() => setView('shop')} style={{ marginTop: '20px', padding: '14px 32px', fontSize: '1.1rem' }}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '25px' }}>🛒 Shopping Cart ({cart.length} items)</h2>
      
      {cart.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          updateQuantity={updateQuantity} 
          removeFromCart={removeFromCart} 
        />
      ))}

      <div style={{ marginTop: '30px', padding: '25px', background: 'white', borderRadius: '12px', textAlign: 'right' }}>
        <h3>Total: <span style={{ color: '#2e7d32', fontSize: '1.8rem' }}>${total.toFixed(2)}</span></h3>
        <button 
          onClick={handleCheckout}
          style={{ marginTop: '20px', padding: '16px 50px', background: '#4caf50', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1.2rem', cursor: 'pointer' }}
        >
          Proceed to Checkout
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>🎉 Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <p>We hope your new plants bring joy to your home!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;