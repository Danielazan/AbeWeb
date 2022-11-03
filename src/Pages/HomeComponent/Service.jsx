import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col} from "react-bootstrap"
import {BsGem,BsLaptop,BsGlobe,BsHeart} from "react-icons/bs"

function Service() {
  return (
    <React.Fragment>
        <Container fluid className='icons'>
            <h3 className='pt-5 mt-5'>At Your Service</h3>

            <center><hr className='banner-line my-4'/></center>

            <Container>
                <Row>
                    <Col xs={12} lg={3} className="my-4 my-lg-5 pb-lg-5">

                        <BsGem className='mb-3' style={{color:'rgb(244, 98, 58)'}} size={"3em"}/>

                        <h4>Sturdy Themes</h4>

                        <p>Our themes are updated regularly to keep them bug free!</p>
                       
                    </Col>

                    <Col xs={12} lg={3} className="my-4 my-lg-5 pb-lg-5">

                        <BsLaptop className='mb-3' style={{color:'rgb(244, 98, 58)'}} size={"3em"}/>

                        <h4>Up to Date</h4>

                        <p>All dependencies are kept current to keep things fresh.</p>

                    </Col>

                    <Col xs={12} lg={3} className="my-4 my-lg-5 pb-lg-5">

                        <BsGlobe className='mb-3' style={{color:'rgb(244, 98, 58)'}} size={"3em"}/>

                        <h4>Ready to Publish</h4>

                        <p>You can use this design as is, or you can make changes!</p>

                    </Col>

                    <Col xs={12} lg={3} className="my-4 my-lg-5 pb-lg-5">

                        <BsHeart className='mb-3' style={{color:'rgb(244, 98, 58)'}} size={"3em"}/>

                        <h4>Made with Love</h4>

                        <p>Is it really open source if it's not made with love?</p>

                    </Col>

                </Row>
            </Container>

        </Container>
    </React.Fragment>
  )
}

export default Service