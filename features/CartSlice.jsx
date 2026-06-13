import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. يجب أن يكون الاسم addItem
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // 2. يجب أن يكون الاسم removeItem الحذف يعتمد على الـ name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // 3. يجب أن يكون الاسم updateQuantity لتحديث الكمية مباشرة
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// تصدير الأكوام بالأسماء المطلوبة حرفياً
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;