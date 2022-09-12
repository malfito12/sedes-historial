import React from 'react'
import { BrowserRouter as Route, Navigate, Outlet } from 'react-router-dom'

const Public = () => {
    const userLogeed = window.localStorage.getItem('login')
    if (userLogeed) {
        return <Navigate to='/private/usuarios' />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Public