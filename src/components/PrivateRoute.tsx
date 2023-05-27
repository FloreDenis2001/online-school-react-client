import React from 'react';
import {  Navigate, Route, RouteProps } from 'react-router-dom';

const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Navigate to={{pathname: '/'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute;