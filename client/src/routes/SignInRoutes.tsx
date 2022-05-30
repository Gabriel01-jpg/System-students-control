import React, { useContext } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

import { LoginPage } from '../pages/LoginPage';

const SignInRoutes: React.FC = () => {

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path='*' element={<Navigate to="/" replace={true} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default SignInRoutes;