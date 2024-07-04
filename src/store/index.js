import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/product.js"

const store = configureStore({
  reducer: {
    products: productReducer
  }
})

export default store;