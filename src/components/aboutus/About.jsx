import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='about-section'>
      <div className='contents' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <h1>ABOUT US</h1>
        <p>
          In today's fast-paced world, convenience is key, and nothing embodies that more than a reliable food delivery app.
          With just a few taps on your smartphone, you can unlock a world of culinary possibilities,
          bringing the flavors of your favorite restaurants right to your doorstep.
          <br />
          From speedy delivery to customizable orders and seamless payment options,
          these apps offer a delightful dining experience tailored to your every need.
        </p>
        <button>READ MORE</button>
      </div>

      <div className='img img1' data-aos="fade-up-right"></div>
      <div className='img img2' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></div>
      <div className='img img3' data-aos="fade-up" data-aos-duration="3000"></div>
    </div>
  );
}

export default About;
