import { Routes,Route } from "react-router-dom";
import About from "./common/About";
import Banner from "./common/Banner";
import Reviews from "./common/Reviews";
import NAVbar from "./common/navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return (
    <div className="App">
      
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <NAVbar /> */}
      {/* <Banner /> */}
      {/* <About /> */}
      {/* <Reviews /> */}


      <Routes>
        <Route path="/register" element={<Registration /> } />
        <Route path="/login" element={<Login /> } />
      </Routes>
    </div>
  );
}

export default App;
