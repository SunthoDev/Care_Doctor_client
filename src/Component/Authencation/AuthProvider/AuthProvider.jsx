import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import App from '../../../App';
import app from '../Firbase/Firbase.Config';

export let AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)


    // create user
    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // singIn user
    let loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // observed user
    useEffect(() => {

        let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)

            if (currentUser && currentUser.email) {
                let userEmail = { email: currentUser.email }

                fetch("https://care-doctor-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("care_doctor", data.token)
                    })
            }
            else{
                localStorage.removeItem("care_doctor")
            }

        })

        return () => {
            return unSubscribe()
        }

    }, [])






    // log out 
    let logOut = () => {
        return signOut(auth)
    }

    // google login
    let googleLogin = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }


    let authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        loading,
        googleLogin
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;