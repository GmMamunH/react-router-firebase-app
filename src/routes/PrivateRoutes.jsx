/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import Loading from "../components/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const [user, loading] = useAuthState(auth)
    if(loading) return <Loading/>
    if(!user){
        return <Navigate to="/login"/>
    }
    return children;
};

export default PrivateRoutes;
