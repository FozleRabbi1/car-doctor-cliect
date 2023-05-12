import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }





    const userInfo = {
        user: user,
        createUser,
        logIn,
        logOut,
        loading : loading,

    }




    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;