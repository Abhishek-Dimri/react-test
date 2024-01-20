// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    // Add other reducers here
  },
});

export default store;
