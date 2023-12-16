import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
