import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Col,Row,Button,Container} from 'react-bootstrap'
import axios from 'axios'
import {toast} from 'react-toastify'
import {PulseLoader} from 'react-spinners'

function AdminLogin (){

    const [login,setLogin] = useState({email:"",
password:""});
const [loading,setLoading] = useState(false)
const navigate = useNavigate()

const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setLogin({...login,[name]:value})
}


const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)

    try{
        const response = await axios.post("http://localhost:5000/api/admin/login",login);
        const {data} = response.data
        console.log("login successfull",data);

        localStorage.setItem('adminToken',data)
        navigate("/adminhome")
        toast.success("admin logged successfully")
    }catch(error){
        console.error("login failed",error.response.data)
        toast.error("An error occured during log in")
    }
    setLoading(false)
}
  return (

    <>
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight:"100vh"}}>
        <div className='shadow p-3 mb-5 bg-white rounded m-3' style={{width:"25rem"}}>
            <form onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Col>
                    <input type='email'
                    className='form-control'
                    placeholder='email'
                    name='email'
                    value={login.email}
                    onChange={handleInputChange}></input>
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col>
                    <input type='password'
                    className='form-control'
                    placeholder='password'
                    name='password'
                    value={login.password}
                    onChange={handleInputChange}/>
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col>
                    <Button variant='success' block type='submit'>
                    {loading ? (
                        <PulseLoader color='#fff' loading={loading} size={5} style={{alignItems:"center"}} />
                    ): <>Login</>}
                    </Button>
                    </Col>
                </Row>
            </form>
            
        </div>
    </Container>
    </>
  )
}

export default AdminLogin