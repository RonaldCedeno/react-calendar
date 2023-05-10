import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
// import { NotFound } from '../components/notFound/NotFound';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) { 
        return (<h5>Espere...</h5>);
    }
    
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route 
                        exact path='/login'
                        element={<PublicRoute isAuthenticated={!!uid} />}
                    />
                    <Route 
                        exact path='/'
                        element={<PrivateRoute isAuthenticated={!!uid} />}
                    />
                    <Route 
                        path='*'
                        // element={<NotFound />}
                        element={<Navigate to={'/'}/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
