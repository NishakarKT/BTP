import React, { lazy } from 'react'
import { Routes, Route } from "react-router-dom"
// pages
const SignIn = lazy(() => import("./SignIn"));
const SignUp = lazy(() => import("./SignUp"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));

const Index = () => {
    return (
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    )
}

export default Index