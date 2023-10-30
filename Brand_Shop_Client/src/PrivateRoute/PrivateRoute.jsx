import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const path = useLocation()

    return (
        <>
        {
            user ? children : <Navigate state={path.pathname}  to={"/signUp_or_signIn"}/>
        }
        </>
    );
};

export default PrivateRoute;