import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';



const PrivateRoutes = () => {
    let { student, setStudent } = useContext(ContextLogin) as LoginContextType;


  return (
    student.id!==0? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;