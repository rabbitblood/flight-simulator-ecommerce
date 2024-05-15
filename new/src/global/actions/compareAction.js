import {addToCompare, removeCompare} from "@/global/slices/compareSlice";

export const addToCompareAction = (payload) => (dispatch) => {
    dispatch(addToCompare(payload));
}


export const removeCompareAction = (payload) => (dispatch) => {
    dispatch(removeCompare(payload));
}
