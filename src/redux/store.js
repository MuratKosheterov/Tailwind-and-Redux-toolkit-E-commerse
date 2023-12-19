import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import openCheckout from "./slices/openCheckout";
import openSlice from './slices/openSlice'

export const store  = configureStore({
    reducer: {
        cartReducer: cartSlice,
        openReducer: openSlice,
        checkoutReducer : openCheckout,
    }
})

export default store