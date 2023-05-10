import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from '../reducers/uiReducer';
import { calendarReducer } from '../reducers/calendarReducer';
import { authReducer } from '../reducers/authReducer';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        calendar: calendarReducer,
        auth: authReducer
    }
})