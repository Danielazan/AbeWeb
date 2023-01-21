import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import "./Style/Style.css";
import axios from "axios";
import base from "base.js";
import Navbar from "Components/NavbarDark";
import { useNavigate } from "react-router-dom";

function PurchasedOrder() {
  const [Customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${base.url}/api/order`).then((res) => {
      const json = res.data;

      // dispatch({ type: "SET Product", payload: json });
      setCustomer(json);

    });
  }, []);

  const NavSales = async () => {
    navigate("/Sales");
  };

  return (
    <React.Fragment>
      <Container fluid className='Order'>
        <Navbar />

        <Container>
          <div className='d-lg-flex justify-content-between'>
            <Row>
              {Customer &&
                Customer.map((item) => {
                  return (
                    <Col className='d-flex justify-content-center'>
                      <Card
                        style={{ width: "18rem", height: "" }}
                        className='order-card'
                      >
                        <Card.Body className='rounded-1 p-0'>
                          <div>
                            <Card.Title
                              style={{
                                height: "6em",
                                backgroundColor: "rgb(2, 23, 50)",
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
                              {" "}
                              Items : {item.itemsOrdered.length}
                            </ListGroup.Item>
                          </ListGroup>

                          <Card.Link
                            style={{
                              textDecoration: "none",
                              color: "white",
                              backgroundColor: " rgb(2, 23, 50, 0.8)",
                            }}
                            className='ms-3 px-2 py-1 rounded-2 mb-5'
                            onClick={NavSales}
                          >
                            Card Link
                          </Card.Link>
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
