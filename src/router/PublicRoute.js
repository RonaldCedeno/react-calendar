import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

export const PublicRoute = ({isAuthenticated}) => {

    return (
        isAuthenticated? <Navigate to={"/"} /> : <LoginScreen />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}