import React from 'react'
import { toast } from 'react-toastify'
import {MDBBtn,MDBCard,MDBCardBody,MDBCol,MDBInput,MDBContainer,MDBRow} from 'mdb-react-ui-kit'

const Payment = () => {
  return (
    <MDBContainer className='py-5' fluid style={{backgroundImage:""}}>

        <MDBRow className='d-flex justify-content-center'>
            <MDBCol md="10" lg="8" xl="5">
                <MDBCard className='rounded-3'>
                    <MDBCardBody className='p-4'>
                        <div className='text-center mb-4'>
                            <h3>Settings</h3>
                            <h6>Payment</h6>
                        </div>

                        <p className='fw-bold mb-4 pb-2'>Saved Cards:</p>
                        <div className='d-flex flex-row align-items-center mb-4 pb-1'>
                            <img className='img-fluid' src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='Loading..'/>
                            <div className='flex-fill mx-3'>
                                <div className='form-outline'>
                                    <MDBInput
                                    label="Card Number"
                                    id='form1'
                                    type='text'
                                    size='lg'
                                    value="**** **** **** 0055" 
                                    />
                                </div>
                            </div>
                            <a href='#!'>Remove Card</a>
                        </div>
                        <div className='d-flex flex-row align-items-center mb-4 pb-1'>
                            <img className='img-fluid'
                            src="https://img.icons8.com/color/48/000000/visa.png"  alt='Loading...' />
                            <div className='flex-fill mx-3'>
                                <div className='form-outline'>
                                    <MDBInput label="Card Number"
                                    id='form2'
                                    type='text'
                                    size='lg'
                                    value="**** **** **** 1188"
                                    />
                                </div>
                            </div>
                            <a href='#!'>Remove Card</a>
                        </div>

                        <p className='fw-bold mb-4'>Add New Card:</p>

                        <MDBInput
                        label="Cardholder's Name"
                        id='form3'
                        type='text'
                        size='lg'
                        value="salim" 
                        />

                        <MDBRow className='my-4'>
                            <MDBCol size="7">
                                <MDBInput
                                label="Card Number" 
                                id='form4'
                                type='text'
                                size='lg'
                                value="1234 5678 9876 5432"
                                />
                            </MDBCol>
                            <MDBCol size="3">
                                <MDBInput label="Expire"
                                id='form5'
                                type='password'
                                size='lg'
                                placeholder='MM/YYYY'
                                />
                            </MDBCol>
                            <MDBCol size="2">
                                <MDBInput
                                label="CVV"
                                id='form6'
                                type='password'
                                size='lg'
                                placeholder='CVV' 
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn color='success' size='lg' block onClick={() => toast.success("payment success")}>Pay</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    
  )
}

export default Payment