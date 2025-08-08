import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/products/productsApi';
import cartReducer from '../features/cart/cartSlice';

const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  saveCartToLocalStorage(state.cart.items);
});
