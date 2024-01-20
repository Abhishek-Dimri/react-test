// src/mycomponents/Todos.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todos/todosSlice';
import "./todos.css"

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const onDelete = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const onEdit = (id) => {
        const editingTodo = todos.find((todo) => todo.id === id);
        setEditingTodo({
            ...editingTodo,
        });
    };

    const onSaveEdit = () => {
        if (editingTodo.title && editingTodo.desc && editingTodo.time && editingTodo.location) {
            dispatch(updateTodo({
                id: editingTodo.id,
                title: editingTodo.title,
                desc: editingTodo.desc,
                time: editingTodo.time,
                location: editingTodo.location,
                isCompleted: editingTodo.isCompleted,
            }));
            setEditingTodo(null);
        }
    };

    const onCancelEdit = () => {
        setEditingTodo(null);
    };

    const onDone = (id) => {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        if (todoToUpdate) {
            dispatch(updateTodo({
                ...todoToUpdate,
                isCompleted: true,
            }));
        }
    };

    const [editingTodo, setEditingTodo] = useState(null);
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {todos.length === 0 ? (
                "No Todos to display"
            ) : (
                todos.map((todo) => (
                    <div className="todo-item-container" key={todo.id}>
                        {editingTodo && editingTodo.id === todo.id ? (
                            <div>
                                <input type="text" value={editingTodo.title} onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value, })} />
                                <input type="text" value={editingTodo.desc} onChange={(e) => setEditingTodo({ ...editingTodo, desc: e.target.value, })} />
                                <input type="text" value={editingTodo.time} onChange={(e) => setEditingTodo({ ...editingTodo, time: e.target.value, })} />
                                <input type="text" value={editingTodo.location} onChange={(e) => setEditingTodo({ ...editingTodo, location: e.target.value, })} />
                                <button onClick={onSaveEdit}>Save</button>
                                <button onClick={onCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <div className='tudu'>
                                    <p className="todo-item-time">Time: {todo.time}</p>
                                    <p className="todo-item-location">Location: {todo.location}</p>
                                </div>
                                <h4 className="todo-item-title">{todo.title}</h4>
                                <p className="todo-item-desc">{todo.desc}</p>
                                <button className="btn btn-sm delete-btn" onClick={() => onDone(todo.id)}> Done </button>
                                <button className="btn btn-sm delete-btn" onClick={() => onEdit(todo.id)}> Edit </button>
                                <button className="btn btn-sm delete-btn" onClick={() => onDelete(todo.id)}> Delete </button>
                                <hr />
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

const myStyle = {
    // minHeight: "70vh",
};

export default Todos;