import { ACTIONS, DispatchType } from '../../context/auth';
import { initialData, postApi, removeSessionToken, setSessionToken } from '../../utils';
import { message } from 'antd';
import { LoginResponse } from '../../types';

export const userSignIn = async (email: string, password: string, dispatch: DispatchType) => {
    try {
        const { token, role } = await postApi<LoginResponse>('/authenticate', { email, password });
        await setSessionToken(token);
        await initialData(token, dispatch);
        return {
            response: 'Login success',
            role,
            isSignedIn: true
        };
    }
    catch (error: any) {
        console.log(error);
        message.destroy();
        return {
            response: error.message,
            role: undefined,
            isSignedIn: false
        }
    }
}

export const userSignOut = async (dispatch: DispatchType): Promise<void> => {
    try {
        await removeSessionToken(); 
    } 
    finally {        
        dispatch({ type: ACTIONS.LOADING, payload: true });
        dispatch({ type: ACTIONS.AUTHENTICATED, payload: false });
        dispatch({ type: ACTIONS.USER_SIGNED_IN, payload: undefined });
        dispatch({ type: ACTIONS.ROLE, payload: undefined }); 
    }
}