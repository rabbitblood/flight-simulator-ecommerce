import {addToWishlist, removeWishlist} from "@/global/slices/wishlistSlice";

export const addToWishlistAction = (payload) => (dispatch) => {
    dispatch(addToWishlist(payload));
}

export const removeWishlistAction = (payload) => (dispatch) => {
    dispatch(removeWishlist(payload));
}
