import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
// import { NotFound } from '../components/notFound/NotFound'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route 
                        exact path='/login'
                        element={<LoginScreen />}
                    />
                    <Route 
                        exact path='/'
                        element={<CalendarScreen />}
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
