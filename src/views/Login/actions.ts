import { ACTIONS, DispatchType } from '../../context/auth';
import { postApi } from '../../utils';

export const initialData = async (data: any, dispatch: DispatchType) => {
    try {
        dispatch({ type: ACTIONS.LOADING, payload: false });
        dispatch({ type: ACTIONS.AUTHENTICATED, payload: true });
        dispatch({ type: ACTIONS.USER_SIGNED_IN, payload: data.user });
        dispatch({ type: ACTIONS.AUTH_TOKEN, payload: data.token });

    }
    catch (error: any) {
        console.log(error);
        throw error;
    }
} 

export const userSignIn = async (email: string, password: string, dispatch: DispatchType) => {
    try {
        const response = await postApi('/authenticate', { email, password });
        initialData(response, dispatch);
        return {
            response: 'Login success',
            isSignedIn: true
        };
    }
    catch (error: any) {
        console.log(error);
        return {
            response: error.message,
            isSignedIn: false
        }
    }
}