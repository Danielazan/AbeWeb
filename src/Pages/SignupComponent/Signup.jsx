import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col} from "react-bootstrap"
import "./Style/Style.css"
import Sign from "./Sign"
import Banner from './Banner'


function Signup() {
  return (
      <React.Fragment>
        <Container fluid className='Signup'>
          <Row className=''>
              <Col xs={12} xl={7} className="d-xl-block  d-none px-0"><Banner/></Col>
              <Col xs={12} xl={5} className="px-0"><Sign/></Col>
          </Row>
        </Container>
      </React.Fragment>
  )
}

export default Signup