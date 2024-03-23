import { Carousel } from "react-bootstrap";
import React from "react";
import pic1 from "../components/Assets/pic1.jpg"
import pic2 from "../components/Assets/pic2.jpg"
import pic3 from "../components/Assets/pic3.png"



const Banner = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src={pic1}
            className="d-block w-100 img-fluid"
            style={{ objectFit: "cover", maxHeight: "75vh" }}
            alt="ExampleImage"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={pic2}
            className="d-block w-100 img-fluid"
            style={{ objectFit: "cover", maxHeight: "75vh" }}
            alt="ExampleImage"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={pic3}
            className="d-block w-100 img-fluid"
            style={{ objectFit: "cover", maxHeight: "75vh" }}
            alt="ExampleImage"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
  
  
  
      
    );
  }
  
  export default Banner;