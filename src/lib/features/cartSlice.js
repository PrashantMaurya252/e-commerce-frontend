import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items : [],
    totalQuantity:0,
    totalPrice:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem = action.payload
            const existingItem = state.items.find((item)=>item.id === newItem.id)

            if(!existingItem){
                state.items.push({...newItem,quantity:1})
                state.totalQuantity++
            }else{
                existingItem.quantity++
            }

            state.totalPrice += newItem.price
        },
        removeItem:(state,action)=>{
            const id =action.payload
            const existingItem = state.items.find((item)=>item.id === id)

            if(existingItem.quantity === 1){
                state.items.filter((item)=>item.id !== id)
                state.totalQuantity--
            }else{
                existingItem.quantity--
            }
            state.totalPrice -= existingItem.price
        },
        clearCart:(state)=>{
            state.items = [];
            state.totalQuantity = 0
            state.totalPrice = 0
        }
    }
})


export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer



