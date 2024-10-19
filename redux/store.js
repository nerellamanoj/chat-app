// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './authSlice'; // Ensure this path is correct
import chatReducer from './chatSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),  // Adding logger middleware
});
