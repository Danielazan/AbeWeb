import React from 'react'
import Navbar from 'Components/Navbar'
import { Container,Row,Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Main from './Main'
import Style from "Pages/AdminComponent/Style/Style.css"
import Sectiontrack from './Sectiontrack'

function Admin() {
  const getp= async ()=>{
    // const url ="http://localhost:5000/api/products"
    
    // const response = await axios.get(url)
    
    // const json = await response.data

    // dispatch ({type:"SET Collection", payload:json})

    // const res=json.map(iteam=>{
    //    return iteam.collectionName
    // })

    //   console.log(res)
    //  //console.log (Collection)
}
  return (
    <React.Fragment>
        <Navbar/>

        <Container fluid className='admin pt-5'>
            <Row className='pt-5'>
                <Col xs={12} lg={2}><Sidebar/></Col>

                <Col xs={12} lg={7}>

                  <Main/>
                  
                </Col>

                <Col className='widget-p' xs={12} lg={3}><Sectiontrack/></Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default Admin

