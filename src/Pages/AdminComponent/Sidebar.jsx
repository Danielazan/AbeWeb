import React, {useState} from 'react'
import {Button,Offcanvas,ListGroup} from "react-bootstrap"
import { MdSettingsSuggest,MdLocalActivity,MdRoofing } from "react-icons/md"
import {FaHandHoldingWater} from "react-icons/fa"
import {RiVideoAddLine} from "react-icons/ri"
import axios from 'axios'
import NewContext from "Hook/useCollection"



function SideBar2() {
  const {state,dispatch} = NewContext()


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getp(){

      axios.get("https://abe-api.onrender.com/api/products/roofing")
          .then(res=>{

          console.log(res.data.materialss)

          dispatch({type:"ROOFING",payload:res.data.materialss})

          console.log(dispatch.payload)

      })
  }
  
  return (
    <React.Fragment>
      <Button variant="none" className="d-lg-none" onClick={handleShow}>
        <MdSettingsSuggest className="text-white" size={30}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton >
          <Offcanvas.Title  >Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body   style={{backgroundColor:"#210440"}} >
        
          <ListGroup  className="SideList mt-4" variant='flush'> 
              <ListGroup.Item style={{backgroundColor:"#210440",color:"#fda07e"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action onClick={getp} >
                <MdRoofing className='me-2' size={"1.5em"} />Roofing Collection
              </ListGroup.Item>

             
              <ListGroup.Item  style={{backgroundColor:"#210440",color:"#fda07e"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action ><FaHandHoldingWater className='me-2' size={"1.5em"}/>Water Collection</ListGroup.Item>

              <ListGroup.Item  style={{backgroundColor:"#210440",color:"#fda07e"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action ><RiVideoAddLine className='me-2' size={"1.5em"}/>Add New Videos</ListGroup.Item>

              <ListGroup.Item  style={{backgroundColor:"#210440",color:"#fda07e"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action ><MdLocalActivity className='me-2' size={"1.5em"}/>Events</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  )
}

export default SideBar2