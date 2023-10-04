import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return()=>{
            unSubscribe();
        }
    } ,[])

    const authInfo = {
        user, createUser, logOut, logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;