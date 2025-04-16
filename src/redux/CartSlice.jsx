// redux/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            // ✅ Make sure the item has a unique ID
            if (!newItem.id) {
                newItem.id = `${newItem.productId || newItem.name}-${Date.now()}`;
            }

            const existing = state.cart.find(item => item.id === newItem.id);
            if (existing) {
                existing.quantity += newItem.quantity || 1;
            } else {
                state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
            }
        },

        updateCartItem: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
        },

        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, updateCartItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
