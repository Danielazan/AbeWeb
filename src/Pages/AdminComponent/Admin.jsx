import React from "react";
import Navbar from "Components/NavbarAdmin";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "Pages/AdminComponent/Style/Style.css";
import Sectiontrack from "./Sectiontrack";
import UserHook from "Hook/UserHook";

function Admin() {
  const { User, dispatchU } = UserHook();
  if (!User.user.isAdmin){
    return (
      <div>
      <Navbar/>
        <div className='denied'>
          <h1> Access Denied, You Cannot Access This Page</h1>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <Navbar />

      <Container fluid className='admin'>
        <Row className='pt-5'>
          <Col xs={12} lg={2}>
            <Sidebar />
          </Col>

          <Col xs={12} lg={7}>
            <Main />
          </Col>

          <Col className='widget-p' xs={12} lg={3}>
            <Sectiontrack />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Admin;
