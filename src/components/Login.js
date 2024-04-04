import React, { useState } from 'react'
import { Container,Row,Col,FormGroup,FormControl, Button,Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

    const [formdata,setFormdata] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()


    const onChange = (e) =>{
        setFormdata({...formdata,[e.target.id] :e.target.value })

    }

    const onSubmit = async  (e) =>{

        e.preventDefault()

        await axios.post("http://localhost:5000/api/users/login",formdata)
        .then(result =>{
            console.log(result);
            toast.success("Login successfull")
            navigate('/')
        })
        .catch(error =>{
            console.log(error);
            toast.error("An error occured while log in")
        })
        
    }

  return (
    <>
    <Container className='container2 d-flex justify-content-center align-items-center' style={{minHeight:"100vh", maxWidth:"300vh"}}>
        <div className='qoute'><h2 >"Food delivery apps: turning <span className='one'>cravings</span> <br />into doorstep <span className='two'>delights.</span>"</h2></div>
        <div className=' shadow p-4 mb-5  rounded m-3 ' style={{maxWidth:"500px",width:"100%"}}>
            <Form  onSubmit={onSubmit}>
                <h1 style={{color:"white", display:"flex", justifyContent:"center"}}> Login </h1>
                <FormGroup className='mb-3'>
                    <FormControl type='text' placeholder='email address' name='email' required  onChange={onChange}/>
                </FormGroup>

                <FormGroup className='mb-3'>
                    <FormControl type='password' placeholder='password' name='password' required onChange={onChange} />
                </FormGroup>


                <Button variant='success' type='submit' >Login</Button>
            </Form>

            <Row>
                <Col className='mt-3'>
                    <h6 style={{color:"white"}}>
                        Don't have an acount ? <Link to="/register">Sign up</Link>
                    </h6>
                </Col>
            </Row>
        </div>

    </Container>
    
    
    
    </>
  )
}

export default Login