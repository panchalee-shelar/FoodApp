import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state, action)=>{
            // state.items.push(action.payload);
            const existingItem = state.items.find(
                (item)=> item.card.info.id === action.payload.card.info.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

        },
        removeItem : (state,action)=>{
            // state.items.pop();
            const existingItem = state.items.find(
                (item) => item.card.info.id === action.payload.card.info.id
            );
            if(existingItem){
                existingItem.quantity -= 1; 
                if (existingItem.quantity === 0){
                    state.items = state.items.filter(
                        (item) => item.card.info.id !== action.payload.card.info.id
                    )
                }
            }
        },
        clearItem : (state)=>{
            state.items.length = 0
        },
    }
});

export const {addItem,removeItem,clearItem} = cartSlice.actions
export default cartSlice.reducer