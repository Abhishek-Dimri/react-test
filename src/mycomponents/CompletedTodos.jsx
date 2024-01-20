// src/mycomponents/CompletedTodos.jsx
import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import "./completedTodos.css"
import { deleteCompleteTodo } from '../features/todos/todosSlice';

const CompletedTodos = () => {
  const dispatch = useDispatch();
  // Ensure completedTodos is initialized as an empty array
  const completedTodos = useSelector((state) => state.todos.completedTodos);


  const onRemoveCompletedTodo = (id) => {
    dispatch(deleteCompleteTodo({id}));
  };

  return (
    <div>
      <h4>Completed Todos</h4>
      {completedTodos.length === 0 ? (
        <p>No completed todos to display.</p>
      ) : (
        completedTodos.map((completedTodo) => (
          <div className="completed-todo-item-container" key={completedTodo.id}>
            {/* <p>{completedTodo.id}</p> */}
            <h4 className="completed-todo-item-title">{completedTodo.title}</h4>
            <p className="completed-todo-item-desc">{completedTodo.desc}</p>
            <p className="completed-todo-item-time">Time: {completedTodo.time}</p>
            <p className="completed-todo-item-location">Location: {completedTodo.location}</p>
            <button className="btn btn-sm delete-btn" onClick={() => onRemoveCompletedTodo(completedTodo.id)}> Remove </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default CompletedTodos;
