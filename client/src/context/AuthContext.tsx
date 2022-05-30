import { parseCookies } from "nookies";
import { userInfo } from "os";
import { createContext, ReactNode, useEffect, useState } from "react";
import SignInRoutes from "../routes/SignInRoutes";
import { api } from "../services/api";

interface User {
    name: string;
    surname: string;
    email: string;
}

type AuthContextProps = {
    user: User | undefined;
    isAuthenticated: boolean;
    
}

export const AuthContext = createContext({} as AuthContextProps);


const cookies = parseCookies();

interface AuthContextProviderProps{
    children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps){
    
    const [user, setUser] = useState<User>();

    const isAuthenticated = !!user;

    useEffect(() => {

        const token = cookies['artec.token']

        if(token){
            setUser({
                name: 'Gabriel',
                surname: 'Lima',
                email: "gabriel12312@gmail.com"
            })
            /* api('sessions/me').then(response => {
                setUser(response.data)
            }) */
        } else {
            SignOut()
            
        }
        

    }, [])



    return (
        <AuthContext.Provider value={{isAuthenticated, user}}>
            {children}
        </AuthContext.Provider>
    )

}

export function SignOut(){

}