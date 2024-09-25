import axios, { AxiosInstance } from "axios";
import { destroyCookie, parseCookies } from "nookies";

export function getApiClient(ctx?:never): AxiosInstance{
    
    const api = axios.create({
        baseURL: 'http://localhost:3001'
    })
    
    api.interceptors.request.use(config => {
        console.log('Request', config)
        return config
    })

    api.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          console.error('An error occurred:', error);
      
          if (error.response.status === 401) {
            console.log('Session expired, redirecting to login...');
            destroyCookie(ctx, 'DynaPost.Token')
            delete api.defaults.headers.common["Authorization"]
            window.location.href = '/login';
          } else if (error.response.status === 500) {
            console.log('Internal server error. Please try again later.');
          }
      
          return Promise.reject(error);
        }
    );

    const { 'DynaPost.Token': token } = parseCookies(ctx)
    
    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api
}

export const api = getApiClient()
