import React, { useState } from 'react';
import "./Registration.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RingLoader } from 'react-spinners';
import userInstance from '../../axiosinterceptors/UserAxiosInterceptor';

const Registration = () => {
    const [loading, setLoading] = useState(false);
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        phonenumber: '',
        password: '',
    });
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formdata.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!formdata.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formdata.email)) {
            errors.email = 'Invalid email format';
            isValid = false;
        }
        if (!formdata.phonenumber.trim()) {
            errors.phonenumber = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formdata.phonenumber)) {
            errors.phonenumber = 'Invalid phone number';
            isValid = false;
        }
        if (!formdata.password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        }

        setError(errors);
        return isValid;
    };

    const onSubmission = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Form submitted with data:", formdata);

        if (validateForm()) {
            try {
                const result = await userInstance.post("api/users/sendotp", { phonenumber: formdata.phonenumber });
                console.log("API call result:", result);
                toast.success("Registration success. Redirecting to OTP verification");
                navigate('/otpverification', { state: { formdata, phonenumber: formdata.phonenumber } });
            } catch (error) {
                console.error("API call error:", error.response ? error.response.data : error.message);
                if (error.response) {
                
                    toast.error(error.response.data.message || "Error sending OTP");
                } else if (error.request) {
                
                    toast.error("No response received from the server");
                } else {
                    
                    toast.error("An error occurred while sending OTP");
                }
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='container1 d-flex justify-content-center align-items-center' style={{ minHeight: "100vh", maxWidth: "300vh" }}>
                <div className='rounded shadow p-3 mb-5 ' style={{ width: "25rem" }}>
                    <form onSubmit={onSubmission}>
                        <h1 className='mt-3' style={{ fontFamily: "inherit" }}>SIGN UP </h1>

                        <input className='form-control mt-3 '
                            type='text'
                            id='name'
                            placeholder='USERNAME'
                            value={formdata.name}
                            onChange={onChange} />
                        {error.name && <div className='error'>{error.name}</div>}

                        <br />
                        <input className='form-control mt-4' type='Email' id='email' placeholder='EMAIL' value={formdata.email} onChange={onChange} />
                        {error.email && <div className='error'>{error.email}</div>}
                        <br />
                        <input className='form-control mt-4' type='number' maxLength={10} id='phonenumber' placeholder='PHONE NUMBER' value={formdata.phonenumber} onChange={onChange} />
                        {error.phonenumber && <div className='error'>{error.phonenumber}</div>}
                        <br />
                        <input className='form-control mt-4' type='Password' id='password' placeholder='PASSWORD' value={formdata.password} onChange={onChange} />
                        {error.password && <div className='error'>{error.password}</div>}

                        <button className='btn btn-success rounded mt-4 w-100' disabled={loading}>
                            {loading ? (
                                <RingLoader color='#D20062' loading={loading} style={{ alignItems: "center" }} />
                            ) : <>Signup</>}
                        </button>

                        <p className='mt-4 d-flex justify-content-center' style={{ color: "whitesmoke" }}>
                            Already have an account? <Link to='/login' style={{ textDecoration: "none" }}>LOGIN</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Registration;
