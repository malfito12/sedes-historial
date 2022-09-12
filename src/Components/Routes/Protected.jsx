import React from 'react'
import { BrowserRouter as Route, Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const userLogeed=window.localStorage.getItem('login')
    if(!userLogeed){
        return <Navigate to='/' />
    }
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default Protected