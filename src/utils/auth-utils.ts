
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { TokenData } from '../types';
import { ACTIONS, DispatchType } from '../context/auth';

export const getSessionToken = async (): Promise<string | undefined> => {
    return Cookies.get('token');
}

export const setSessionToken = async (token: string): Promise<void> => {
    Cookies.set('token', token, { expires: 1, secure: true });
}

export const removeSessionToken = async (): Promise<void> => {
    Cookies.remove('token');
}

export const getTokenData = async (token: string): Promise<TokenData> => {
    return await jwtDecode(token);
}

export const isAuthenticated = async (): Promise<boolean> => {
    const token = await getSessionToken();
    return token ? true : false;
}

export const initialData = async (token: string, dispatch: DispatchType): Promise<void> => {
    try {
        const { first_name, last_name, type, user_id, email}: TokenData = await getTokenData(token);
        const user = {
            first_name,
            last_name,
            email,
            user_id,
            type           
        }
        dispatch({ type: ACTIONS.LOADING, payload: false });
        dispatch({ type: ACTIONS.AUTHENTICATED, payload: true });
        dispatch({ type: ACTIONS.USER_SIGNED_IN, payload: user });
        dispatch({ type: ACTIONS.ROLE, payload: type });        
    }
    catch (error: any) {
        console.log(error);
        throw error;
    }
}