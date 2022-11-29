import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import axios from 'axios'
import {TiArrowBack} from "react-icons/ti"
import IteamHook from "Hook/IteamHook"



function SalesForm(props) {

    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [phone, setPhone] = useState("")
    const [driver, setDriver] = useState("")
    const [site, setSite] = useState("")
    const [invoice, setInvoice] = useState("")
    const [payment, setPayment] = useState("")
    const [sales, setSales] = useState("")

    const {iteam} = IteamHook()

    function submitCustomer(){

        console.log(iteam)
        
        let data={

            DriverName:driver,
            FirstName:first,
            LastName:last,
            PhoneNumber:phone,
            SiteLocation:site,
            InvoiceNumber:invoice,
            PaymentMethod:payment,
            RecievedBy:sales,
            TotalAmountPaid:props.price,
            itemsBought:iteam,
        }

        axios.post("https://abe-api.onrender.com/api/customer",data)
            .then(res=>{

              console.log(res.data)

            })
            
        
    }


  return (
    <React.Fragment>
         <Container className={props.tog ? "Dis" : "changeDis"} fluid>
         <h5 onClick={props.hide} className='mt-5'><TiArrowBack size="1.5em"/>Go Back</h5>
                <h1 >Customer Details</h1>
                <Row>
                <Col xs={12} lg={3}></Col>
                <Col xs={12} lg={6}>
                <Container>
                
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Firstname </Form.Label>

                            <Form.Control type="text" value={first} onChange={(e)=> setFirst(e.target.value)} placeholder="Enter Your Firstname"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Lastname</Form.Label>

                            <Form.Control type="text" value={last} onChange={(e)=> setLast(e.target.value)}  placeholder="Enter Your Lastname"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Phone Number</Form.Label>

                            <Form.Control type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}  placeholder="Enter Your Phone Number"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Site Location</Form.Label>

                            <Form.Control type="text" value={site} onChange={(e)=> setSite(e.target.value)}  placeholder="Enter The Site Location"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Driver's Name</Form.Label>

                            <Form.Control type="text" value={driver} onChange={(e)=> setDriver(e.target.value)}  placeholder="Enter The Driver's Name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Invoice Number</Form.Label>

                            <Form.Control type="text" value={invoice} onChange={(e)=> setInvoice(e.target.value)}  placeholder="Enter Invoice Number"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Payment Method</Form.Label>

                            <Form.Control type="text" value={payment} onChange={(e)=> setPayment(e.target.value)}  placeholder="Enter Payment Method"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Sales Person</Form.Label>

                            <Form.Control type="text" value={sales} onChange={(e)=> setSales(e.target.value)}  placeholder="Enter Your Name"/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Total Amount</Form.Label>

                            <Form.Control type="number" value={props.price} readOnly placeholder="Enter The Total Amount"/>
                        </Form.Group>
                       
                        <Button style={{backgroundColor:"rgb(26, 20, 100)"}} className='w-100 mt-5 border-0 py-3 rounded-pill mb-5' onClick={submitCustomer}>Submit</Button>
                    </Form>
                </Container>
                </Col>
                <Col xs={12} lg={3}></Col>
                </Row>
            </Container>

    </React.Fragment>
  )
}

export default SalesForm