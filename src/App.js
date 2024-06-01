import { Routes,Route } from "react-router-dom";
import About from "./components/aboutus/About"
import NAVbar from "./components/navbar/navbar";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Home1 from "./components/Home/Home1";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import OTP from "./otp/OTP"
import Dishes from "./pages/dishes/Dishes";
import Adminhome from "./admin/pages/adminhome/Adminhome";
import Adminbar from "./admin/components/Adminbar";
import AdminUsers from "./admin/pages/adminusers/AdminUsers";
import AdminLogin from "./admin/pages/login/AdminLogin";
import AdminProduct from "./admin/pages/adminproduct/AdminProduct";
import AdminSingleProduct from "./admin/pages/singleproduct/AdminSingleProduct";
import ViewDish from "./pages/viewdish/viewDish";
import Contactus from "./components/contactus/Contactus";
import Search from "./pages/search/Search";
import UserProfile from "./pages/userprofile/userProfile";
import Order from "./pages/order/Order";
import AddProperty from "./admin/pages/addproperty/AddProperty";
import AdminEdit2 from "./admin/pages/editproperty/EditProperty";
import Footer from "./components/footer/Footer";



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
        <Route path="/footer" element={<Footer />} />
        <Route path="/otpverification" element={<OTP /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/singledish/:id" element={<ViewDish />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<Adminhome />} />
        <Route path="/adminusers" element={<AdminUsers />} />
        <Route path="/addproduct" element={<AddProperty />} />
        <Route path="/adminproduct" element={<AdminProduct />} />
        <Route path="/adminviewproduct/:id" element={<AdminSingleProduct />} />
        {/* <Route path="/admineditproduct/:id" element={<AdminEdit />} /> */}
        <Route path="/admineditproduct/:id" element={<AdminEdit2 />}/>
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/order/:id" element={<Order />} />
        
      </Routes> 
    

    </div>
  );
}

export default App;
