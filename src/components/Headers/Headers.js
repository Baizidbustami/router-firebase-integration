import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Headers.css'
const Headers = () => {
    const {user,hendelSignOut}=useFirebase();
    return (
        <div className='header'>
            <nav>
            <Link to ='/'>Home</Link>
            <Link to ='/register'>Register</Link>
            <Link to ='/products'>Products</Link>
            <Link to = '/orders'>Orders</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.email
                ?
                <button onClick={hendelSignOut}>Sign Out</button>
                :
                <Link to = '/login'>Login</Link>
            }
            
            </nav>
        </div>
    );
};

export default Headers;