import {createSlice} from "@reduxjs/toolkit"

export const Cartslice= createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add:()=>{

        },
        remove:()=>{

        }
    }
})

export const {add,remove} = Cartslice.actions;
export default Cartslice.reducer;