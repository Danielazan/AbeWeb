import React,{useState} from 'react'
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import "./Style/Style.css"
import Navbar from 'Components/NavbarSales'
import axios from 'axios'
import base from "base.js";


function Enquiry() {

    const [first, setFirst] = useState("")
    const [phone, setPhone] = useState("")
    const [enq, setEnq] = useState("")
    const [meth, setMeth] = useState("")

    function submitEnquiry(){

        let data={
            Name:first,
            PhoneNumber:phone,
            enquiry:enq,
            WalkInOrCall:meth
        }

        axios.post(`${base.url}/api/enquiry`, data).then((res) => {
          console.log(res);
        });

    }
  return (
    <React.Fragment>
        <Container fluid className='Enquiry'>
        <Navbar/>
        <Row>
            <Col xs={1} xl={3}></Col>
            <Col xs={10} xl={6}>
                <h1 className='mt-5'>Customer Enquiry Form</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Firstname </Form.Label>

                        <Form.Control type="text" value={first} onChange={(e)=> setFirst(e.target.value)} placeholder="Enter Customer's Name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Phone Number </Form.Label>

                        <Form.Control type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Enter Customer's Phone Number"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Enquiry Method</Form.Label>

                        <Form.Control type="text" value={meth} onChange={(e)=> setMeth(e.target.value)} placeholder="Walk In or Call"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Enquiry </Form.Label>

                        <Form.Control type="text" as="textarea"  rows={10} style={{resize:"none"}} value={enq} onChange={(e)=> setEnq(e.target.value)} placeholder="Enquiries"/>
                    </Form.Group>
                    
                    <Button style={{backgroundColor:"rgb(26, 20, 100)"}} className='w-100 mt-5 border-0 py-4 rounded-pill mb-5' onClick={submitEnquiry}>Submit</Button>
                </Form>
            </Col>
            <Col xs={1} xl={3}></Col>
        </Row>
        
        </Container>
    </React.Fragment>
  )
}

export default Enquiry