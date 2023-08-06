import { configureStore, combineReducers } from "@reduxjs/toolkit";
import eventsReducer from '../reducers/events';
import filterReducer from '../reducers/filter'

const rootReducer = combineReducers({ events: eventsReducer, filter: filterReducer});

// const rootReducer = combineReducers({ events: eventsReducer });

export const store = configureStore({
    reducer: rootReducer
  });
  
  export default store;