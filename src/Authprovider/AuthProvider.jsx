import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


 export const AuthContext=createContext(null)
 const auth=getAuth(app)

 const googleProvider =new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(null)


     //Register
    const createUser =(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }

    //Login
    const SignIn =(email,password) =>{
          return signInWithEmailAndPassword(auth,email,password)
    } 

    //Login google
    const signInGoogle =() =>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect( () =>{
       const unscriber= onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('on auth state',currentUser)
        })
        return () =>{
           return unscriber()
        }
       
    },[])


    const authInfo={
        user,
        createUser,
        SignIn,
        signInGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;