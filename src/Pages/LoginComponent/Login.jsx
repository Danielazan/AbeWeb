import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col} from "react-bootstrap"
import Style from "./Style/Style.css"
import Form from "./Form"
import Sidebanner from './Sidebanner'


function Login() {
  return (
    <Container fluid className='login'>
       <Row>
          <Col xs={12} xl={6}><Form/></Col>
          <Col xs={12} xl={6} className="d-xl-block d-none"><Sidebanner/></Col>
       </Row>
    </Container>
  )
}

export default Login