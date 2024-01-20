import React from 'react';
import './App.css';
import Navbar from './mycomponents/Navbar';
import AddTodo from './mycomponents/AddTodo';
import Todos from './mycomponents/Todos';
import CompletedTodos from './mycomponents/CompletedTodos';
import About from './mycomponents/About';
import Contact from './mycomponents/Contact';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router basename='/react-test'>
        <div className="App"></div>
        <Navbar />
        <AddTodo />
        <Todos />
        <CompletedTodos />
        <About />
        <Contact />
      </Router>
    </Provider >
  );
}

export default App;
