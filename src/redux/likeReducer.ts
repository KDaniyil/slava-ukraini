import { createSlice } from "@reduxjs/toolkit"

type likeType = {
    [id:number]: boolean
}

export const initialState: likeType = {
    1:true,
    2:true,
}
export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{},

})

export default likeSlice.reducer