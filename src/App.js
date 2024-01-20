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
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/"
              element={<div className="main-container">
                <div className="todo-section">
                  <AddTodo />
                  <Todos />
                </div>
                <div className="completed-todos-section">
                  <CompletedTodos />
                </div>
              </div>}
            ></Route>
            <Route exact path="/about"
            element = {<About />} >
            </Route>
            <Route exact path="/contact"
            element = {<Contact />} >
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
