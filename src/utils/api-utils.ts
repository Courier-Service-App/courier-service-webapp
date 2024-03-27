import axios from "axios";
import { KeyValues } from "../types";
import { ApiConfig } from "../configs/configs";


const api = axios.create({
    baseURL: ApiConfig.basePath
});


const getSessionToken = async (): Promise<string> => {
    // const session = await Auth.currentSession();
    return '';
}

export const getApi = async <T>(path: string, params: KeyValues = {}): Promise<T> => {
    const token = await getSessionToken();
    const res = await api.get(path, {
        ...params,
        headers: {
            Authorization: token
        }
    });
    return res.data;  
}

export const postApi = async <T>(path: string, body: KeyValues={}): Promise<T> => {
    const token = await getSessionToken();    
    try {
        const res = await api.post(path, body, {
            headers: {
                Authorization: token
            }
        });
        return res.data;  
    }
    catch(error: any) {
        console.error(error);
        throw error.response.data;
    }
}