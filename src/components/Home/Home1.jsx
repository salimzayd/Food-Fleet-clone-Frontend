import React,{useEffect} from 'react';
import './Home1.css';
import { Button } from 'react-bootstrap';
import newbike from '../assets/images/bikee.png';
import { useNavigate } from 'react-router-dom';
import Contactus from '../contactus/Contactus';
import About from '../aboutus/About';
import Footer from '../footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Home1 = () => {
  useEffect(()=>{
    Aos.init()
  })
  const nav = useNavigate();
  
  return (
    <>
      <div className="container">
        <div className="blur-background"></div>
        <div className="content">
          <h1>A complete food zone</h1>
          <h3>
            "From <span className="highlight">cravings</span> to doorstep in a snap! <br />
            Indulge in a world of flavors with our hassle-free <span className="highlight1">food</span> delivery app.<br />
            Satisfaction guaranteed, every bite, every time."
          </h3>
        </div>
        <div className="last" data-aos="flip-down"> 
          <h2>if you wish to order from our website !! please <span className="register">register</span></h2>
          <Button className="btn-11 bg-success" onClick={() => nav('/register')}>REGISTER</Button>
          <img src={newbike} className="bike" alt="New Bike" />
        </div>
      </div>  
      <About />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home1;
