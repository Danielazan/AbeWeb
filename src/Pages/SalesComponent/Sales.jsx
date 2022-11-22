import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import "./Style/Style.css"
import Navbar from 'Components/NavbarSales'
import axios from 'axios'
import img from "Assets/Images/pic14.svg"
import {IoIosRemoveCircle} from "react-icons/io"

function Sales() {

    const [prod, setProd] = useState("")
    const [materials, setMaterials] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [phone, setPhone] = useState("")
    const [driver, setDriver] = useState("")
    const [site, setSite] = useState("")
    const [amt, setAmt] = useState("")
    const [tog, setTog] = useState(true)

    
    function searchValue(e){

        setProd(e.target.value)
    }

    useEffect(() => {

        axios.get(`https://abe-api.onrender.com/api/material`)
        .then(res=>{

            setMaterials(res.data)

            setLoading(false)
        })
     
    },)

    function handleChange(quantity,dispatch){

        if(dispatch === +1){
            quantity += 1 
            console.log(quantity)
        }else{
            console.log(false)
        }

    }

    function handleClick(item){
        cart.push(item)
        console.log(cart)
    }

    let sum = cart.map((price)=>{
        return price.Price
    })

    var total = sum.reduce((acc,item)=>{
        return acc = acc + item
    },0)

   
    function handleRemove(_id){
        
        let arr = cart.filter((item)=> item._id !== _id)
        setCart(arr)
        
    }

    function call(){
        setTog(false)
    }
    
  return (
    <React.Fragment>
    <Container fluid className='Sales'>
    <Navbar/>
        <Container>
        <div className='d-flex align-items-end justify-content-between'>
        <p style={{color:"rgb(26, 20, 100)"}}>Search For Desired Product</p>
        <div className='d-flex'>
        <Form.Control type="search" value={prod} onChange={searchValue} className='w-100 rounded-3 bg-white' placeholder="Search For Product" />
      
        </div>
        </div>

        {loading ? <center><img src={img} height="100px"/></center> : null}

            <Row className='mt-5'>
                <Col xs={12} xl={8} className="check">
                   <Row style={{borderBlock:"2px solid rgb(26, 20, 100)",fontWeight:"600"}} className="py-3 text-center">
                        <Col xl={3} xs={3}>Product</Col>
                        <Col xl={3} xs={2}>Price</Col>
                        <Col xl={4} xs={5}>Quantity</Col>
                        <Col xl={2} xs={1}>Add</Col>
                   </Row>
                                
                    {
                        materials && materials.filter((item)=>{
                            return prod.toLowerCase() === "" ? item : item.Name.toLowerCase().includes(prod)
                        }).map(item=>{

                            let quantity =1

                            return(
                                <Row key={item._id} className="py-4" style={{borderBottom:"1px solid rgb(26, 20, 100)"}}>

                                    <Col xl={3} xs={3} className="text-center">{item.Name}</Col>

                                    <Col xl={3} xs={2} className="text-center">{item.Price}</Col>

                                    <Col xl={4} xs={5}>
                                        <div className='justify-content-around d-flex'>
                                            <Button style={{backgroundColor:"rgb(122, 102, 96)"}} className='w-25 border-0' onClick={()=>handleChange(quantity, -1)}>-</Button>

                                            <Button className='bg-transparent border-0 text-black'>{quantity}</Button>
                                            
                                            <Button style={{backgroundColor:"rgb(46, 24, 14)"}} className='w-25 border-0' onClick={()=>handleChange(quantity,+1)}>+</Button>
                                        </div>
                                    </Col>

                                    <Col xl={2} xs={2} className="text-center">
                                        <Button className='mx-0 border-0' style={{backgroundColor:"rgb(26, 20, 100)"}} onClick={()=> handleClick(item)}>Add</Button>
                                    </Col>

                                </Row>                     
                            )
                        })
                    }
  
                </Col>
                
                {/* <Col xs={12} xl={1}>

                </Col> */}

                <Col xs={12} xl={3} className="mt-4 mt-xl-0">
                    <Row style={{borderBlock:"2px solid rgb(26, 20, 100)",fontWeight:"600"}} className="py-3">
                        <Col xs={4}>Description</Col>
                        <Col xs={3}>Price</Col>
                        <Col xs={3}>Sold At</Col>
                        <Col xs={2}></Col>
                    </Row>

                    {
                        cart.map((material)=>{
                            return(
                                <Row key={material._id} className="my-3">

                                    <Col xs={4}>
                                        <p className="text-black">{material.Name} x {}</p>
                                    </Col>

                                    <Col xs={3}>
                                        <p className="text-black">{material.Price}</p>
                                    </Col>

                                    <Col xs={3}>
                                        <Form.Control value={material.Price} className="text-black"/>
                                    </Col>

                                    <Col xs={2}>
                                        <Button title='Remove'  className='border-0' style={{backgroundColor:"rgb(26, 20, 100)"}} onClick={()=>handleRemove(material._id)}><IoIosRemoveCircle/></Button>
                                    </Col>
                                </Row>
                            )
                        })
                    }

                    <Row>
                        <Col xs={4}><p className='heavy'>Total</p></Col>

                        <Col xs={3} className='heavy'>{total}</Col>
                    </Row>
                 
                    
                    <Button className='w-100 rounded-pill py-3 mt-4 border-0' style={{backgroundColor:"rgb(26, 20, 100)"}} onClick={call}>Checkout</Button>
                </Col>

            </Row>
            

            <Container className={tog ? "Dis" : "changeDis"} fluid>
                <h1 className='mt-5'>Customer Details</h1>
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
                            <Form.Label className='form-label'>Total Amount</Form.Label>

                            <Form.Control type="number" value={amt} onChange={(e)=> setAmt(e.target.value)}  placeholder="Enter The Total Amount"/>
                        </Form.Group>
                       

                        <Button style={{backgroundColor:"rgb(26, 20, 100)"}} className='w-100 mt-5 border-0 py-3 rounded-pill mb-5'>Submit</Button>
                    </Form>
                </Container>
            </Col>
            <Col xs={12} lg={3}></Col>
        </Row>

        

            </Container>
        </Container>
    </Container>

    </React.Fragment>
  )
}

export default Sales
