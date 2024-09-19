import axios, { AxiosInstance } from "axios";
import { destroyCookie, parseCookies } from "nookies";

export function getApiClient(ctx?:any): AxiosInstance{
    
    const API = axios.create({
        baseURL: 'http://localhost:3001'
    })
    
    API.interceptors.request.use(config => {
        console.log('Request', config)
        return config
    })

    API.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          console.error('An error occurred:', error);
      
          if (error.response.status === 401) {
            console.log('Session expired, redirecting to login...');
            destroyCookie(ctx, 'DynaPost.Token')
            delete API.defaults.headers.common["Authorization"]
          } else if (error.response.status === 500) {
            console.log('Internal server error. Please try again later.');
          }
      
          return Promise.reject(error);
        }
    );

    const { 'DynaPost.Token': token } = parseCookies(ctx)
    
    if (token) {
        API.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return API
}

export const API = getApiClient()
