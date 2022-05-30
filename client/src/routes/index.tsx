import React, { useContext } from 'react';

import SignInRoutes from './SignInRoutes';
import PrivateAdminRoutes from './PrivateAdminRoutes';
import { AuthContext } from '../context/AuthContext';

const Routes: React.FC = () => {

    const { isAuthenticated } = useContext(AuthContext)

    return isAuthenticated ? <PrivateAdminRoutes /> : <SignInRoutes />;
};

export default Routes;