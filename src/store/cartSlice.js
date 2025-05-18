
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => { // action.payload should contain the item to be added
            // Check if the item is already in the cart
            const ItemInCart = state.items.find(item => item.id === action.payload.id);
            if (ItemInCart) {
                ItemInCart.quantity += 1;
            } else {
                const itemWithQuantity = { ...action.payload, quantity: 1 };
                state.items.push(itemWithQuantity);
            }
        },
        removeItem: (state, action) => { // action.payload should contain the item to be removed
            // Check if the item is in the cart
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;