import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items : [],
    completedItems: []
  },
  reducers: {

    
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) =>{
      state.items = state.items.filter(x=>{return( x.id != action.payload.id)})
    },
    completeItem: (state, action) =>{
      state.completedItems = [...state.completedItems, action.payload];      
      state.items = state.items.filter(x=>{return( x.id != action.payload.id)})      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, completeItem, incrimentId } = todoSlice.actions

export const getToDoItems = (state)=> state.todo.items
export const getCompletedItems = (state)=> state.todo.completedItems

export default todoSlice.reducer