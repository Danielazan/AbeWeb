import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button} from "react-bootstrap"
import pic5 from "Assets/Images/pic05.jpg"
import pic4 from "Assets/Images/pic04.jpg"
import pic6 from "Assets/Images/pic06.jpg"
import pic7 from "Assets/Images/pic07.jpg"
import pic8 from "Assets/Images/pic08.jpg"
import pic9 from "Assets/Images/pic09.jpg"


function Imagegrid() {
  return (
    <React.Fragment>

        <div fluid className='img-grid'>

            <Row className='mx-0 px-0 gx-0'>
                <Col xs={12} lg={4} className="col"><img src={pic5} fluid alt="" style={{width:"100%"}}/></Col>

                <Col xs={12} lg={4} className="col"><img src={pic4} fluid alt="" style={{width:"100%"}}/></Col>

                <Col xs={12} lg={4} className="col"><img src={pic6} fluid alt="" style={{width:"100%"}}/></Col>

                <Col xs={12} lg={4} className="col"><img src={pic7} fluid alt="" style={{width:"100%"}}/></Col>

                <Col xs={12} lg={4} className="col"><img src={pic8} fluid alt="" style={{width:"100%"}}/></Col>

                <Col xs={12} lg={4} className="col"><img src={pic9} fluid alt="" style={{width:"100%"}}/></Col>

            </Row>

        </div>

        <Container fluid className='down pb-5'>

            <div className='py-5'>

                <h1 className='text-white py-5'>Use Authentic Roofing Products Now !!!</h1>

            </div>

        </Container>

    </React.Fragment>
  )
}

export default Imagegrid