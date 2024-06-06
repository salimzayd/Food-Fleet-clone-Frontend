import React, { useState } from 'react';
import { Container, Row, Col, FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { RotateLoader } from 'react-spinners';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = (token, userDetails) => {
    const { _id, name, email, phonenumber } = userDetails;
    console.log("Details: ", userDetails);

    localStorage.setItem("token", token);
    localStorage.setItem("_id", _id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenumber", phonenumber);
    navigate('/');
    toast.success("Login successful");
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email: formdata.email,
        password: formdata.password
      }, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);

      const { token, user } = response.data;
      handleLogin(token, user);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Container className='container2 d-flex justify-content-center align-items-center' style={{width:"1520px"}}>
        <Row className="justify-content-center w-100">
          <Col xs={12} md={6} lg={4} className="d-flex flex-column align-items-center">
            <div className='qoute'>
              <h2>"Food delivery apps: turning <span className='one'>cravings</span> <br />into doorstep <span className='two'>delights.</span>"</h2>
            </div>
            <div className='shadow p-4 mb-5 rounded'>
              <Form onSubmit={handleSubmit}>
                <h1 style={{ color: "white", textAlign: "center" }}>Login</h1>
                <FormGroup className='mb-3'>
                  <FormControl type='email' placeholder='Email address' name='email' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormControl type='password' placeholder='Password' name='password' required onChange={handleChange} />
                </FormGroup>
                <Button variant='success' type='submit' block>
                  {loading ? (
                    <RotateLoader color='#41B06E' loading={loading} />
                  ) : <>Login</>}
                </Button>
              </Form>
              <Row>
                <Col className='mt-3'>
                  <h6 style={{ color: "white" }}>
                    Don't have an account? <Link to="/register">Sign up</Link>
                  </h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
