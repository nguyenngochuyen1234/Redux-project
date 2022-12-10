import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        itemList:[],
        totalQuantity:0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingitem = state.itemList.find((item)=>item.id===newItem.id)
            if(existingitem){
                existingitem.quantity++;
                existingitem.totalPrice += newItem.price
            }else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingitem = state.itemList.find((item)=>item.id===id)
            if(existingitem.quantity === 1){
                state.itemList = state.itemList.filter(item=>item.id!=id)
                state.totalQuantity = 0
            }else{
                existingitem.quantity--;
                state.totalQuantity--
                existingitem.totalPrice-= existingitem.price
            }
        },
        setShowCart (state) {
            state.showCart = true
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice