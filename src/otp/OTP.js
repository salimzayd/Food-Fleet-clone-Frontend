import React, { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import "./otp.css"
import userInstance from "../axiosinterceptors/UserAxiosInterceptor";

const OtpVerification = () =>{
    const navigate  = useNavigate()
    const location = useLocation()

    const [otp,setOtp] = useState('')
    const [error,setError] = useState('')

    const formdata = location.state.formdata
    const phonenumber = location.state.phonenumber
    console.log(phonenumber);


    
      const handleVerify = async (e) => {
        e.preventDefault();
      
        try {
          // Send OTP
            
             const otpVerificationResponse = await userInstance.post("/verifyOtp", { phonenumber, otp });
      
          if (otpVerificationResponse.data.success) {
            setError(null);
            try {
              const response = await userInstance.post("/register", formdata, { headers: { "Content-Type": "application/json" } });
      
              if (response.data.success) {


                navigate("/login");

              } else {
                setError(response.data.message);
              }
            } catch (error) {
              console.error("Error:", error.message);
              setError("An error occurred during registration. Please try again later.");
            }
          } else {
            setError("Invalid OTP. Please try again.");
          }
       } catch (error) {
          console.error("Error:", error.message);
          setError("An error occurred. Please try again later.");
        }
      }
    
    
    return(
        <div className="wrapper"><h1> Verify OTP</h1>
        <form onSubmit={handleVerify} className="form">

            <input type="text"
            name="otp"
            value={otp}
            placeholder="Enter otp"
            maxLength='6'
            onChange={(e) => setOtp(e.target.value)} required />


            <button type="submit" className="otp-btn">Verify</button>
            </form>
            {error && <div className="form">{error}</div>}

            <div className="form">
                Not getting OTP ? <Link to='/ report-issue'>Report issue</Link></div>  
            </div>
            
          
            
    )
}
export default OtpVerification;