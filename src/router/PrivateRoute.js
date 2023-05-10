import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const PrivateRoute = ({isAuthenticated}) => {

    return (
        isAuthenticated? <CalendarScreen /> : <Navigate to={"/login"} />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}