import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        //state --> initial state
        //action --> type -> "cart/addToCart"
        //payload -> {id:1, title:"product", price:100}
        addToCart: (state, action) => {
            console.log("state", state)
            console.log("action", action)
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateCartItem: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },


    }


})
export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
