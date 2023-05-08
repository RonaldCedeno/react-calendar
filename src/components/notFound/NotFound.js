import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {

    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    }

    return (
        <div className='py-5 bg-secondary'>
            <h1 className='display-3 text-center'>
                404 Not Found
            </h1>
            <p className='lead text-center'>
                The page you are looking for does not exist.
            </p>
            <div className="text-center">
                <button 
                    className='btn btn-primary'
                    onClick={handleBackHome}
                >
                    Go back to home
                </button>
            </div>
        </div>
    )
}
