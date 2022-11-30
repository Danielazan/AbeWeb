import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./Style/Style.css"
import axios from "axios"
import UserHook from "Hook/UserHook"
import { useNavigate } from 'react-router-dom';


function From() {
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [isLoading, setisLoading] = useState(false)

    const [Error, setError] = useState(null)

    const {dispatchU}=UserHook()

    const navigate = useNavigate();

    

    const handleSubmit = async (e)=>{

        e.preventDefault()

        const url ="https://abe-api.onrender.com/api/login"

        const obj= {email,password}

        console.log(obj)

        setisLoading(true)

        const response = await axios({
          method:"post",
          url:url,
         data:JSON.stringify(obj),
         headers:{
           "Content-Type":"application/json"
         }
        }).catch(datum =>{
            setisLoading(false)
            console.log(datum.response.data.error)

            setError(datum.response.data.error)
        })
        const json =await response.data

        if (response){
            localStorage.setItem("User", JSON.stringify(json))

            setEmail("")
        
            setPassword("")
        
            navigate('/Sales')

        }

        
        dispatchU({type:"Login", payload:json})
        
    }
  return (
    <React.Fragment>
        <Row>
            <Col xs={12} lg={3}></Col>
            <Col xs={12} lg={6}>
                <Container>
                    <h1 className='form-h1'>Welcome Back</h1>
                    <p className='form-p'>Welcome back! Please enter your details</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Email </Form.Label>

                            <Form.Control type="email" placeholder="Enter Your Email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='form-label'>Password </Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Container fluid className='d-flex justify-content-between'>
                            <Form.Check style={{fontSize:"12px"}} type="checkbox" id="custom-switch" label="Remember For 30 days"/>

                            <Link Navigate to="/" className='form-label' style={{fontSize:"12px"}}>Forgot Password</Link>                    
                        </Container>

                        <Button
                        disabled={isLoading} 
                        variant='dark' className='w-100 mt-5'
                        onClick={handleSubmit}
                        >
                        Sign In
                        </Button>
                        {Error &&
                        <p style={{backgroundColor:"rgb(248, 215, 218)",color:"rgb(132, 32, 41)",border:"2px solid rgb(245, 194, 199)"}} 
                        className='py-2 rounded-2 ps-2 mt-3'>
                        {Error}
                        </p>}
                    </Form>
                    <Container className='d-flex justify-content-around my-4'>
                        <p className='form-p'>Don't have an account?</p>

                        <Link Navigate style={{textDecoration:"none",fontWeight:"600",color:"black"}} to="/">Sign Up for Free</Link>
                    </Container>
                </Container>
            </Col>
            <Col xs={12} lg={3}></Col>
        </Row>
    </React.Fragment>
  )

}  
export default From