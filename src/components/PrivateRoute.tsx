import React, { FC, useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';

type Props = {
    children?: React.ReactNode;
}


const PrivateRoute: FC<Props> = ({ children }) => {
    let { student, setStudent } = useContext(ContextLogin) as LoginContextType;
    return student? ( 
      <>
        {children} 
        <Outlet /> 
      </>
    ) : (
      <Navigate to="/" replace /> 
    );
  };

export default PrivateRoute;