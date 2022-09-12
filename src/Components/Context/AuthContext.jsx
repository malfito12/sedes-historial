import React,{createContext, useState} from 'react'
// import { useNavigate } from 'react-router-dom'

export const AuthContext=createContext()
export const AuthPovider=({children})=>{
    // const navigation=useNavigate()
    const [isLoading,setIsLoading]=useState(false)

    const login=async(e)=>{
        if(e.user_name=='admin' && e.user_pass=='admin'){
            window.localStorage.setItem('login',true)
            setIsLoading(true)
            // return navigation('/usuarios')
        }else{
            alert('Error, Contraseña Incorrecta')
        }
    }
    const logout=()=>{
        setIsLoading(false)
        window.localStorage.removeItem('login')
        window.location='/'
    }
    return(
        <AuthContext.Provider value={{login,isLoading,logout}}>{children}</AuthContext.Provider>
    )
}