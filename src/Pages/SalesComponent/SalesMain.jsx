import React, { useState } from 'react'
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import Sales from "./Sales";
import Order from "./Order"
import { Container,ListGroup, Row, Col, Button,Offcanvas, NavDropdown, Alert} from 'react-bootstrap'

function SalesMain() {
  const [show, setShow] = useState(false);
  const [View, setView] = useState(<Order/>)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
       <Navbar />
        <Container fluid className='SalesMain '>
        
       <Row className="mt-6">
        <Col xs={6} md={1} className="mt-1">
        <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>



      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sales Mangemaent</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <ListGroup className="SalesListGroup">
      <ListGroup.Item className="listitem">No style</ListGroup.Item>
      <ListGroup.Item className="listitem">Primary</ListGroup.Item>
      <ListGroup.Item action className="listitem">
        Secondary
      </ListGroup.Item>
      <ListGroup.Item className="listitem" >
        Success
      </ListGroup.Item>
      <ListGroup.Item className="listitem" >
        Danger
      </ListGroup.Item>
      <ListGroup.Item >
        Warning
      </ListGroup.Item>
      <ListGroup.Item className="listitem">
        Info
      </ListGroup.Item>
      <ListGroup.Item className="listitem">
        Light
      </ListGroup.Item>
      <ListGroup.Item className="listitem">
        Dark
      </ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
        </Col>
        <Col xs={6} md={7}>
          {View}
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </Container>
    </React.Fragment>
  )
}

export default SalesMain
