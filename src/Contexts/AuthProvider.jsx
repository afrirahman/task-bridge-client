import React from 'react';
import { createContext, useState,useEffect} from 'react';
import {
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);


     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

    const authInfo ={
        user,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;