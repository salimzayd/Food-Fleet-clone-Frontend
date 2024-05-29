import axios from 'axios';
import { toast } from 'react-toastify';



    const admintoken = localStorage.getItem('adminToken');
    const AdminInstance = axios.create({
        baseURL:"http://localhost:5000/api/admin",
    })

    AdminInstance.interceptors.request.use((config) => {
        console.log(config);
        if(admintoken){
            config.headers.Authorization = `Bearer ${admintoken}`
        }
        return config;
    },(error) =>{
        return Promise.reject(error)
    });

    AdminInstance.interceptors.response.use((response) =>{
        return response
    },
(error) =>{
    if(error.response){
        console.error('error response',error.response.data);

        if(error.response.status === 401){
            toast.error('unauthorized.check your authentication credentials');
        }else{
            toast.error(error.response.data.message || " error submitting form");
        }
    }else if(error.request){
        console.error('Request error',error.request);
        toast.error("No response received from the server");
    }else{
        console.error("Error",error.message);
        toast.error("An error occured")
    }
    return Promise.reject(error)
})


export default AdminInstance