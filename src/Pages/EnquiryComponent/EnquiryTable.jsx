import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, } from "react-bootstrap";
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import {HiOutlineMenu} from  "react-icons/hi"
import {RiCloseLine} from "react-icons/ri"
import {GiClick} from "react-icons/gi"
import {IoMdContact} from "react-icons/io"
import axios from "axios";
import { BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from 'react-whatsapp';
import base from "base.js";


function EnquiryTable() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [customers, setCustomers] = useState([])
  const [customerInfo, setCustomerInfo] = useState(null)
  const [show, setShow] = useState(false)
  const [customerInfos, setcustomerInfos] = useState("+2348104231935")

  useEffect(() => {
    
    axios.get(`${base.url}/api/enquiry`).then((res) => {
      setCustomers(res.data);
    });
    
  }, [])
  
  const customerData = (phone,method,enquiry,name)=> {
    setcustomerInfos("+234" +phone)

    let data={no:phone,meth:method,en:enquiry,person:name}

    setCustomerInfo(data)

    setShow(true);

  }

  return (
    <React.Fragment>
      <Container fluid className='Enquiry'>
        <Navbar />
        <Container>
          <div className='d-flex justify-content-end d-lg-none d-block mt-5'>
            {mobileMenu ? (
              <RiCloseLine
                style={{ color: "rgb(26, 20, 100)" }}
                size='1.5em'
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <HiOutlineMenu
                style={{ color: "rgb(26, 20, 100)" }}
                size='1.5em'
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          <h1 className='mt-lg-5'>Customer Enquiries</h1>

          <Row className='mt-5'>
            <Col lg={4} className='d-none d-lg-block diff'>
              {customers &&
                customers.map((data) => {
                  return (
                    <Row
                      key={data._id}
                      onClick={() =>
                        customerData(
                          data.PhoneNumber,
                          data.WalkInOrCall,
                          data.enquiry,
                          data.Name
                        )
                      }
                      className='ps-5 py-4 custom-row'
                    >
                      <Col className='d-flex'>
                        <IoMdContact
                          style={{ color: "rgb(26, 20, 100)" }}
                          size='3em'
                        />

                        <h5
                          className='ms-4 pt-2'
                          style={{ color: "rgb(26, 20, 100)" }}
                        >
                          {data.Name}
                        </h5>
                      </Col>
                    </Row>
                  );
                })}
            </Col>

            <div
              className={`d-lg-none d-block position-absolute nan ${
                mobileMenu ? "d-block" : "d-none"
              }`}
            >
              {customers &&
                customers.map((data) => {
                  return (
                    <Row
                      key={data._id}
                      onClick={() =>
                        customerData(
                          data.PhoneNumber,
                          data.WalkInOrCall,
                          data.enquiry,
                          data.Name
                        )
                      }
                      className='py-4'
                    >
                      <Col className='d-flex'>
                        <IoMdContact
                          style={{ color: "rgb(26, 20, 100)" }}
                          size='3em'
                        />

                        <h5
                          className='ms-4 pt-2'
                          style={{ color: "rgb(26, 20, 100)" }}
                        >
                          {data.Name}
                        </h5>
                      </Col>
                    </Row>
                  );
                })}
            </div>

            <Col lg={7}>
              <div
                className={`d-flex h-75 mt-5 justify-content-center align-items-center ${
                  show ? "d-none" : "d-block"
                }`}
              >
                <GiClick size='2em' style={{ color: "rgb(26, 20, 100)" }} />
                <h4 className='ms-3' style={{ color: "rgb(26, 20, 100)" }}>
                  Click On A Contact{" "}
                  <IoMdContact
                    size='1.5em'
                    style={{ color: "rgb(26, 20, 100)" }}
                  />{" "}
                  To Display Enqiries
                </h4>
              </div>

              <div className={` ${show ? "d-block" : "d-none"}`}>
                <h1
                  style={{
                    color: "rgb(26, 20, 100)",
                    backgroundColor: "rgb(253, 253, 222)",
                    borderBlock: "2px solid rgb(26, 20, 100)",
                  }}
                  className='py-5 ps-5'
                >
                  Customer: {customerInfo && customerInfo.person}
                </h1>

                <p style={{ color: "rgb(26, 20, 100)" }} className='mt-5 ps-5'>
                  Phone Number: {customerInfo && customerInfo.no}
                </p>

                <p style={{ color: "rgb(26, 20, 100)" }} className='mt-5 ps-5'>
                  Enquiries: {customerInfo && customerInfo.en}
                </p>

                  <Container className=' d-flex justify-content-between' >
                  <h4 style={{ color: "rgb(26, 20, 100)" }}>send Whatsapp Message</h4>
                    <ReactWhatsapp number={customerInfos} message="Hello World!!! +{customerInfo.no}">
                      <BsWhatsapp/>
                    </ReactWhatsapp>
                  </Container>
                  
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default EnquiryTable; 
