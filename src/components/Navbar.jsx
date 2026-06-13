import { useState } from 'react';

function Navbar({ cartCount, setView, setSearchTerm, setCategory }) {
  return (
    <header>
      <nav>
        <div className="logo">🌱 Paradise Nursery</div>
        <ul className="nav-links">
          <li><span onClick={() => setView('shop')}>Shop</span></li>
          <li><span onClick={() => setView('cart')}>Cart</span></li>
        </ul>
        <div className="cart-icon" onClick={() => setView('cart')} style={{ fontSize: '1.6rem', cursor: 'pointer', position: 'relative' }}>
          🛒
          {cartCount > 0 && <span className="cart-count" style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ff5722', color: 'white', borderRadius: '50%', width: '20px', height: '20px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;