import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import counterslice from "./counterslice";

const counterStore = configureStore(
  {reducer:{
    counter : counterslice.reducer,
  }}
);


export default counterStore;
