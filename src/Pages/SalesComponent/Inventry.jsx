import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Modal, Button, Form } from "react-bootstrap";
import "./Style/Style.css";
import axios from "axios";
import Navbar from "Components/NavbarDark";
import img from "Assets/Images/pic14.svg";
import base from "base";

function Inventory() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState(undefined)
  const [qty, setQty] = useState("");
  const [date, setDate] = useState("")

  useEffect(() => {
    axios.get(`${base.url}/api/material`).then((res) => {
      setMaterials(res.data);
      setLoading(false);
    });
  }, []);

  const handleInventory = async (item) => {

    const detail = {
      Name: item.Name,
      Inventries: [qty],
    };

    await axios.post(`${base.url}/api/inventry`, detail).then((res)=>{
      console.log(res)
    });
    setQty("");
    setDate("")
  };

  return (
    <>
      <Container fluid className='Order'>
        <Navbar />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{temp && temp.Name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              type='text'
              className='my-2'
              placeholder='Quantity'
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />

            <Form.Control
              type='date'
              className='my-2'
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
              onClick={() => handleInventory(temp)}
            >
              Save Changes
            </Button> *
          </Modal.Footer>
        </Modal>

        <Container>
          <h1 className='invent-h1 pb-3'>Inventory</h1>
          {loading ? (
            <center>
              <img src={img} alt='Loading...' height='80px' />
            </center>
          ) : null}
          <ol className='inven-ol'>
            <Row>
              {materials &&
                materials.map((item, index) => (
                  <Col key={index} xs={12} lg={4} md={6}>
                    <li
                      onClick={() => {
                        handleShow()
                        setTemp(item)
                      }}
                      className='inven-li my-3'
                    >
                      <h3 className='inven-h3'>{item.Name}</h3>
                      <p className='inven-p'>Price : {item.Price}</p>
                    </li>
                  </Col>
                ))}
            </Row>
          </ol>
        </Container>
      </Container>
    </>
  );
}

export default Inventory;
