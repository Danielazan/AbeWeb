import React, { useState } from 'react'
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import  PurchasedOrder from "./PurchasedOrder"
import { HiMenuAlt1 } from "react-icons/hi";
import Order from "./Order"
import Sales from "./Sales"
import { Container,ListGroup, Row, Col, Button,Offcanvas} from 'react-bootstrap'

function SalesMain() {
  const [show, setShow] = useState(false);
  const [View, setView] = useState(<Order/>)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setActual = async ()=>{
    setView (<Sales/>)
  }

  const setPurchase = async ()=>{
    setView (<PurchasedOrder/>)
  }
  return (
    <React.Fragment>
      <Navbar />
      <Container fluid className='SalesMain '>
        <Row className=''>
          <Col xs={2} lg={1} className='mt-1'>
            <Button
              className='d-lg-none bg-transparent border-0'
              onClick={handleShow}
            >
              <HiMenuAlt1 size={"2em"} style={{ color: "021732" }} />
            </Button>
            <Offcanvas show={show} onHide={handleClose} responsive='lg'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Sales Mangemaent</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ListGroup variant="flush" className='SalesListGroup'>
                  <ListGroup.Item onClick={setPurchase} className='listitem mt-lg-5'>
                    Purchase Order
                  </ListGroup.Item>
                  <ListGroup.Item onClick={setActual}>Actual Order</ListGroup.Item>
                  <ListGroup.Item>Not Supplied</ListGroup.Item>
                 
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col xs={12} lg={11}>
            {View}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SalesMain
