import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import "./Style/Style.css"
import Navbar from 'Components/Navbar'
import axios from 'axios'
import img from "Assets/Images/pic14.svg"

function Sales() {

    const [prod, setProd] = useState("")
    const [materials, setMaterials] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])

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

    function increase(item){
        setQuantity(quantity +1)
    }

    function reduce(){
        if (quantity === 1){

        }else{
            setQuantity(quantity -1)
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
                <Col xs={12} xl={8} className="">
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
                            return(

                                <Row key={item._id} className="py-4" style={{borderBottom:"1px solid rgb(26, 20, 100)"}}>

                                    <Col xl={3} xs={3} className="text-center">{item.Name}</Col>

                                    <Col xl={3} xs={2} className="text-center">{item.Price}</Col>

                                    <Col xl={4} xs={5}>
                                        <div className='justify-content-around d-flex'>
                                            <Button style={{backgroundColor:"rgb(122, 102, 96)"}} className='w-25 border-0' onClick={reduce}>-</Button>
                                            <Button className='bg-transparent border-0 text-black'>{quantity}</Button>
                                            <Button style={{backgroundColor:"rgb(46, 24, 14)"}} className='w-25 border-0' onClick={()=> increase("one")}>+</Button>
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
                
                <Col xs={12} xl={1}>

                </Col>

                <Col xs={12} xl={3} className="mt-4 mt-xl-0">
                    <Row style={{borderBlock:"2px solid rgb(26, 20, 100)",fontWeight:"600"}} className="py-3">
                        <Col xs={5}>Description</Col>
                        <Col xs={5}>Price</Col>
                        <Col xs={2}></Col>
                    </Row>

                    {
                        cart.map((material)=>{
                            return(
                                <Row key={material._id} className="my-3">

                                    <Col xs={5}>
                                        <div>
                                            <p className="text-black">{material.Name} x {}</p>
                                        </div>
                                    </Col>

                                    <Col xs={4}>
                                        <p className="text-black">{material.Price}</p>
                                    </Col>

                                    <Col xs={3}>
                                        <Button className='border-0 mt-2' style={{backgroundColor:"rgb(26, 20, 100)"}} onClick={()=>handleRemove(material._id)}>Remove</Button>
                                    </Col>


                                </Row>
                            )
                        })
                    }

                    <Row>
                        <Col xs={5}><p className='heavy'>Total</p></Col>

                        <Col xs={4} className='heavy'>{total}</Col>
                    </Row>
                 
                    
                    <Button className='w-100 rounded-pill py-3 mt-4 border-0' style={{backgroundColor:"rgb(26, 20, 100)"}}>Checkout</Button>
                </Col>

            </Row>
        </Container>
    </Container>

    </React.Fragment>
  )
}

export default Sales
