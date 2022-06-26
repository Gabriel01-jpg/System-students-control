import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies'

const token = parseCookies();

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: `Bearer ${token['artec.token']}`
    }
})

/* api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError)  => {
    if(error.response?.status === 401){
        if(error.response.data?.code === 'token.expired'){
            const cookies = parseCookies();

            const { 'artec.refreshToken' : refreshToken} = cookies;
        }
    }
}) */