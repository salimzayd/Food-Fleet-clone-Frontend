import React, { useState } from 'react'
import "./Registration.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Registration = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")
    const [password,setPassword] = useState("")
    const navi = useNavigate();


    async function onSubmit(e) {
        e.preventDefault()


        try{
            await axios.post("http://localhost:5000/",{
                name,email,number,password
            })
           }catch(e){
            console.log(e);
        }
        navi("/login");
    }
  return (
    <> 
    <div className='container1 d-flex justify-content-center align-items-center' style={{minHeight:"100vh", maxWidth:"300vh"}}>
        <div className='rounded shadow p-3 mb-5 ' style={{width:"25rem"}}>
            <form>
                <h1 className='mt-3' style={{fontFamily:"inherit"}}>SIGN UP </h1>

                <input className='form-control mt-3 ' type='text' placeholder='USERNAME' required onChange={(e) => {setName(e.target.value)}} />
                <br />
                <input className='form-control mt-4' type='Email' placeholder='EMAIL' required  onChange={(e) => {setEmail(e.target.value)}}/>
                <br />
                <input className='form-control mt-4' type='number' placeholder='PHONE NUMBER' required onChange={(e) => {setNumber(e.target.value)}}/>
                <br />
                <input  className='form-control mt-4' type='Password' placeholder='PASSWORD' required  onChange={(e) => {setPassword(e.target.value)}}/>

                <button className='btn btn-success rounded mt-4 w-100' onClick={onSubmit}>SIGN UP</button>

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