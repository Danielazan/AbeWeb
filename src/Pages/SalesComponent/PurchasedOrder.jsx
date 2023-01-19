import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Table, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/Style.css";
import axios from "axios";
import base from "base.js";
import { IoIosAddCircle } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import Navbar from "Components/NavbarDark";
import { useProductContext } from "Hook/useProduct";
import Sales from "./Sales";
import { useNavigate } from 'react-router-dom'

function PurchasedOrder(props) {
  const [name, setName] = useState("");
  const [addy, setAddy] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [caddy, setcAddy] = useState("");
  const [cphone, setcPhone] = useState("");
  const [cmail, setcMail] = useState("");
  const [prod, setProd] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [Customer, setCustomer] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${base.url}/api/order`).then((res) => {
      const json = res.data;

      // dispatch({ type: "SET Product", payload: json });
      setCustomer(json)

       console.log(json);
    });
  }, []);

  const NavSales = async ()=>{
    navigate('/Sales')
  }

//   const handleOrder = (id,name, price) => {
//     let data = {
//       id:id,
//       name: name,
//       price: price,
//     };

//     setCartItems([...cartItems, data]);

//     console.log(cartItems);
//   };

  return (
    <React.Fragment>
      <Container fluid className='Order'>
        <Navbar />

        <Container>
          <div className='d-lg-flex justify-content-between'>
            <Row>
              {
                Customer && Customer.map(item =>{
                  return (
                    <Col>
                        <Card style={{ width: '18rem' }} className="mb-2">
                              <Card.Body>
                            <Card.Title>
                              {item.Name}  
                            </Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Card.Link onClick={NavSales}>Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                          </Card.Body>
                    </Card>

                    
                      </Col>
                  )
                })
              }
                
        
            </Row>
        </div>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default PurchasedOrder;
