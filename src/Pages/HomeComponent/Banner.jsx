import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Button,Row,Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
import "Pages/HomeComponent/Style/Style.css"
import Navbar from "Components/Navbar"


function Banner() {
  return (
    <React.Fragment>
      <div fluid className='banner'>
        <Navbar />

        <Container className='banner-con'>
          <Row>
            <Col xs={12} lg={3}></Col>

            <Col xs={12} lg={6}>
              <div className='mains'>
                <h1>Healthy Home Begins With Healthy Roof</h1>

                <center>
                  <hr className='banner-line my-4' />
                </center>
                <p>
                  Authentic Roofing Tiles Intercontinental Limited provides you
                  with quality materials needed for roofing, water collector
                  system, e.t.c
                </p>

                <Link to="/Sales">
                  <Button className='rounded-pill banner-btn border-0 px-5 py-4 my-3'>
                    Find Out More
                  </Button>
                </Link>
              </div>
            </Col>

            <Col xs={12} lg={3}></Col>
          </Row>
        </Container>

        <Container fluid className='banner-need'>
          <Row>
            <Col xs={12} lg={3}></Col>

            <Col xs={12} lg={6}>
              <h3 className='pt-5'>We've got what you need!</h3>
              <center>
                <hr className='banner-need-line my-4' />
              </center>

              <p>
                We have a wide variety of roofing tiles ranging from the
                classic, Roman, Bond, Shingle, Milano and so on
              </p>

              <Button className='rounded-pill banner-need-btn border-0 px-5 py-3 mb-5 mt-3'>
                Get Started!
              </Button>
            </Col>

            <Col xs={12} lg={3}></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Banner