import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/ChatContext';


const ProtectedRoute = ({children,...res}) => {
    const {user} = useAuth();
  
    const location = useLocation();
    return user?  children : <Navigate to='/login'  state={{path:location.pathname}}/>
    
  
}

export default ProtectedRoute