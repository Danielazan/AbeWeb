import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import Style from "./Style/Style.css"


function From() {
  return (
    <React.Fragment>
        <Row>
            <Col xs={12} lg={3}></Col>
            <Col xs={12} lg={6}>
                <Container>
                    <h1 className='form-h1'>Welcome Back</h1>
                    <p className='form-p'>Welcome back! Please enter your details</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Password </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Container fluid className='d-flex justify-content-between'>
                            <Form.Check style={{fontSize:"12px"}} type="checkbox" id="custom-switch" label="Remember For 30 days"/>

                            <Link Navigate to="/" className='form-label' style={{fontSize:"12px"}}>Forgot Password</Link>                    
                        </Container>

                        <Button variant='dark' className='w-100 mt-5'>Sign In</Button>
                    </Form>
                    <Container className='d-flex justify-content-around my-4'>
                        <p className='form-p'>Don't have an account?</p>

                        <Link Navigate style={{textDecoration:"none",fontWeight:"600",color:"black"}} to="/">Sign Up for Free</Link>
                    </Container>
                </Container>
            </Col>
            <Col xs={12} lg={3}></Col>
        </Row>
    </React.Fragment>
  )

}  
export default From