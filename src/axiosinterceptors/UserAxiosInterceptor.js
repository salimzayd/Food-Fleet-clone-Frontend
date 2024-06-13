import axios from "axios";
import { toast } from "react-toastify";



const userInstance = axios.create({
baseURL:process.env.React_App_Base_Url
})

userInstance.interceptors.request.use(
    
    (config) => {
    const usertoken = localStorage.getItem('token');
        console.log(config);
        if(usertoken){
            config.headers.Authorization = `Bearer ${usertoken}`
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error)
    }
);

userInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) =>{
        if(error.response){
            console.error("error response", error.response.data);

            if(error.response.status === 401){
                toast.error("Unauthorized.check your authentication credentials");
            }else{
                toast.error(error.response.data.message);
            }
        }else if (error.request){
            console.error("request error",error.request);
            toast.error("no response received from the server")
        }else{
            console.error("error",error.message);
            toast.error("An error occured")
        }
        return Promise.reject(error)
    }
);

export default userInstance;
