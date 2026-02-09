import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from '../slices/productSlice.js';
import wishlistSliceReducer from '../slices/wishlistSlice.js';
import cartSliceReducer from '../slices/cartSlice.js'

const store=configureStore({
    reducer:{
         productReducer:productSliceReducer,
         wishlistReducer:wishlistSliceReducer,
         cartReducer:cartSliceReducer
    }
})

export default store