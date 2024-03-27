import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './constants';
import { isAuthenticated } from '../utils';
import useAuth from '../hooks/useAuth';

export default function ProtectedRoute({ children }: any) {
    const [ auth, setAuth ] = useState(false);
    const { authState } = useAuth();
    const { loading } = authState;
    const navigate = useNavigate();

    const isAuthUser= async () => {
        setAuth(false)
        const isAuth = await isAuthenticated();
        console.log('yyy', isAuth);

        if (isAuth) {
            setAuth(true);
        }
        else if (!isAuth) {
            setAuth(false);
            redirectToLogin();
        }                
    }

    const redirectToLogin = () => {
        navigate(ROUTES.HOME);
    }

    useEffect(() => {
        if (!0) {
            isAuthUser();
        }
        
    }, []);

    return (
        <>{auth ? children : null}</>
    )
}