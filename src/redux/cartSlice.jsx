import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    wishList: [],
    priceFilter: 'all'
  },
  reducers: {
    addItemToCart: (state, action) => {
        const exists = state.cartItems.find(item => item.isbn13 === action.payload.isbn13);
        if (!exists) {
            state.cartItems.push(action.payload);
        }
    },
    removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.isbn13 !== action.payload);
    },
    toggleWishList: (state, action) => {
        const index = state.wishList.findIndex(item => item.isbn13 === action.payload.isbn13);
        if (index >= 0) {
            state.wishList.splice(index, 1);
        }
        else {
            state.wishList.push(action.payload)
        }
    },
    setPriceFilter: (state, action) => {
        state.priceFilter = action.payload;
    }
  }
})

export const { addItemToCart, removeItemFromCart, toggleWishList, setPriceFilter } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, item) => {
        const priceValue = parseFloat(item.price.replace('$', ''));
        return total + priceValue;
    }, 0).toFixed(2);
};
export const getWishList = state => state.cart.wishList;
export const getPriceFilter = state => state.cart.priceFilter;
export default cartSlice.reducer;