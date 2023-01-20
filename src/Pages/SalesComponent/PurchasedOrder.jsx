import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import "./Style/Style.css";
import axios from "axios";
import base from "base.js";
import Navbar from "Components/NavbarDark";
import { useNavigate } from "react-router-dom";

function PurchasedOrder(props) {
  const [cartItems, setCartItems] = useState([]);
  const [Customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${base.url}/api/order`).then((res) => {
      const json = res.data;

      // dispatch({ type: "SET Product", payload: json });
      setCustomer(json);

      console.log(json);
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
                    <Col>
                      <Card style={{ width: "18rem" }} className='mb-2'>
                        <Card.Body>
                          <Card.Title>{item.Name}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className='list-group-flush'>
                          <ListGroup.Item>Cras justo odio</ListGroup.Item>
                          <ListGroup.Item>
                            Dapibus ac facilisis in
                          </ListGroup.Item>
                          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                          <Card.Link onClick={NavSales}>Card Link</Card.Link>
                          <Card.Link href='#'>Another Link</Card.Link>
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
