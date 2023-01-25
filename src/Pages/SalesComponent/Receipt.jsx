import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col,Button } from "react-bootstrap";
import { Br, Cut, Line, Printer, Text,  render } from 'react-thermal-printer';

const handlePrint = () => {
  window.print();
}

function Receipt(props) {
  return (
    <React.Fragment>
      <Container fluid className='Receipt'>
        <h3 className='text-center mb-4'>
          Authentic Roofing Tiles <br />{" "}
          <span style={{ fontSize: "14px" }}>Intercontinental Limited</span>
        </h3>
        <p className='text-black'>
          4<sup>th</sup> Line Shop G4 (Second Building) Enugu South
          International Building Material Market, Ugwuaji Enugu
        </p>

        <h6>
          Phone : 080-367-778-66,
          <br />
          091-340-839-67
        </h6>

        <h2 className='py-4'>Sales Invoice</h2>

        <p className='text-black'>
          Customer : {props.datar && props.datar.FirstName}
          {props.datar && props.datar.LastName}
        </p>
        <p className='text-black'>
          Invoice Number : {props.datar && props.datar.InvoiceNumber}
        </p>

        <Row className='rec-row py-2'>
          <Col xs={1} className='text-center'>
            Qty
          </Col>

          <Col xs={6} className='text-center'>
            Des
          </Col>

          <Col xs={2} className='text-center'>
            Price
          </Col>

          <Col xs={3} className='text-center'>
            Total
          </Col>
        </Row>

        {props.datar &&
          props.datar.itemsBought.map((item, index) => {
            return (
              <Row key={index} className='py-2'>
                <Col xs={1} className='text-center'>
                  {item.quantity}
                </Col>

                <Col xs={6} className='text-center'>
                  {item.item}
                </Col>

                <Col xs={2} className='text-center'>
                  {item.sold}
                </Col>

                <Col xs={3} className='text-center'>
                  {item.sold * item.quantity}
                </Col>
              </Row>
            );
          })}

        <Row style={{ borderTop: "2px solid black" }} className='mt-4 py-2'>
          <Col xs={1} className='text-center'>
            Total
          </Col>
          <Col xs={8}></Col>
          <Col xs={3} className='text-center'>
            {props.datar && props.datar.TotalAmountPaid}
          </Col>
        </Row>

        <p className='text-black'>
          Cashier : {props.datar && props.datar.RecievedBy}
        </p>
        <h6>Thanks For Your Patronage...</h6>
        <Button onClick={handlePrint}>Print</Button>
      </Container>
      
    </React.Fragment>
  );
}

export default Receipt;
