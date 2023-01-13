import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container,Row,Col } from 'react-bootstrap'
import {AiFillStar} from "react-icons/ai"
 
function Banner() {
  return (
   <React.Fragment>
      <Container fluid className='bann'>
        <Row>
            <Col xs={12} lg={1}></Col>
            <Col xs={12} lg={10}>
                <Container className='ban-con text-white'>
                  <h1>Start Turning Your Ideas To Reality.</h1>

                  <p className='mt-5'>
                  Create a free account and become a worker. No credit card needed.
                  </p>

                  <Container className='d-flex'>   
                    <AiFillStar size={"2em"} style={{color:"rgb(248, 200, 74)"}}/>

                    <AiFillStar size={"2em"} style={{color:"rgb(248, 200, 74)"}}/>

                    <AiFillStar size={"2em"} style={{color:"rgb(248, 200, 74)"}}/>

                    <AiFillStar size={"2em"} style={{color:"rgb(248, 200, 74)"}}/>

                    <AiFillStar size={"2em"} style={{color:"rgb(248, 200, 74)"}}/>

                    <p className='mt-1 ms-3'>5.0 Rating</p>
                  </Container>

                </Container>
            </Col>
            <Col xs={12} lg={1}></Col>
        </Row>
      </Container>
   </React.Fragment>
  )
}

export default Banner