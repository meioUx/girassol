import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const signIn = async ({ email, password }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error:${errorCode}\n${errorMessage}`)
            }).finally(() => setIsLoading(false))
    }

    const signUp = async ({ email, password }) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Cadastrado com suceso!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error:${errorCode}\n${errorMessage}`)
            }).finally(() => setIsLoading(false))
    }

    const signOut = () => {
        const answer = window.confirm('Aviso!\nVocê esta saindo da sua conta, tem certeza?')
        answer && setUser(null)
    }

    return (
        <UserContext.Provider value={{ isLoading, user, signIn, signUp, signOut }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    return context
}