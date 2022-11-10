import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import {Link} from "react-router-dom"

function Sign() {
  return (
    <React.Fragment>
        <Container className='sign'>
          <Row>
              <Col xs={12} lg={1}></Col>
              <Col xs={12} lg={10}>
                <h1 className='sign-h1'>Sign Up</h1>

                <p className='form-p'>Start Turning Your Ideas To Reality</p>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Password </Form.Label>
                        <Form.Control type="password" placeholder="Create Password" />

                        <p className='sign-p form-p mt-1'>Must be at least 8 characters</p>
                    </Form.Group>


                    <Button className='w-100 mt-5 sign-btn py-2'>Create Account</Button>
                </Form>

                <div className="d-flex my-4 justify-content-center">
                  <p className='form-p'>Already have an account?</p>

                  <Link Navigate to="/Login" className='sign-link mx-2'>Log In</Link>
                </div>
              </Col>
              <Col xs={12} lg={1}></Col>
          </Row>
        </Container>  
    </React.Fragment>
  )
}

export default Sign