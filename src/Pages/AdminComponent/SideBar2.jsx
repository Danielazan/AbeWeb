import {useState} from 'react'
import {Button,Offcanvas,ListGroup} from "react-bootstrap"
import { MdSettingsSuggest } from "react-icons/md"

function SideBar2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="none" className="d-lg-none" onClick={handleShow}>
        <MdSettingsSuggest className="text-white" size={30}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body   style={{backgroundColor:"rgb(25, 26, 36)"}} >
        
        <ListGroup  className="SideList">
                  {/* <div className="fw-bold text-center">Subheading</div> */}
                    
                    <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)", color:"white"}} action >
                      New Information 
                    </ListGroup.Item>

                    <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)", color:"white"}} action >
                     Add Service Member
                    </ListGroup.Item>
                    
                    <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)", color:"white"}} action >
                      Add Images
                    </ListGroup.Item>

                    <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)", color:"white"}} action >
                      Add New Videos
                    </ListGroup.Item>

                    <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)", color:"white"}} action >
                      Publications
                    </ListGroup.Item>

                    <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)", color:"white"}} action >
                      Events
                    </ListGroup.Item>
                </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideBar2