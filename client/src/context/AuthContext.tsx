import { parseCookies, destroyCookie } from "nookies";
import { userInfo } from "os";
import { createContext, ReactNode, useEffect, useState } from "react";
import SignInRoutes from "../routes/SignInRoutes";
import { api } from "../services/api";

interface User {
    id: string;
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
            api.get('/accounts/me').then(response => {

                const user = response.data.user as User;

                setUser(user)
            }).catch(error => {
                SignOut();

            })
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
    destroyCookie(null, 'artec.token');
}