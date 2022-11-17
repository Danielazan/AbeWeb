import React,{useState} from 'react'
import { Container,Row,Col,Offcanvas} from 'react-bootstrap'
import {AiFillStar} from "react-icons/ai"
import {CgMenuMotion} from "react-icons/cg"
 
function Sidebanner() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
    <Row className='side-ban'>
      <Col xs={12} lg={1}></Col>
      <Col xs={12} lg={10}>
        <Container className='side-card rounded-1'>
          <h3 className='pt-3'>"We've be" using Untitled to kick start every new project and can't imagine working without it."</h3>

          <Row className="mt-4">

            <Col xs={12} lg={6}>
              <h4>Adni Lane</h4>
              <h6>Founder Catalogue</h6>
              <p>Web Design Agency</p>
            </Col>

            <Col lg={6} xs={12} className="mb-3">
              <AiFillStar style={{color:"white"}} size="2em"/>
              <AiFillStar style={{color:"white"}} size="2em"/>
              <AiFillStar style={{color:"white"}} size="2em"/>
              <AiFillStar style={{color:"white"}} size="2em"/>
              <AiFillStar style={{color:"white"}} size="2em"/>
            </Col>

          </Row>
        </Container>
        </Col>
        <Col xs={12} lg={1}></Col>
      </Row> 
    </React.Fragment>
  )
}

export default Sidebanner