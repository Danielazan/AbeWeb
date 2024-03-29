import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";
import IteamHook from "Hook/IteamHook";
import UserHook from "Hook/UserHook";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import base from "base.js";
import Receipt from "./Receipt";

function SalesForm(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [driver, setDriver] = useState("");
  const [site, setSite] = useState("");
  const [payment, setPayment] = useState("");
  const [sales, setSales] = useState("");
  const [supplied, setSupplied] = useState(true);
  const [datar, setDatar] = useState(null);
  const { iteam } = IteamHook();

  const submitCustomer = async () => {
    let data = {
      DriverName: driver,
      FirstName: first,
      LastName: last,
      PhoneNumber: phone,
      SiteLocation: site,
      InvoiceNumber: props.invoice,
      PaymentMethod: payment,
      Refunds: [],
      DateOfSupplied: new Date(),
      RecievedBy: sales,
      supplied: supplied,
      TotalAmountPaid: props.price,
      itemsBought: iteam,
    };


    console.log(iteam)

    setDatar(data);

    await axios.post(`${base.url}/api/customer`, data).then((res) => {
      console.log(res.data);
    });

    await iteam.map(async (ele) => {
      const id = ele._id;

      const sky = {
        Quantity: ele.quantity,
      };
      const hell = {
        MaterialName: ele.item,
        StockOut: ele.quantity,
        AmountSold:ele.sold,
        NormalPrice:ele.Price,
        Quantity:ele.quantity,
      };

      await axios.patch(`${base.url}/api/Batch/${id}`, sky);

      await axios.post(`${base.url}/api/upCreate/${id}`, hell);

      console.log(hell);
    });

    setLast("");

    setPhone("");

    setDriver("");

    setSite("");

    setPayment("");

    setSales("");

    props.clear();
  };

  return (
    <React.Fragment>
      <Container className={props.tog ? "Dis" : "changeDis"} fluid>
        <h5 onClick={props.hide} className='mt-5'>
          <TiArrowBack size='1.5em' />
          Go Back
        </h5>

        <h1>Customer Details</h1>
        <Row>
          <Col xs={12} lg={3}></Col>
          <Col xs={12} lg={6}>
            <Container>
              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Firstname </Form.Label>

                  <Form.Control
                    type='text'
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder='Enter Your Firstname'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Lastname</Form.Label>

                  <Form.Control
                    type='text'
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    placeholder='Enter Your Lastname'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Phone Number</Form.Label>

                  <Form.Control
                    type='number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter Your Phone Number'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Site Location</Form.Label>

                  <Form.Control
                    type='text'
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                    placeholder='Enter The Site Location'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Driver's Name</Form.Label>

                  <Form.Control
                    type='text'
                    value={driver}
                    onChange={(e) => setDriver(e.target.value)}
                    placeholder="Enter The Driver's Name"
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Invoice Number</Form.Label>

                  <Form.Control
                    type='text'
                    value={props.invoice}
                    readOnly
                    placeholder='Enter Invoice Number'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className='form-label'>Supply Status</Form.Label>

                  <div className='mb-3'>
                    <Form.Check
                      inline
                      label='Supplied'
                      name='supplied'
                      type='radio'
                      value={true}
                      defaultChecked
                      onClick={()=>setSupplied(true)}
                    />

                    <Form.Check
                      inline
                      label='Not Supplied'
                      name='supplied'
                      type='radio'
                      value={false}
                      onClick={()=>setSupplied(false)}
                    />
                  </div>
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Payment Method</Form.Label>

                  <Form.Control
                    type='text'
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    placeholder='Enter Payment Method'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Sales Person</Form.Label>

                  <Form.Control
                    type='text'
                    value={sales}
                    onChange={(e) => setSales(e.target.value)}
                    placeholder='Enter Your Name'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>Total Amount</Form.Label>

                  <Form.Control
                    type='number'
                    value={props.price}
                    readOnly
                    placeholder='Enter The Total Amount'
                  />
                </Form.Group>

                <Button
                  style={{ backgroundColor: "rgb(26, 20, 100)" }}
                  className='w-100 mt-5 border-0 py-3 rounded-pill mb-5'
                  onClick={submitCustomer}
                >
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>

          <div className='just'>
            <Receipt datar={datar} />
          </div>

          <Col xs={12} lg={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SalesForm;
