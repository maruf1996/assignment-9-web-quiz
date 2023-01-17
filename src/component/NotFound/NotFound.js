import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='text-danger mb-4'>Oops!</h1>
            <h5>Something went wrong</h5>
            <div className="mt-5">
            <Link to='/'>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;