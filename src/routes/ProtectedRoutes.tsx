import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from './constants';
import useAuth from '../hooks/useAuth';

export default function ProtectedRoute() {
    const { authState } = useAuth();
    const { authenticated } = authState;
    
    return(
        authenticated ? <Outlet/> : <Navigate to={ROUTES.LOGIN}/>
    )
}