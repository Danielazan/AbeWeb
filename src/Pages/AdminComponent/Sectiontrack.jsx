import React from 'react'
import {Form,Button} from 'react-bootstrap'

function Sectiontrack() {
  return (
    <React.Fragment>
       <section className='widget'>

          <Form className='ms-3 text-white'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Title</Form.Label>
              <Form.Control 
              type="text" placeholder="Title Of News"
              className='format bg-transparent text-white py-3 px-3'
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-white">Description</Form.Label>
              <Form.Control 
              as="textarea" rows={3} 
              className='format bg-transparent text-white py-3'
              />
            </Form.Group>
          </Form>

          <div className="d-flex ms-3">
            <Button className='w-50 py-3 py-lg-2 rounded-2 me-2' variant='primary'>Post</Button>
            <Button className='w-50  py-3 py-lg-2 rounded-2' variant='danger'>Delete</Button>
          </div>

       </section>
    </React.Fragment>
  )
}

export default Sectiontrack

