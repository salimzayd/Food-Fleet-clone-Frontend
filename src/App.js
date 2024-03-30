import { Routes,Route } from "react-router-dom";
import About from "./common/About";
import Reviews from "./common/Reviews";
import NAVbar from "./common/navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home1 from "./common/Home1";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      
      {/* <Registration /> */}
      {/* <Login /> */}
      <NAVbar />
      <About />
      {/* <Reviews /> */}

    {/* <Home1 /> */}

       {/* <Routes>
         <Route path="/" element={<Home1 /> } />
        <Route path="/register" element={<Registration /> } />
        <Route path="/login" element={<Login /> } />
      </Routes>  */}

    </div>
  );
}

export default App;
