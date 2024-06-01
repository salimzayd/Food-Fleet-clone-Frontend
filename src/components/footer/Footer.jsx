import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'

const Footer = ()=> {
  return (
    <MDBFooter bgColor='light'className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3"  style={{color:"royalblue"}}/>
                <span style={{ color: "orange" }}>FOOD</span> <span style={{ color: "skyblue" }}>FLEET</span>
              </h6>
              <p style={{color:"black"}}>
              "Craving satisfied, delivered to your door.
                Fresh flavors, just a tap away.
                Every meal, a culinary delight.
                Convenience and taste in perfect harmony.
                Your favorite dishes, faster than ever."
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='heads text-uppercase fw-bold mb-4'>Products</h6>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Non-Veg
                </a>
              </p>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Veg
                </a>
              </p>
              <p className='text'>
                <a href='#!' className='text-reset'>
                 Sweet
                </a>
              </p>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Beverages
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='heads text-uppercase fw-bold mb-4'>Useful links</h6>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p className='text'>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='heads text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='text'>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p className='text'>
                <MDBIcon icon="envelope" className="me-3" />
                Foodfleet313@gmail.com
              </p>
              <p className='text'>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p className='text'>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          FoodFleet.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;