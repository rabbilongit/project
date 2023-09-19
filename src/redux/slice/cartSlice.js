import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
        additems:(state, action)=>{
            state.push(action.payload)
        },
        removeitems:(state, action)=>{
            // state.pop(action.payload)
            const idToRemove = action.payload.id;
       const indexToRemove = state.findIndex(item => item.id === idToRemove);
      
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
        }
    }
})

export default cartSlice.reducer
export const {additems} = cartSlice.actions
export const {removeitems} = cartSlice.actions