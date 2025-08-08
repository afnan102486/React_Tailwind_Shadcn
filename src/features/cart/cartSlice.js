import { createSlice } from '@reduxjs/toolkit';
import { showToast } from '../../utils/toast';


const getCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage", error);
    return [];
  }
};

const initialState = {
  items: getCartFromLocalStorage(),
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        showToast(`${action.payload.title} quantity increased`, 'success');
      } else {
        state.items.push({ ...product, quantity: 1 });
        showToast(`${action.payload.title} added to cart`, 'success');
      }
    },

    removeFromCart: (state, action) => {
  const id = action.payload;
  const item = state.items.find(item => item.id === id);
  if (item) {
    state.items = state.items.filter(item => item.id !== id);
    showToast(`${item.title} removed from cart`, 'warning');
  }
},

    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        showToast(`${item.title} quantity decreased to ${item.quantity}`, 'info');
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
        showToast(`${item.title} removed from cart`, 'warning');
      }
    },

    incrementQuantity: (state, action) => {
  const item = state.items.find(i => i.id === action.payload);
  if (item) {
    item.quantity += 1;
    showToast(`${item.title} quantity increased to ${item.quantity}`, 'info');
  }
},


    clearCart: (state) => {
      state.items = [];
      showToast('Cart cleared', 'error');
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity,   incrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
