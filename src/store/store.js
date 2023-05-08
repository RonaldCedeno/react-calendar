import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from '../reducers/uiReducer';
import { calendarReducer } from '../reducers/calendarReducer';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        calendar: calendarReducer
    }
})