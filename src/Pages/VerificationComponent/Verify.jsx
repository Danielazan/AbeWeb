import React from 'react'
import {Form,Col,Row,Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import Style from "./Style/Style.css"

function Verify() {
  return (
    <React.Fragment>
    <div className="rrr">
    <Container className='ver'>
          <Row>
              <Col xs={1} lg={3}></Col>
              <Col xs={10} lg={6}>
                <h1 className='ver-h1'>Verify Your Profile</h1>

                <p className='text-c'>Check Your Email To Get Your Verification Details</p>

                <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>One-Time Password </Form.Label>
                        <Form.Control type="password" placeholder="Type Your OTP" />

                        <p className='ver-p pt-2 text-c mt-1'>Verify Your Email</p>
                    </Form.Group>


                    <Button className='w-100 mt-5 sign-btn py-2'>Verify</Button>
                </Form>

                <div className="d-flex my-4 justify-content-center">
                  <p className='text-black'>Already have an account?</p>

                  <Link Navigate to="/Login" className='sign-link mx-2'>Log In</Link>
                </div>
              </Col>
              <Col xs={1} lg={3}></Col>
          </Row>
        </Container>  
        </div>
    </React.Fragment>
  )
}

export default Verify