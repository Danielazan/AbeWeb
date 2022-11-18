import React, {useState, useEffect} from 'react'

import {Button,Offcanvas,ListGroup} from "react-bootstrap"

import { MdSettingsSuggest,MdLocalActivity,MdRoofing } from "react-icons/md"

import {FaHandHoldingWater} from "react-icons/fa"

import {RiVideoAddLine} from "react-icons/ri"

import axios from 'axios'

import {useCollectionContext} from "Hook/CollectionHook"

import {useProductContext} from "Hook/useProduct"


function SideBar2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {Collection, dispatch2}= useCollectionContext()

    const {Product, dispatch} = useProductContext()

    useEffect(() => {
      getp()
    }, [dispatch])

    
    const handleGet = async (name)=>{
      //const name = "roofing"
        const url = `https://abe-api.onrender.com/api/products/${name}`
        const response =await axios.get(url)

        const json = await response.data.materialss

        dispatch({type:"SET Product", payload:json})

        console.log (json)
        console.log(name)
    }

    const getp= async ()=>{
      const url ="http://localhost:5000/api/products"
      
      const response = await axios.get(url)
      
      const json = await response.data

      dispatch2 ({type:"SET Collection", payload:json})

      const res=json.map(iteam=>{
         return iteam.collectionName
      })

        console.log(res)
       console.log (Collection)
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
              {
                Collection && Collection.map(item =>{
                  return(
                    <ListGroup.Item 
                        style={{backgroundColor:"#210440",color:"#fda07e"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" 
                        action 

                        onClick={()=>handleGet(item.collectionName)}
               >
                <MdRoofing 
                className='me-2' 
                size={"1.5em"}/>

                {item.collectionName}
              </ListGroup.Item>
                  )
                
                })
              }
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  )
}

export default SideBar2