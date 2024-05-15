import { Routes,Route } from "react-router-dom";
import About from "./components/About"
import NAVbar from "./components/navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home1 from "./components/Home1";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import OTP from "./components/demo/OTP"
import Dishes from "./components/Dishes";
import Adminhome from "./components/Adminhome";
import Adminbar from "./components/Adminbar";
import AdminUsers from "./components/admin/AdminUsers";
import AdminLogin from "./components/admin/AdminLogin";
import AdminAddProduct from "./components/admin/AdminAddProduct";
import AdminProduct from "./components/admin/AdminProduct";
import AdminSingleProduct from "./components/admin/AdminSingleProduct";
import ViewDish from "./components/viewDish";
import AdminEdit from "./components/admin/AdminEditProduct";
import Contactus from "./components/Contactus";



function App() {
  return (
    <div className="App">
      <ToastContainer />
      
      <NAVbar />

    {/* <Home1 /> */}

       <Routes>
         <Route path="/" element={<Home1 /> } />
         <Route path="/about" element={<About />} />
         <Route path="/dishes" element={<Dishes />} />
        <Route path="/register" element={<Registration /> } />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/otpverification" element={<OTP /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/singledish/:id" element={<ViewDish />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<Adminhome />} />
        <Route path="/adminusers" element={<AdminUsers />} />
        <Route path="/addproduct" element={<AdminAddProduct />} />
        <Route path="/adminproduct" element={<AdminProduct />} />
        <Route path="/adminviewproduct/:id" element={<AdminSingleProduct />} />
        <Route path="/admineditproduct/:id" element={<AdminEdit />} />
      </Routes> 
    

    </div>
  );
}

export default App;
