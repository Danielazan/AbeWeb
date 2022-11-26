import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import "./Style/Style.css"
import Navbar from 'Components/NavbarSales'
import axios from 'axios'
import img from "Assets/Images/pic14.svg"
import {IoIosRemoveCircle} from "react-icons/io"
import SalesForm from './SalesForm'

import IteamHook from "Hook/IteamHook"
import {useProductContext} from "Hook/useProduct"
import CustomerHook from "Hook/CustomerHook"

function Sales() {

    const [prod, setProd] = useState("")
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])
    const [tog, setTog] = useState(true)
    const [pushe, setPushe] = useState([])
    const [Added, setAdded] = useState(0)
    const {iteam, dispatchItem} = IteamHook()
    const {Product, dispatch} = useProductContext()

    function searchValue(e){

        setProd(e.target.value)
    }

    useEffect(() => {

        axios.get(`https://abe-api.onrender.com/api/material`)
        .then(res=>{

            const json= res.data
            console.log(json)
            dispatch({type:"SET Product", payload:json})

            setLoading(false)
        })
     
    },[dispatch])

    function handleChange(item,dis){
        if (dis === +1){
            item.quantity += 1 
        }else{
            item.quantity -=1
        }
    }
    const handleAdd = ()=>{
        setAdded(Added + 1)
        console.log(Added)
    }

    const handleClick = async (item)=>{

        const itemsBought = {
            item:item.Name,
            quantity:6,
            Price:item.Price
        }
        // let present = false

        // iteam.forEach((prod)=>{

        //     if(item._id === prod._id){
        //         present = true
        //     }
        // })

        // if (present){
        //     return ;
        // }
            
        await dispatchItem({type:"Create item", payload:itemsBought})

        console.log(iteam)

    }

    let sum = iteam.map((price)=>{
        return price.Price
    })

    var total = sum.reduce((acc,item)=>{
        return acc = acc + item
    },0)

   
    function handleRemove(_id){
        
        let arr = iteam.filter((item)=> item._id !== _id)
        setCart(arr)
        
    }

    function call(){
        setTog(!tog)
    }

    const SetP = () => {
        setPushe([])
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

        {loading ? <center><img src={img} alt="Loading..." height="100px"/></center> : null}

            <Row className='mt-5'>
                <Col xs={12} xl={8} className="check">


                <SalesForm tog={tog} SetP={SetP} pushe={pushe}/>

                <div className={tog ? "changeDis" : "Dis" } >

                <Row style={{borderBlock:"3px solid #2e180e",fontWeight:"600"}} className="py-3 text-center">
                    <Col xl={3} xs={3}>Product</Col>
                    <Col xl={3} xs={2}>Price</Col>
                    <Col xl={4} xs={5}>Quantity</Col>
                    <Col xl={2} xs={1}>Add</Col>
                </Row>
                                
                    {
                        Product && Product.filter((item)=>{
                            return prod.toLowerCase() === "" ? item : item.Name.toLowerCase().includes(prod)
                        }).map(item=>{

                            return(
                                <Row key={item._id} className="py-4 tb-row" style={{borderBottom:"3px solid #2e180e"}}>

                                    <Col xl={3} xs={3} className="text-center">{item.Name}</Col>

                                    <Col xl={3} xs={2} className="text-center">{item.Price}</Col>

                                    <Col xl={4} xs={5}>
                                        <div className='justify-content-around d-flex'>
                                            <Button style={{backgroundColor:"rgb(122, 102, 96)"}} className='w-25 border-0' onClick={()=> handleChange(item,-1)}>-</Button>

                                            <Button  className='bg-transparent border-0 text-black'>{item.quantity}</Button>
                                            
                                            <Button style={{backgroundColor:"rgb(46, 24, 14)"}} className='w-25 border-0' onClick={handleAdd}>+</Button>
                                        </div>
                                    </Col>

                                    <Col xl={2} xs={2} className="text-center">
                                        <Button className='mx-0 border-0' style={{backgroundColor:"rgb(26, 20, 100)"}} onClick={()=> handleClick(item)}>Add</Button>
                                    </Col>

                                </Row>                     
                            )
                        })
                    }

                </div>
                 
  
                </Col>

                <Col xs={12} xl={3} className="mt-4 mt-xl-0">
                    <Row style={{borderBlock:"3px solid #2e180e",fontWeight:"600"}} className="py-3">
                        <Col xs={4}>Description</Col>
                        <Col xs={3}>Price</Col>
                        <Col xs={3}>Sold At</Col>
                        <Col xs={2}></Col>
                    </Row>

                    {
                        iteam.map((material)=>{
                            return(
                                <Row key={material._id} className="my-0">

                                    <Col xs={4}>
                                        <p className="mat-name">{material.item} x {}</p>
                                    </Col>

                                    <Col xs={3}>
                                        <p className="text-black">{material.Price}</p>
                                    </Col>

                                    <Col xs={3}>
                                        <Form.Control readOnly value={material.Price} className="text-black"/>
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
            
        </Container>
    </Container>

    </React.Fragment>
  )
}

export default Sales
