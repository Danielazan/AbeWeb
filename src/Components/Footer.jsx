import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col} from "react-bootstrap"

function Footer() {
  return (
    <React.Fragment>

        <Container fluid className='footer mt-5'>
           <Row>
                <Col xs={12} lg={3}></Col>

                <Col xs={12} lg={6}>
                    <Container className='text-center my-5 py-2'>
                        <p>Copyright 0 2022 - Company Name</p>
                    </Container>
                </Col>

                <Col xs={12} lg={3}></Col>

           </Row>
        </Container>
        
    </React.Fragment>
  )
}

export default Footer