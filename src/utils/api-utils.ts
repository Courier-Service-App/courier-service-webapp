import axios from "axios";
import { KeyValues } from "../types";
import { ApiConfig } from "../configs/configs";
import { getSessionToken } from "./auth-utils";

export const api = axios.create({
    baseURL: ApiConfig.basePath
});

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
        if (error?.response?.data) {
            throw error.response.data;
        }
        else {
            throw 'Unknown error'
        }
        
    }
}