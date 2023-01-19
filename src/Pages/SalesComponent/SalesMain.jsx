import React, { useState } from 'react'
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import Sales from "./Sales";
import  PurchasedOrder from "./PurchasedOrder"
import Order from "./Order"
import { Container,ListGroup, Row, Col, Button,Offcanvas, NavDropdown, Alert} from 'react-bootstrap'

function SalesMain() {
  const [show, setShow] = useState(false);
  const [View, setView] = useState(<Order/>)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setPurchase = async ()=>{
    setView (<PurchasedOrder/>)
  }
  return (
    <React.Fragment>
       <Navbar />
        <Container fluid className='SalesMain '>
        
       <Row className="">

        <Col xs={2} md={1} className="mt-1">
        <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sales Mangemaent</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <ListGroup className="SalesListGroup">
      <div className="listitem">No style</div>
      <div className="listitem">Primary</div>
      <div onClick={setPurchase} className="listitem">
        Purchased Order
      </div>
      <div className="listitem" >
        Not Supplied 
      </div>
      <div className="listitem" >
        Danger
      </div>
      <div >
        Warning
      </div>
      <div className="listitem">
        Info
      </div>
      <div className="listitem">
        Light
      </div>
      <div className="listitem">
        Dark
      </div>
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
        </Col>
        <Col xs={11} md={11}>
          {View}
        </Col>
        
      </Row>
    </Container>
    </React.Fragment>
  )
}

export default SalesMain
