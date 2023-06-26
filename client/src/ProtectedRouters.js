import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


// user router protect
function ProtectedRouters() {
    const {userInfo} = useSelector(state => state.UserLogin)
  return userInfo?.token ? <Outlet /> : <Navigate to="/login" />
}

// admin router protect
function AdminProtectedRouters() {
    const {userInfo} = useSelector(state => state.UserLogin)
    return userInfo?.token ? (
        userInfo?.isAdmin ? (
        <Outlet />
        ) : (
        <Navigate to="/*" />
        )
    ) : (
    <Navigate to="/login" />
    );
}

export { ProtectedRouters, AdminProtectedRouters}