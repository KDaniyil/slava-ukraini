import { createSlice } from "@reduxjs/toolkit"

type thumbType = {
    [id:number]: boolean
}

export const initialState:thumbType = {}

export const thumbSlice = createSlice({
    name:"thumb",
    initialState,
    reducers:{
        addThumb: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        removeThumb: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    }
})
export const {addThumb, removeThumb} = thumbSlice.actions
export default thumbSlice.reducer