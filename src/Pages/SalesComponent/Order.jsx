import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import "./Style/Style.css";
import Navbar from "Components/NavbarDark";

function Order(props) {
  const [name, setName] = useState("");
  const [addy, setAddy] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [caddy, setcAddy] = useState("");
  const [cphone, setcPhone] = useState("");
  const [cmail, setcMail] = useState("");
  return (
    <React.Fragment>
      <Container fluid className='Order'>
        <Navbar />

        <Container>
          <div className='d-lg-flex justify-content-between'>
            <section>
              <h3>
                Authentic Roofing Tiles <br />{" "}
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

          <Container className='Order-main mt-3 rounded-1'>
            <Row>
              <Col xs={12} lg={6}>
                <div>
                  <h5
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      color: "white",
                    }}
                    className='p-2'
                  >
                    VENDOR
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
                      <Form.Label className='form-label'>
                        Phone Number{" "}
                      </Form.Label>

                      <Form.Control
                        type='number'
                        placeholder='Enter Your Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className='mt-3 mb-4 mb-lg-0'
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
              </Col>

              <Col xs={12} lg={6}>
                <div>
                  <h5
                    style={{
                      backgroundColor: "rgb(2, 23, 50)",
                      color: "white",
                    }}
                    className='p-2'
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
                        value={props.datar && props.datar.FirstName}
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
                        value={caddy}
                        onChange={(e) => setcAddy(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className='mt-3'
                      controlId='exampleForm.ControlInput1'
                    >
                      <Form.Label className='form-label'>
                        Phone Number
                      </Form.Label>

                      <Form.Control
                        type='number'
                        placeholder='Enter Your Phone Number'
                        value={cphone}
                        onChange={(e) => setcPhone(e.target.value)}
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
                        value={cmail}
                        onChange={(e) => setcMail(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>

          <section>
            <h2
              style={{
                backgroundColor: "rgb(2, 23, 50)",
                color: "white",
              }}
              className='mt-5 p-2'
            >
              Shopping Terms
            </h2>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>S/N</th>
                  <th className='text-center'>Product</th>
                  <th className='text-center'>Quantity</th>
                  <th className='text-center'>Unit Price</th>
                  <th className='text-center'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {props.datar &&
                  props.datar.itemsBought.map((item, index) => {
                    return (
                      <tr>
                        <td className='text-center'>{index + 1}</td>
                        <td>{item.item}</td>
                        <td className='text-center'>{item.quantity}</td>
                        <td className='text-center'>{item.sold}</td>
                        <td className='text-center'>
                          {item.sold * item.quantity}
                        </td>
                      </tr>
                    );
                  })}

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>Total : {props.datar && props.datar.TotalAmountPaid}</th>
                </tr>
              </tbody>
            </Table>
          </section>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Order;
