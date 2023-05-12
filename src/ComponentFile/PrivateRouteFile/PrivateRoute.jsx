import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../LoadingComponent/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        // return <p>loading...........</p>
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to={"/login"} replace ></Navigate>
    }
};

export default PrivateRoute;