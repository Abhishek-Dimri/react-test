import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { nanoid } from '@reduxjs/toolkit';
import "./addTodo.css"

const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const submit = (e) => {
        e.preventDefault();
        
        // Generating a unique ID using nanoid
        const id = nanoid();
        if(title === "" || desc === "" ){
            alert("Title or description can't be empty");
        }
        else{
        dispatch(addTodo({
            id, // Include the generated ID in the todo object
            title,
            desc,
            time,
            location,
        }));

        // Reset state after adding todo
        setTitle('');
        setDesc('');
        setTime('');
        setLocation('');
    }
    };

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Todo Time</label>
                    <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} className="form-control" id="time" />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Todo Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" id="location" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
