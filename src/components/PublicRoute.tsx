import React, { FC, useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';

type Props = {
    children?: React.ReactNode;
}

const PublicRoute: FC<Props> = ({ children }) => {
    let { student, setStudent } = useContext(ContextLogin) as LoginContextType;
    return !student.id ? ( 
      <>
        {children} 
        <Outlet />
      </>
    ) : (
      <Navigate to="/" replace />
    );
  };

  export default PublicRoute;