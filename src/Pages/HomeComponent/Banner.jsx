import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Button,Row,Col} from "react-bootstrap"
import Style from "Pages/HomeComponent/Style/Style.css"
import Navbar from "Components/Navbar"


function Banner() {
  return (
    <React.Fragment>
        <div fluid className='banner'>
        <Navbar/>

            <Container className='banner-con'>
               <Row>
                    <Col xs={12} lg={3}></Col>

                    <Col xs={12} lg={6} >
                        <div className='main'>
                            <h1>Your Favorite Place for Free Bootstrap Themes</h1>

                            <center><hr className='banner-line my-4'/></center>
                            <p>
                            Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!
                            </p>

                            <Button className='rounded-pill banner-btn border-0 px-5 py-4 my-3'>Find Out More</Button>
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
                        <center><hr className='banner-need-line my-4'/></center>

                        <p>
                        Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!
                        </p>

                        <Button className='rounded-pill banner-need-btn border-0 px-5 py-3 mb-5 mt-3'>Get Started!</Button>
                    </Col>

                    <Col xs={12} lg={3}></Col>

                </Row>

            </Container>

        </div>
    </React.Fragment>
  )
}

export default Banner