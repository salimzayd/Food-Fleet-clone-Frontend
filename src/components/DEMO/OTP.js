import React, { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import "./otp.css"

const OtpVerification = () =>{
    const navigate  = useNavigate()
    const location = useLocation()

    const [otp,setOtp] = useState('')
    const [error,setError] = useState('')

    const formdata = location.state.formdata

    const handleVerify = async (e) =>{
        e.preventDefault();


        try{
            const otpVerificationResponse = await axios.post("http://localhost:5000/api/users/verifyotp",
            {phonenumber : formdata.phonenumber,otp:otp});

            if(otpVerificationResponse.data.success){
                const response = await axios.post("http://localhost:5000/api/users/register",formdata,
                {headers:{"Content-Type":"application/json"}});

                if(response.data.success){
                    setError(null);
                    navigate("/login");
                }else{
                    setError(response.data.message);
                }
            }else{
                setError("invalid OTP.please try again")
            }
        }catch(error){
            console.error("error",error.message);
            setError("An error occurred . please try again later")
        }
    };

    return(
        <div className="wrapper"><h1> Verify OTP</h1>
        <form onSubmit={handleVerify} className="form">

            <input type="text"
            name="otp"
            value={otp}
            placeholder="Enter otp"
            maxLength='6'
            onChange={(e) => setOtp(e.target.value)} required />


            <button type="submit">Verify</button>
            </form>

            <div className="form">
                Not getting OTP ? <Link to='/ report-issue'>Report issue</Link></div>  
            </div>
            
    )
}
export default OtpVerification;