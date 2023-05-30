import React, { useContext } from 'react';
import { AuthContext } from '../Authencation/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    let location=useLocation()

    let {user,loading}=useContext(AuthContext)
    if (loading){
        return<progress className="progress w-56"></progress>
    }
    if (user?.email) {
       return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>

};

export default PrivateRoute;