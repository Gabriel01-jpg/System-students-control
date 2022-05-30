import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes, To, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import Courses from '../pages/Courses';
import CoursesCreate from '../pages/CousesCreate';
import Files from '../pages/Files';
import FilesCreate from '../pages/FilesCreate';
import { LoginPage } from '../pages/LoginPage';
import Payments from '../pages/Payments';
import PaymentsCreate from '../pages/PaymentsCreate';
import Students from '../pages/Students';
import StudentsCreate from '../pages/StudentsCreate';
import Users from '../pages/Users';
import UsersCreate from '../pages/UsersCreate';

const PrivateAdminRoutes: React.FC = () => {

    const { isAuthenticated } = useContext(AuthContext)

    /* const navigate = useNavigate();

    if(isAuthenticated){
        navigate('/courses');
    }
     */

return (
   <BrowserRouter>
        <SidebarDrawerProvider>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/courses" replace={true} /> : <Navigate to="/" />}>
                </Route>
                <Route path="/courses" >
                    <Route index element={<Courses />}/>
                    <Route path="/courses/create" element={<CoursesCreate />}/>
                </Route>
                <Route path="/payments" >
                    <Route index element={<Payments />}/>
                    <Route path="/payments/create" element={<PaymentsCreate />}/>
                </Route>
                <Route path="/students" >
                    <Route index element={<Students />}/>
                    <Route path="/students/create" element={<StudentsCreate />}/>
                </Route>
                <Route path="/files" >
                    <Route index element={<Files />}/>
                    <Route path="/files/create" element={<FilesCreate />}/>
                </Route>
                <Route path="/users" >
                    <Route index element={<Users />}/>
                    <Route path="/users/create" element={<UsersCreate />}/>
                </Route>
            </Routes>
        </SidebarDrawerProvider>
   </BrowserRouter>
 );
};

export default PrivateAdminRoutes;