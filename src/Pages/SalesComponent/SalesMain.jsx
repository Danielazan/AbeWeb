import React, { useState } from 'react'
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import  PurchasedOrder from "./PurchasedOrder"
import { HiMenuAlt1 } from "react-icons/hi";
import Order from "./Order"
import Sales from "./Sales"
import { Container,ListGroup, Row, Col, Button,Offcanvas} from 'react-bootstrap'
import Inventry from "./Inventry"

function SalesMain() {
  const [show, setShow] = useState(false);
  const [View, setView] = useState(<Order/>)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setActual = async ()=>{
    setView (<Sales/>)
  }

  const setOrder = async () => {
    setView(<Order />);
  };

  const setPurchase = async ()=>{
    setView (<PurchasedOrder/>)
  }

  const setInventry = async ()=>{
    setView(<Inventry/>)
  }
  return (
    <React.Fragment>
      <Navbar />
      <Container fluid className='SalesMain '>
        <Row>
          <Col xs={0} lg={1} className='mt-1 colo'>
            <Button
              className='d-lg-none bg-transparent border-0'
              onClick={handleShow}
            >
              <HiMenuAlt1 size={"2em"} style={{ color: "rgb(2, 23, 50)" }} />
            </Button>
            <Offcanvas
              style={{ backgroundColor: "rgb(2, 23, 50)", color: "white" }}
              show={show}
              onHide={handleClose}
              responsive='lg'
            >
              <Offcanvas.Header closeButton variant='light'>
                <Offcanvas.Title className='text-white'>
                  Sales Mangemaent
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: "rgb(2, 23, 50)" }}>
                <ListGroup
                  style={{ backgroundColor: "rgb(2, 23, 50)" }}
                  variant='flush'
                  className='SalesListGroup m-0 p-0'
                >
                  <ListGroup.Item
                    className='px-0 mt-lg-5 sales-item'
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      cursor: "pointer",
                    }}
                    onClick={setOrder}
                  >
                    Sales Form
                  </ListGroup.Item>

                  <ListGroup.Item
                    onClick={setPurchase}
                    className='px-0 sales-item'
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      cursor: "pointer",
                    }}
                  >
                    Purchased Order
                  </ListGroup.Item>
                  <ListGroup.Item
                    className='px-0 sales-item'
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      cursor: "pointer",
                    }}
                    onClick={setActual}
                  >
                    Actual Order
                  </ListGroup.Item>

                  <ListGroup.Item
                    className='px-0 sales-item'
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      cursor: "pointer",
                    }}
                    onClick={setInventry}
                  >
                    Inventory
                  </ListGroup.Item>
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
