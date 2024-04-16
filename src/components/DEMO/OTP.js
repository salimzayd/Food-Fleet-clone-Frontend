import React, { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import "./otp.css"

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
            
            
          
    
          const otpVerificationResponse = await axios.post("http://localhost:5000/api/users/verifyotp", { phonenumber, otp });
      
          if (otpVerificationResponse.data.success) {
            setError(null);
            // If OTP verified, proceed with registration
            try {
              const response = await axios.post("http://localhost:5000/api/users/register", formdata, { headers: { "Content-Type": "application/json" } });
      
              if (response.data.success) {
                // If registration successful, navigate to login
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


            <button type="submit">Verify</button>
            </form>
            {error && <div className="form">{error}</div>}

            <div className="form">
                Not getting OTP ? <Link to='/ report-issue'>Report issue</Link></div>  
            </div>
            
    )
}
export default OtpVerification;