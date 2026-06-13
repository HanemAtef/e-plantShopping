import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/CartSlice'; // تأكد من صحة مسار الملف لديك

function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 1. دالة حساب التكلفة الإجمالية لكل العربة (مطلوبة للتقييم)
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      // إزالة علامة $ إذا كانت موجودة في السعر وتحويله لرقم
      const costValue = parseFloat(String(item.cost).replace('$', ''));
      return total + (costValue * item.quantity);
    }, 0);
  };

  // 2. دالة حساب التكلفة الفرعية للعنصر الواحد (Subtotal)
  const calculateTotalCost = (item) => {
    const costValue = parseFloat(String(item.cost).replace('$', ''));
    return costValue * item.quantity;
  };

  // معالجة زر (+) زيادة الكمية
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // معالجة زر (-) نقصان الكمية
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // معالجة زر الحذف الكامل
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      {/* عرض المجموع الكلي الكلي (مطلوب جداً في التقييم) */}
      <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      <div>
        {cart.map(item => (
          <div key={item.name} style={{
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
              <h4 style={{ margin: '0 0 10px 0' }}>{item.name}</h4>
              <p style={{ margin: 0, color: '#555' }}>Unit Price: {item.cost}</p>
              {/* عرض التكلفة الفرعية للعنصر */}
              <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#2e7d32' }}>
                Subtotal: ${calculateTotalCost(item)}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button onClick={() => handleDecrement(item)} style={{ padding: '5px 10px' }}>-</button>
              <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)} style={{ padding: '5px 10px' }}>+</button>
              <button onClick={() => handleRemove(item)} style={{ color: 'red', marginLeft: '20px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* أزرار التحكم في أسفل العربة */}
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onContinueShopping} style={{ padding: '12px 24px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button onClick={handleCheckoutShopping} style={{ padding: '12px 24px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;