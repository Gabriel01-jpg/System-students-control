import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import { SidebarDrawerProvider } from './context/SidebarDrawerContext';

import Courses  from './pages/Courses';
import CoursesCreate from './pages/CousesCreate';
import Files from './pages/Files';
import FilesCreate from './pages/FilesCreate';
import { LoginPage } from './pages/LoginPage'
import Payments from './pages/Payments';
import PaymentsCreate from './pages/PaymentsCreate';
import Students from './pages/Students';
import StudentsCreate from './pages/StudentsCreate';
import Users from './pages/Users';
import UsersCreate from './pages/UsersCreate';
import { theme } from './styles/theme';

const RoutesApp = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
             <SidebarDrawerProvider>
                <AuthContextProvider >
                    <Routes>
                        <Route path="/">
                            <Route path="/login">
                                    <Route index element={<LoginPage />} />
                            </Route>
                                <Route path="/admin">
                                        <Route index element={<LoginPage />} />
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
                        </Route>
                    </Routes>
                    </AuthContextProvider>
                </SidebarDrawerProvider>
            </BrowserRouter>
        </ChakraProvider>
    )
    
}

export default RoutesApp;