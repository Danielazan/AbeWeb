import React, {useState, useEffect} from 'react'
import {Button,Offcanvas,ListGroup, Form, Accordion} from "react-bootstrap"
import { MdAdminPanelSettings,MdRoofing } from "react-icons/md"
import {AiFillFolderAdd} from "react-icons/ai"
import {HiUsers} from "react-icons/hi"
import axios from 'axios'
import {useCollectionContext} from "Hook/CollectionHook"
import {useProductContext} from "Hook/useProduct"

function SideBar2() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [colname, setColname] = useState("")
    const [colform, setColform] = useState(false)
    const [users, setUsers] = useState([])
    const {Collection, dispatch2}= useCollectionContext()
    const {Product, dispatch} = useProductContext()

    useEffect(() => {
      getp()

      getUsers()
    }, [dispatch])

    
    const handleGet = async (name)=>{

      const url = `https://abe-api.onrender.com/api/products/${name}`

      const response =await axios.get(url)

      const json = await response.data.materialss

      dispatch({type:"SET Product", payload:json})

    }

    const getp= async ()=>{

      const url ="https://abe-api.onrender.com/api/products"
      
      const response = await axios.get(url)
      
      const json = await response.data

      dispatch2 ({type:"SET Collection", payload:json})

      const res=json.map(iteam=>{
        return iteam.collectionName
    
      })

    }

  function createProduct(){
    let data={
      collectionName:colname
    }
    axios.post("https://abe-api.onrender.com/api/products",data)
      .then(res=>{
        console.log(res)

      })
  }

  function getUsers(){
    axios.get("https://abe-api.onrender.com/api/users")
      .then(res=>{
        setUsers(res.data)
      })
  }
  
  return (
    <React.Fragment>
      <Button variant="none" className="d-lg-none" onClick={handleShow}>
        <MdAdminPanelSettings style={{color:"#fda07e"}} size={30}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton >
          <Offcanvas.Title  >Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body   style={{backgroundColor:"#210440"}} >

        <Accordion className='w-100 mt-5' flush>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Collection</Accordion.Header>
        <Accordion.Body style={{backgroundColor:"#210440",color:"#fda07e"}}>
        <ListGroup style={{backgroundColor:"#210440",color:"#fda07e"}} className="SideList mt-4" variant='flush'> 
            <ListGroup.Item style={{backgroundColor:"#210440",color:"#fda07e"}}>
                  <Button className='border-0' onClick={()=>setColform(!colform)} style={{backgroundColor:"#fda07e",color:"#210440"}}> <AiFillFolderAdd size={"1.5em"}/> Collection</Button>

                  <div className={colform ? "vis" : "notvis"}>
                    <Form.Control style={{borderColor:"#fda07e",color:"#fda07e"}} placeholder="Collection Name" className='mt-3 bg-transparent format' onChange={(e)=> setColname(e.target.value)} value={colname}/>

                    <Button className='border-0 mt-3 w-100' onClick={createProduct} style={{backgroundColor:"#fda07e",color:"#210440"}}>Add Collection</Button>
                  </div>
                </ListGroup.Item>

                  {
                    Collection && Collection.map(item =>{
                      return(
                        <ListGroup.Item 
                            style={{backgroundColor:"#210440",color:"#fda07e",borderColor:"#fda07e"}} className="my-2 py-3 p-0  list" 
                            action 
                            key={item._id}
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Access Users</Accordion.Header>
            <Accordion.Body style={{backgroundColor:"#210440",color:"#fda07e"}}>

            <ListGroup style={{backgroundColor:"#210440",color:"#fda07e",borderColor:"red"}} variant='flush'>
              {
                users && users.map((user)=>{
                  return(
                    <ListGroup.Item 
                    style={{backgroundColor:"#210440",color:"#fda07e",borderColor:"#fda07e"}} className="my-2 py-3 p-0 ">

                      {user.email}

                      <div className='mt-2 d-flex justify-content-around'>

                        <Button className='bg-info' style={{backgroundColor:"rgb(49, 210, 242)"}}>Add</Button>

                        <Button className='border-0' style={{backgroundColor:"rgb(220, 53, 69)"}}>Remove</Button>

                      </div>

                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>
            
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
          
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  )
}

export default SideBar2