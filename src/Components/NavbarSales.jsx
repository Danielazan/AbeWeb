import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Nav,Navbar} from "react-bootstrap"

function Navigate() {

  const [nav, setNav] = useState(false)

  function change(){
    if(window.scrollY >= 100){
      setNav(true)
    }
    else{
      setNav(false)
    }
  }

  window.addEventListener('scroll',change)
  return (
    <React.Fragment>
      <Navbar
        fixed='top'
        className={`${nav ? "nav-active" : "nava"} bar `}
        expand='lg'
      >
        <Container className='bg-transparent py-2'>
          <Link
            Navigate
            to='/'
            className={`${nav ? "brand-active" : "brand"} ms-3 `}
          >
            <h3>
              Authentic Roofing Tiles <br />
              <span style={{ fontSize: "14px" }}>Intercontinental Limited</span>
            </h3>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto mar'>
              <Nav.Link className='mx-1 ms-3 ms-lg-0'>
                <Link
                  to='/Admin'
                  className={nav ? "link-active" : "link"}
                >
                  Admin
                </Link>
              </Nav.Link>

              <Nav.Link className='mx-1 ms-3 ms-lg-0'>
                <Link to='/' className={nav ? "link-active" : "link"}>
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link className='mx-1 ms-3 ms-lg-0'>
                <Link
                  to='/Order'
                  className={nav ? "link-active" : "link"}
                >
                  Sales
                </Link>
              </Nav.Link>

              <Nav.Link className='mx-1 ms-3 ms-lg-0'>
                <Link
                  to='/Enquiry'
                  className={nav ? "link-active" : "link"}
                >
                  Enquiry
                </Link>
              </Nav.Link>

              <Nav.Link className='mx-1 ms-3 ms-lg-0'>
                <Link
                  to='/Login'
                  className={nav ? "link-active" : "link"}
                >
                  Login
                </Link>
              </Nav.Link>

              <Nav.Link className='mx-1 ms-3 ms-lg-0'>
                <Link
                  to='/Signup'
                  className={nav ? "link-active" : "link"}
                >
                  Signup
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Navigate