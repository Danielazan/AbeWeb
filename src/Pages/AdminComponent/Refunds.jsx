import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import "./Style/Style.css";
import axios from "axios";
import base from "base.js";
import Navbar from "Components/NavbarAdmin";
import { useNavigate } from "react-router-dom";

function PurchasedOrder() {
  const [Customer, setCustomer] = useState([]);
  const [cart, setcart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${base.url}/api/order`).then((res) => {
      const json = res.data;
      setCustomer(json);
    });
  }, []);

  function VerticalModal(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            <h3>Items Table</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((stuff, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{stuff.name}</td>
                    <td>{stuff.price}</td>
                    <td>{stuff.quantity}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "rgb(1, 152, 122)" }}
            onClick={props.onHide}
            className='border-0'
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Navbar />

      <Container fluid className='Order'>
        <Container className='Refund'>
          <h1 className='text-center'>Orders</h1>

          <VerticalModal show={modalShow} onHide={() => setModalShow(false)} />
          <Row>
            {Customer &&
              Customer.map((item) => {
                return (
                  <Col className='d-flex justify-content-center'>
                    <Card
                      style={{ width: "18rem", height: "" }}
                      className='my-2 order-card'
                    >
                      <Card.Body className='rounded-1 p-0'>
                        <div>
                          <Card.Title
                            style={{
                              height: "6em",
                              backgroundColor: "rgb(1, 152, 122)",
                              color: "white",
                            }}
                            className='d-flex justify-content-center align-items-center text-uppercase'
                          >
                            {item.Name}
                          </Card.Title>
                        </div>
                        <ListGroup className='list-group-flush'>
                          <ListGroup.Item>
                            Phone : {item.PhoneNumber}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Address : {item.Address}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Total : {item.TotalAmount}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Items : {item.itemsOrdered.length}
                          </ListGroup.Item>
                        </ListGroup>
                        <Button
                          style={{
                            textDecoration: "none",
                            color: "white",
                            backgroundColor: " rgb(1, 123, 122, 0.8)",
                          }}
                          className='ms-3 px-2 py-1 rounded-2 mb-5'
                          onClick={() => {
                            setModalShow(true);
                            setcart(item.itemsOrdered);
                          }}
                        >
                          View Items
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default PurchasedOrder;
