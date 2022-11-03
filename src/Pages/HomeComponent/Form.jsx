import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import {BsPhone} from "react-icons/bs"

function Forms() {
  return (
    <React.Fragment>
        <Container fluid className='form-body'>

            <Row>

                <Col xs={12} lg={3}></Col>

                <Col xs={12} lg={6}>

                    <Container className='text-center mt-5 pt-5'>

                        <h3>Let's Get In Touch!</h3>

                        <center><hr className='banner-line my-4'/></center>

                        <p className='para'>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Full Name" className='py-3 bg-transparent' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email Address" className='py-3 bg-transparent' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="number" placeholder="Phone Number" className='py-3 bg-transparent' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" className='bg-transparent' rows={8} />
                            </Form.Group>

                            <Button className='form-btn py-3 rounded-pill mb-5'>SUBMIT</Button>

                            <BsPhone size={"3em"}/>

                            <h5 className='my-3'>+1 (555) 123-4567</h5>

                        </Form>

                    </Container>

                </Col>

                <Col xs={12} lg={3}></Col>

            </Row>

        </Container>
    </React.Fragment>
  )
}

export default Forms