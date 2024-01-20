// src/features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper function to load state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('todosState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined;
  }
};

// Helper function to save state to local storage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosState', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};

const initialState = loadStateFromLocalStorage() || {
  todos: [],
  completedTodos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      saveStateToLocalStorage(state);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      saveStateToLocalStorage(state);
    },
    updateTodo: (state, action) => {
      const { id, title, desc, time, location, isCompleted } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.id = id;
        todoToUpdate.title = title;
        todoToUpdate.desc = desc;
        todoToUpdate.time = time;
        todoToUpdate.location = location;
        todoToUpdate.isCompleted = isCompleted;

        // Move completed todo to the completedTodos slice
        if (isCompleted) {
          state.completedTodos.push(todoToUpdate);
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }

        saveStateToLocalStorage(state);
      }
    },
    deleteCompleteTodo: (state, action) => {
      state.completedTodos = state.completedTodos.filter((todo) => todo.id !== action.payload.id);
      saveStateToLocalStorage(state);
    },
  },
});

// Automatically generated action creators
export const { addTodo, deleteTodo, updateTodo , deleteCompleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
