import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import axios from "axios";

function Stats() {
  const [materials, setmaterials] = useState([]);
  const [rfno, setRfno] = useState("");
  const [balance, setBalance] = useState("")

  useEffect(() => {
    getp();
  }, []);

  function getp() {
    axios.get("https://abe-api.onrender.com/api/material").then((res) => {
      setmaterials(res.data);

      console.log(res.data);
    });
  }

  return (
    <React.Fragment>
      <Container fluid className='Stats'>
        <Navbar />
        <Container>
          {/* Product Table */}

          <h2 className='Stats-h2'>Products</h2>

          <Row
            style={{
              borderBlock: "3px solid #2e180e",
              fontWeight: "600",
            }}
            className='py-3 mt-3'
          >
            <Col className='text-center trun' xs={3}>
              Name
            </Col>

            <Col className='text-center trun' xs={2}>
              Collection
            </Col>

            <Col className='text-center trun' xs={2}>
              Prev Batch
            </Col>

            <Col className='text-center trun' xs={2}>
              New Batch
            </Col>

            <Col className='text-center trun' xs={3}>
              Total Quantity
            </Col>
          </Row>

          {materials &&
            materials.map((item) => {
              return (
                <Row className='py-4 tb-row' key={item._id}>
                  <Col className='text-center' xs={3}>
                    {item.Name}
                  </Col>

                  <Col className='text-center' xs={2}>
                    {item.collectionName}
                  </Col>

                  <Col className='text-center' xs={2}>
                    {item.PreviousBatch}
                  </Col>

                  <Col className='text-center' xs={2}>
                    {item.NewBatch}
                  </Col>

                  <Col className='text-center' xs={3}>
                    {item.TotalBatch}
                  </Col>
                </Row>
              );
            })}

          {/* Stats Table */}

          <div className='mt-5'>
            <h2 className='Stats-h2'>Stats</h2>
            <Row>
              <Col xs={12} xl={7}>
                <Row
                  style={{
                    borderBlock: "3px solid #2e180e",
                    fontWeight: "600",
                  }}
                  className='py-3 mt-3'
                >
                  <Col className='text-center trun' xs={2}>
                    Date
                  </Col>

                  <Col className='text-center trun' xs={2}>
                    Ref No
                  </Col>

                  <Col className='text-center trun' xs={3}>
                    Stock In
                  </Col>

                  <Col className='text-center trun' xs={3}>
                    Stock Out
                  </Col>

                  <Col className='text-center trun' xs={2}>
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

                  <Col className='text-center' xs={3}></Col>

                  <Col className='text-center' xs={3}>
                    20
                  </Col>

                  <Col className='text-center' xs={2}>
                    298
                  </Col>
                </Row>
              </Col>

              <Col xs={12} xl={5}>
                <Form className='ms-xl-3'>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label className='form-label'>Ref No.</Form.Label>

                    <Form.Control
                      type='number'
                      value={rfno}
                      onChange={(e) => setRfno(e.target.value)}
                      placeholder='Enter Ref Number'
                    />
                  </Form.Group>

                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label className='form-label'>
                      Balance
                    </Form.Label>

                    <Form.Control
                      type='number'
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                      placeholder='Enter Balance'
                    />

                    <div className="d-flex justify-content-center">
                      <Button
                        style={{ backgroundColor: "rgb(26, 20, 100)" }}
                        className='w-75 mt-5 border-0 py-4 rounded-pill mb-5'
                      >
                        Submit
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Stats;
