import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form,Table} from "react-bootstrap"
import Style from "./Style/Style.css"
import Navbar from 'Components/Navbar'

function Sales() {
  return (
    <React.Fragment>
    <Container fluid className='Sales'>
    <Navbar/>
        <Container>
        <div className='d-flex align-items-end justify-content-between'>
        <p>Search For Desired Product</p>
        <Form.Control type="search" className='w-25 rounded-3 bg-white' placeholder="Search For Product" />
      
        </div>
            <Row className='mt-5'>
                <Col xs={12} className="">
                   <Row style={{borderBlock:"2px solid rgb(5, 96, 189)",fontWeight:"600"}} className="py-3">
                        <Col xs={3}>S/N</Col>
                        <Col xs={3}>Product</Col>
                        <Col xs={3}>Price</Col>
                        <Col xs={3}>Quantity</Col>
                   </Row>
                </Col>

                <Col xs={12} xl={9}>
                
                </Col>

                <Col xs={12} xl={3} >
                    <div className='mt-5'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Total</th>
                                <td>900</td>
                            </tr>
                        </thead>
                    </Table>
                    <Button className='w-100 rounded-pill py-3' style={{backgroundColor:"rgb(5, 96, 189)"}}>Checkout</Button>
                    </div>
                </Col>

            </Row>
        </Container>
    </Container>

    </React.Fragment>
  )
}

export default Sales
