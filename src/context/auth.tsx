import { Dispatch, ReactElement, ReactNode, Reducer, createContext, useReducer, useState } from "react";
import { User } from "../types";

export const ACTIONS = {
    USER_SIGNED_IN: 'user_signed_in',
    LOADING: 'loading',
    AUTHENTICATED: 'authenticated',
    AUTH_TOKEN: 'token'
};

type StateType = {
    user: User | any,
    loading: boolean,
    authenticated: boolean,
    token: string | undefined
};

export type ActionType = {
    type: string;
    payload: any;
};

export type DispatchType = Dispatch<ActionType>;

type ReduceType = Reducer<StateType, ActionType>;

type ContextType = {
    auth: any,
    authState: StateType,
    dispatch: DispatchType,
    setAuth: Dispatch<React.SetStateAction<{}>>
};

type PropsType = {
    children: ReactNode
};

const initialState: StateType = {
    user: undefined,
    loading: true,
    authenticated: false,
    token: undefined
};

export const authContext = createContext<ContextType>({ authState: initialState, dispatch: () => null, auth: {}, setAuth: () => {} });
const { Provider } = authContext;

export const AuthProvider = ({ children }: PropsType): ReactElement => {
    const [auth, setAuth] = useState({});
    const [authState, dispatch] = useReducer<ReduceType>((state: StateType, action: ActionType): StateType => {
        const { type, payload } = action;
        switch (type) {
            case ACTIONS.USER_SIGNED_IN:
                return { ...state, user: payload };
            case ACTIONS.LOADING:
                return { ...state, loading: payload };
            case ACTIONS.AUTHENTICATED:
                return { ...state, authenticated: payload };
            case ACTIONS.AUTH_TOKEN:
                return { ...state, token: payload };
            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ authState, dispatch, auth, setAuth }}>{children}</Provider>;
};

