import axios from "axios";
import { getAuthToken } from "./localStore";


axios.interceptors.request.use(
    config=>{
        const token = getAuthToken();
        if(token){
            config.headers['Authorization'] = token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

export default axios;