

import { createStore } from "redux";

const INIT_VAL = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INIT_VAL, action) => {
  switch (action.type) {
    case 'AddOne':
      const newCounterAddOne = store.counter + 1;
      return {
        ...store,
        counter: newCounterAddOne,
        privacy: newCounterAddOne === 2405 ? true : store.privacy,
      };
    case 'SubstrectOne':
      const newCounterSubtractOne = store.counter - 1;
      return {
        ...store,
        counter: newCounterSubtractOne,
        privacy: newCounterSubtractOne === 2405 ? true : store.privacy,
      };
    case 'Add':
      const newCounterAdd = store.counter + Number(action.payload.number);
      return {
        ...store,
        counter: newCounterAdd,
        privacy: newCounterAdd === 2405 ? true : store.privacy,
      };
    case 'substrect':
      const newCounterSubtract = store.counter - Number(action.payload.number);
      return {
        ...store,
        counter: newCounterSubtract,
        privacy: newCounterSubtract === 2405 ? true : store.privacy,
      };
    default:
      return store;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
