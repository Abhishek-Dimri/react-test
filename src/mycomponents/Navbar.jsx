import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    
    const formattedDate = currentTime.toDateString();
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const todos = useSelector((state) => state.todos.todos);
    const completedTodos = useSelector((state) => state.todos.completedTodos);
    // Placeholder data (replace this with actual data from your app)
    const user = { name: 'John Doe', profileImage: '../logo.svg' };
    const tasks = {
        total: todos.length + completedTodos.length,
        pending: todos.length,
        completed: completedTodos.length,
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-info">
                <p>Total Tasks: {tasks.total}</p>
                <p>Pending: {tasks.pending}</p>
                <p>Completed: {tasks.completed}</p>
            </div>
            <div className='navbar-third'>
                <div className='navbar-date'>
                    <p>{formattedDate}</p>
                    <p>{currentTime.toLocaleTimeString()}</p>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li className="profile-container" onClick={toggleDropdown}>
                            <img className="profile-image" src={user.profileImage} alt="User Profile" />
                            {isDropdownOpen && (
                                <div className="dropdown">
                                    <ul>
                                        <li key="username" className='username'>Username: {user.name}</li>
                                        <li key="account"><Link to="/account">Account Details</Link></li>
                                        <li key="logout"><Link to="/logout">Logout</Link></li>
                                    </ul>
                                </div>

                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;