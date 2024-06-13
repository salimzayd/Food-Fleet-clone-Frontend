import React, { useState } from 'react'
import "./Registration.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import {RingLoader} from 'react-spinners'
import userInstance from '../../axiosinterceptors/UserAxiosInterceptor';

const Registration = () => {

    const [loading,setLoading] = useState(false)
    const [formdata,setFormdata] = useState({
        name:'',
        email:'',
        phonenumber:'',
        password:'',
    })
    const [error,setError] = useState({})
    const navi = useNavigate();


    const onChange = (e)=>{
        setFormdata({...formdata,[e.target.id]:e.target.value});
    };

    const validateForm = () =>{
        let error = {}
        let isvalid = true

        if(!formdata.name.trim()){
            error.name = 'name is required';
            isvalid=false
        }
        if(!formdata.email.trim()){
            error.email = 'email is required'
            isvalid = false
        }else if(!/^\S+@\S+\.\S+$/.test(formdata.email)){
            error.email = 'invalid email format';
            isvalid = false
        }

        if(!formdata.phonenumber.trim()){
            error.phonenumber = 'phone number is required'
            isvalid = false
        }else if (!/^\d{10}$/.test(formdata.phonenumber)){
            error.phonenumber = 'invalid phone number';
            isvalid = false
        }
        if(!formdata.password.trim()){
            error.password = 'password is required';
            isvalid = false
        }
       
        
        setError(error)
        return isvalid
    };

    const  onSubmition = (e) =>{
        setLoading(true)
        e.preventDefault()

        if(validateForm()){
                userInstance.post("api/users/sendotp",{phonenumber:formdata.phonenumber})
                .then(result => {
                    console.log(result);
                    toast.success("registration success. redirecting to OTP verification")
                    navi('/otpverification',{state:{formdata, phonenumber:formdata.phonenumber}})
                })
                .catch(error => {
                    console.log(error.response.data);
                    toast.error(error.response.data.message)
                })
                    
            
        }
        setLoading(false)
    }


        return (
    <> 
    <div className='container1 d-flex justify-content-center align-items-center' style={{minHeight:"100vh", maxWidth:"300vh"}}>
        <div className='rounded shadow p-3 mb-5 ' style={{width:"25rem"}}>
            <form onSubmit={onSubmition}>
                <h1 className='mt-3' style={{fontFamily:"inherit"}}>SIGN UP </h1>

                

                <input className='form-control mt-3 ' 
                type='text' 
                id='name' 
                placeholder='USERNAME' 
                value={formdata.name} 
                onChange={onChange} />
                {error.name && <div className='error'>{error.name}</div>}

                
                <br />
                <input className='form-control mt-4' type='Email' id='email' placeholder='EMAIL' value={formdata.email} onChange={onChange}/> {error.email && <div className='error'>{error.email}</div>}
                <br />
                <input className='form-control mt-4' type='number' maxLength={10} id='phonenumber' placeholder='PHONE NUMBER' value={formdata.phonenumber} onChange={onChange}/> {error.phonenumber && <div className='error'>{error.phonenumber}</div>}
                <br />
                <input  className='form-control mt-4' type='Password' id='password' placeholder='PASSWORD' value={formdata.password}  onChange={onChange}/> {error.password && <div className='error'>{error.password}</div>}

                <button className='btn btn-success rounded mt-4 w-100'>
                    {loading ? (
                        <RingLoader color='#D20062' loading={loading} style={{alignItems:"center"}}/>
                    ):<>Signup</>}
                </button>

                <p className='mt-4 d-flex justify-content-center' style={{color:"whitesmoke"}}>
                    Already have an account ? <Link to='/login' style={{textDecoration:"none"}}>LOGIN</Link>
                </p>
            </form>
        </div>
    </div>
    
    
    </>
        )
  
}

export default Registration