import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  Modal,
  Button,
  Form
} from "react-bootstrap";
import "./Style/Style.css";
import axios from "axios";
import base from "base.js";
import Navbar from "Components/NavbarDark";
import img from "Assets/Images/pic14.svg";
import { useNavigate } from "react-router-dom";

function PurchasedOrder() {
  const [Customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState("");
  const [sup, setSup] = useState(true);
  const [date, setDate] = useState("");
  const [paid, setPaid] = useState("");
  const [colour, setColour] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios.get(`${base.url}/api/order`).then((res) => {
      const json = res.data;
      setCustomer(json);
      setLoading(false);
    });
  }, []);

  const NavSales = async () => {
    navigate("/Sales");
  };

  const edit = (id,pname,price) => {
    let data = {
      id: id,
      name:pname,
      price: price,
      supplied: sup,
      quantity: qty,
      date: date,
      paid: paid,
      type: type,
      colour: colour,
    };
    axios.patch(`${base.url}/api/order`, data).then((res) => {
      console.log(res.data)
    });
  };

  return (
    <React.Fragment>
      <Container fluid className='Order'>
        <Navbar />

        <Container>
          <h1 className="order-h1">Orders</h1>
          {loading ? (
            <center>
              <img className='my-3' src={img} alt='Loading...' height='80px' />
            </center>
          ) : null}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              {/* <Modal.Title>{item.Name}</Modal.Title> */}
            </Modal.Header>

            <Modal.Body>
              <Form.Control
                type='text'
                className='my-2'
                placeholder='Type'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              />

              <Form.Control
                type='text'
                className='my-2'
                placeholder='Colour'
                required
                value={colour}
                onChange={(e) => setColour(e.target.value)}
              />

              <Form.Control
                type='text'
                className='my-2'
                placeholder='Quantity'
                required
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />

              <Form.Control
                type='text'
                className='my-2'
                placeholder='Total Paid'
                required
                value={paid}
                onChange={(e) => setPaid(e.target.value)}
              />

              <Form.Group>
                <Form.Label className='form-label'>Supply Status</Form.Label>

                <div className='mb-3'>
                  <Form.Check
                    inline
                    label='Supplied'
                    name='supplied'
                    type='radio'
                    required
                    value={true}
                    defaultChecked
                    onClick={() => setSup(true)}
                  />

                  <Form.Check
                    inline
                    label='Not Supplied'
                    name='supplied'
                    required
                    type='radio'
                    value={false}
                    onClick={() => setSup(false)}
                  />
                </div>
              </Form.Group>

              <Form.Control
                type='date'
                className='my-2'
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>

              <Button
                variant='primary'
                onClick={edit}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <div className='d-lg-flex justify-content-between'>
            <Row>
              {Customer &&
                Customer.map((item) => {
                  return (
                    <Col
                      xs={12}
                      lg={4}
                      md={6}
                      className='d-flex justify-content-center'
                      key={item._id}
                    >
                      <Card
                        style={{ width: "18rem", height: "" }}
                        className='order-card my-3 rounded-2'
                      >
                        <Card.Body className='p-0 rounded-2'>
                          <div>
                            <Card.Title
                              style={{
                                height: "6em",
                                background:
                                  "linear-gradient(to left, rgb(3,23,50), rgb(2, 23, 50))",
                                color: "white",
                              }}
                              className='d-flex justify-content-center align-items-center text-uppercase rounded-1'
                            >
                              {item.Name}
                            </Card.Title>
                          </div>

                          <ListGroup className='list-group-flush'>
                            <ListGroup.Item className='bg-transparent'>
                              Phone : {item.PhoneNumber}
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent'>
                              Address : {item.Address}
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent'>
                              Total : {item.TotalAmount}
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent'>
                              Items : {item.itemsOrdered.length}
                            </ListGroup.Item>

                            <ListGroup.Item className=' bg-transparent'>
                              <Card.Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                  backgroundColor: " rgb(2, 23, 50, 0.9)",
                                  cursor: "pointer",
                                }}
                                className='px-5 py-1 rounded-2'
                                onClick={() => {
                                  setShow(true);
                                  edit(item._id, item.Name, item.Price);
                                }}
                              >
                                Edit
                              </Card.Link>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default PurchasedOrder;
