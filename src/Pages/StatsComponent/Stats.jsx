import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";

function Stats() {
  return (
    <React.Fragment>
      <Container fluid className='Stats'>
        <Navbar />
        <Container>
          <h2 className='Stats-h2'>Stats</h2>

          <Row
            style={{
              borderBlock: "3px solid #2e180e",
              fontWeight: "600",
            }}
            className='py-3 mt-3'
          >
            <Col className='text-center' xs={2}>
              Date
            </Col>

            <Col className='text-center' xs={2}>
              Reg No
            </Col>

            <Col className='text-center' xs={3}>
              Stock In
            </Col>

            <Col className='text-center' xs={3}>
              Stock Out
            </Col>

            <Col className='text-center' xs={2}>
              Balance
            </Col>
          </Row>

          <Row className='py-4 tb-row'>
            <Col className='text-center' xs={2}>
              01/11/22
            </Col>

            <Col className='text-center' xs={2}>
              001
            </Col>

            <Col className='text-center' xs={3}>
              3000
            </Col>

            <Col className='text-center' xs={3}></Col>

            <Col className='text-center' xs={2}></Col>
          </Row>

          <Row className='py-4 tb-row'>
            <Col className='text-center' xs={2}>
              02/11/22
            </Col>

            <Col className='text-center' xs={2}>
              0456
            </Col>

            <Col className='text-center' xs={3}>
             
            </Col>

            <Col className='text-center' xs={3}>20</Col>

            <Col className='text-center' xs={2}>298</Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Stats;
