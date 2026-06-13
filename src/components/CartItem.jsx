import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      padding: '20px',
      marginBottom: '15px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px' }} />

      <div style={{ flex: 1, marginLeft: '20px' }}>
        <h4>{item.name}</h4>
        <p>${item.price} × {item.quantity}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} style={{ color: 'red', marginLeft: '20px' }}>Delete</button>
      </div>
    </div>
  );
}

export default CartItem;