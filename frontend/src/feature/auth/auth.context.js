import { createContext,useState,useEffect, Children } from "react";
import {login,register,getProfile} from './services/auth.api'
export const AuthContext=createContext()

export function AuthProvider({children}){
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    const handlelogin=async(email,password)=>{
        setLoading(true)
        try{
           const response=await login(email,password)
           setUser(response.user)
        }
        catch(err)
        {
          console.log(err)
        }
        finally{
            setLoading(false)
        }
        
    }
    const handleregister=async(username,email,password)=>{
        setLoading(true)
        try{
            const response=await register(username,email,password)
            setUser(response.user)
         }
         catch(err)
         {
            console.log(err)
         }
         finally{
            setLoading(false)
         }
    }
    return (
        <AuthContext.Provider value={{user,loading,handlelogin,handleregister}}>
            {Children}
        </AuthContext.Provider>
    )


}
