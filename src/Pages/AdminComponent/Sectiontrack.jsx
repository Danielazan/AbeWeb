import axios from 'axios'
import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useProductContext} from "Hook/useProduct"

// const 

function Sectiontrack() {

  const [name, setName] = useState("")
  
  const [collection, setCollection] = useState("")

  const [price, setPrice] = useState("")

  const {Product, dispatch} = useProductContext()

  function handlePost(){

      let data ={
        AmonutSold:45,
        Name:name,
        collectionName:collection,
        Price:price
      }
      axios.post("https://abe-api.onrender.com/api/material",data)
      
        .then(res=>{

          console.log(res)

          dispatch({type:"CREATE Product",payload:res.data})
          
        })
  }

  return (
    <React.Fragment>
       <section className='widget'>

          <Form className='ms-3 text-white'>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"#fda07e"}}>Name</Form.Label>
              <Form.Control 
              type="text" placeholder="Name Of Product"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className='format bg-transparent text-white py-3 px-3' style={{borderColor:"#fda07e"}}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"#fda07e"}}>Collection</Form.Label>
              <Form.Control 
              type="text" placeholder="Name Of Collection"
              value={collection}
              onChange={(e)=> setCollection(e.target.value)}
              className='format bg-transparent text-white py-3 px-3' style={{borderColor:"#fda07e"}}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label  style={{color:"#fda07e"}}>Price</Form.Label>
              <Form.Control 
              type='number' rows={3} style={{borderColor:"#fda07e"}} placeholder="Price Of Item"
              value={price}
              onChange={(e)=> setPrice(e.target.value) }
              className='format bg-transparent text-white py-3'
              />
            </Form.Group>
            
          </Form>

          <div className="d-flex ms-3">
            <Button className='w-50 py-3 py-lg-2 rounded-2 me-2' variant='info' onClick={handlePost}>Post</Button>
            <Button className='w-50  py-3 py-lg-2 rounded-2' variant='danger'>Delete</Button>
          </div>

       </section>
    </React.Fragment>
  )
}

export default Sectiontrack

