import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { HomePage } from '../../components/Pages/HomePage';
// import { LoginPage } from '../../components/Pages/LoginPage';
import { LoginPage } from '../../components/pages/Login';
import { TodoPage } from '../../components/pages/Todo';

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route path='/*' element={<Navigate to="/home" />} />
            {/* <Route path='home' element={<HomePage />} /> */}
            <Route path='home' element={<TodoPage />} />
        </Routes>
    );
};

const UnprotectedRoutes = () => (
    <Routes>
        <Route path='/*' element={<Navigate to='/login' />} />
        {/* <Route path='login' element={<LoginPage />} /> */}
        <Route path='login' element={<LoginPage />} />
    </Routes>
);

const RootNavigator = (): React.ReactElement => {
    const isLoggedIn = false;
    return (
        <React.Suspense fallback={<div>Loading routes ...</div>}>
            <BrowserRouter>
                { isLoggedIn ? <ProtectedRoutes /> : <UnprotectedRoutes />}
            </BrowserRouter>
        </React.Suspense>
    );
};

export default RootNavigator;
