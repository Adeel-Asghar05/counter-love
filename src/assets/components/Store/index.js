import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterslice =createSlice({
  name: "counter",
  initialState :{
    counterval :0,
    privacy : false,
  },
  reducers:{
    increment: (state)=>{
      state.counterval++
        state.privacy= state.counterval === 2405 ? true : state.privacy
          },
    decrement: (state)=>{
      state.counterval--;
        state.privacy= state.counterval=== 2405 ? true : state.privacy
          },
    incrementbyamount: (state, action)=>{
      state.counterval+= Number(action.payload.inputValue)
        state.privacy=state.counterval=== 2405 ? true : state.privacy
        },
    decrementbyamount: (state ,action)=>{
      state.counterval-= Number(action.payload.inputValue)
        state.privacy= state.counterval === 2405 ? true : state.privacy
    },
  },
})
const counterStore = configureStore(
  {reducer:{
    counter : counterslice.reducer,
  }}
);

export const counterActions = counterslice.actions;

export default counterStore;
