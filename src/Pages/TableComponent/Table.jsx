import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from "Components/NavbarSales";
import axios from "axios";

import "./Style/Style.css";
function Table() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://abe-api.onrender.com/api/customer")
    .then(res=>{
      console.log(res.data)

      setCustomers(res.data)
    })
  
  }, [])
  
  return (
    <React.Fragment>
      <Container fluid className='Tab'>
        <Navbar />
        <Container >

        <h1>Purchases</h1>
          <Row
            style={{
              borderBlock: "3px solid #2e180e",
              fontWeight: "600",
            }}
            className='py-3 mt-3'
          >
            <Col className='text-center trun' xs={2}>Customer Name</Col>
            <Col className='text-center trun' xs={2}>Phone Number</Col>
            <Col className='text-center trun' xs={3}>Items Bought</Col>
            <Col className='text-center trun' xs={1}>Total Amount Paid</Col>
            <Col className='text-center trun' xs={2}>Invoice Number</Col>
            <Col className='text-center trun' xs={1}>Site Location</Col>
            <Col className='text-center trun' xs={1}>Payment Method</Col>
          </Row>

          {
            customers && customers.map((custom)=>{
              return (
                <Row className='py-4 tb-row' key={custom._id}>
                  <Col xs={2}>
                    {custom.FirstName} {custom.LastName}
                  </Col>

                  <Col xs={2} className='text-center trun'>
                    {custom.PhoneNumber}
                  </Col>

                  <Col xs={3}>
                    {custom.itemsBought.map((item) => (
                      <ul>
                        <li style={{ listStyleType: "disc" }}>
                          {item.item} x {item.quantity}
                        </li>
                      </ul>
                    ))}
                  </Col>

                  <Col xs={1} className='text-center'>
                    {custom.TotalAmountPaid}
                  </Col>
                  <Col xs={2} className='text-center trun'>
                    {custom.InvoiceNumber}
                  </Col>
                  <Col xs={1} className='text-center'>
                    {custom.SiteLocation}
                  </Col>
                  <Col xs={1} className='text-center'>
                    {custom.PaymentMethod}
                  </Col>
                </Row>
              );
            })
          }
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Table;
