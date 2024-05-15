import cartReducer from "@/global/slices/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import compareReducer from "@/global/slices/compareSlice";
import customerReducer from "@/global/slices/customerSlice";
import wishlistReducer from "@/global/slices/wishlistSlice";

export const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  wishlist: wishlistReducer,
  customer: customerReducer,
  compareList: compareReducer,
});
