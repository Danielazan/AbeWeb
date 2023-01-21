import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form, Table,Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/Style.css";
import axios from "axios";
import base from "base.js";
import { IoIosAddCircle } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import Navbar from "Components/NavbarDark";
import { useProductContext } from "Hook/useProduct";
import Sales from "./Sales";

function Order() {
  const [name, setName] = useState("");
  const [addy, setAddy] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [qty, setQty] = useState("");
  const [sup, setSup] = useState("");
  const [prod, setProd] = useState("");
  // const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { Product, dispatch } = useProductContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get(`${base.url}/api/material`).then((res) => {
      const json = res.data;

      dispatch({ type: "SET Product", payload: json });

      console.log(Product);
    });
  }, [dispatch]);

  const handleOrder = (id,name, price) => {
    
    let data = {
      id:id,
      name: name,
      price: price,
      supplied:sup,
      quantity:qty
    };

    const details={
      Name:name,
      Address:addy,
      PhoneNumber:phone,
      Email:mail,
      TotalAmount:200,
      Price:0,
      itemsOrdered:cartItems
    }
    
    setCartItems([...cartItems, data]);

    console.log(cartItems);

    axios.post(`${base.url}/api/report`,details).then((res) => {
      console.log(res.data)
    })

    setQty("")
    setSup("")

    handleClose()

  };

  

  return (
    <React.Fragment>
      <Container fluid className='Order'>
        <Navbar />

        <Container>
          <div className='d-lg-flex justify-content-between'>
            <section>
              <h3>
                Authentic Roofing Tiles <br />
                <span style={{ fontSize: "14px" }}>
                  Intercontinental Limited
                </span>
              </h3>

              <h6 className='text-dark'>
                4<sup>th</sup> Line, Shop G4 <br /> Enugu South International{" "}
                <br /> Building Market Ugwuaji, Enugu
              </h6>

              <h6 className='mt-3'>
                080-367-778-66,
                <br />
                091-340-839-67
              </h6>

              <Link
                to='/Sales'
                style={{ textDecoration: "none", color: "red" }}
              >
                <Button
                  style={{ backgroundColor: "rgb(2, 23, 50)" }}
                  className='border-0'
                >
                  Actual Purchases
                </Button>
              </Link>
            </section>

            <section className='mt-5 mt-lg-0'>
              <h1>PURCHASE ORDER</h1>
              <Table striped bordered hover width='100%'>
                <thead>
                  <tr
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      color: "white",
                    }}
                  >
                    <th>NUMBER</th>
                    <th>DATE</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>120233</td>
                    <td>45552</td>
                  </tr>
                </tbody>
              </Table>
            </section>
          </div>

          <div className='d-none'>
            <Sales cartItems={cartItems} />
          </div>

          <Container className='Order-main mt-3 p-4 rounded-1'>
            {/* Customer Form */}
            <div>
              <h5
                style={{
                  backgroundColor: "rgb(2, 23, 50)",
                  color: "white",
                }}
                className='p-2 rounded-1'
              >
                CUSTOMER
              </h5>
              <Form>
                <Form.Group
                  className='mt-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Name </Form.Label>

                  <Form.Control
                    type='text'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className='mt-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Address </Form.Label>

                  <Form.Control
                    type='text'
                    placeholder='Enter Your Address'
                    value={addy}
                    onChange={(e) => setAddy(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className='mt-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Phone Number</Form.Label>

                  <Form.Control
                    type='number'
                    placeholder='Enter Your Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className='mt-3 mb-4'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Email </Form.Label>

                  <Form.Control
                    type='email'
                    placeholder='Enter Your Email Address'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </div>
          </Container>
          {/* Search Results For Products */}
          <div className='mt-5'>
            {Product &&
              Product.filter((item) => {
                return prod.toLowerCase() === ""
                  ? item
                  : item.Name.toLowerCase().includes(prod);
              }).map((item) => (
                <div
                  key={item._id}
                  className={`${
                    prod.toLowerCase() === "" ? "d-none" : "d-block"
                  } rounded-1 result p-2 my-2`}
                >
                  <div className='d-flex justify-content-between'>
                    <h5 style={{ color: "white" }}>{item.Name} </h5>
                    <h6 style={{ color: "white" }}>{item.collectionName}</h6>
                    <h6 style={{ color: "white" }}>
                      <TbCurrencyNaira size={"1.5em"} />
                      {item.Price}
                    </h6>

                    <Button variant="primary" onClick={handleShow}>
                        <IoIosAddCircle
                          size={"1.5em"}
                          style={{ color: "white" }}
                        />
                      </Button>

                      <Modal show={show} onHide={handleClose}>

                        <Modal.Header closeButton>
                          <Modal.Title>{item.Name}</Modal.Title>
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
                                type='text'
                                className='my-2'
                                placeholder='Supplied'
                                value={sup}
                                onChange={(e) => setSup(e.target.value)}
                              />

                            <Form.Control
                                type='text'
                                className='my-2'
                                placeholder='Carried'
                                value={sup}
                                onChange={(e) => setSup(e.target.value)}
                              />

                            <Form.Control
                                type='text'
                                className='my-2'
                                placeholder='Paid'
                                value={sup}
                                onChange={(e) => setSup(e.target.value)}
                              />


                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>

                          <Button variant="primary" onClick={() =>
                        handleOrder(item._id, item.Name, item.Price)
                      }>
                            Save Changes
                          </Button>

                        </Modal.Footer>
                      </Modal>
                  </div>
                </div>
              ))}
          </div>

          <section>
            <div
              className='rounded-1 d-flex justify-content-between mt-5 mb-1 p-3'
              style={{
                backgroundColor: "rgb(2, 23, 50)",
                color: "white",
              }}
            >
              <h2 className='p-2'>Shopping Terms</h2>

              <div className='d-flex align-items-end justify-content-between'>
                <Form.Control
                  type='search'
                  value={prod}
                  onChange={(e) => setProd(e.target.value)}
                  className='w-100 rounded-3 bg-white'
                  placeholder='Search For Product'
                />
              </div>
            </div>

            <Table striped bordered hover className='Order-table'>
              <thead>
                <tr>
                  <th className='text-center'>S/N</th>
                  <th className='text-center'>Product</th>
                  <th className='text-center'>Unit Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                  cartItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className='text-center'>{index + 1}</td>
                        <td>{item.name}</td>
                        <td className='text-center'>{item.price}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </section>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Order;
