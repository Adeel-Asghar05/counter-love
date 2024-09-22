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
    export const counterActions = counterslice.actions;

export default counterslice;

