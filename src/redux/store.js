import { configureStore, combineReducers } from "@reduxjs/toolkit";
import eventsReducer from '../reducers/events'

const rootReducer = combineReducers({ events: eventsReducer});

export const store = configureStore({
    reducer: rootReducer
  });
  
  export default store;