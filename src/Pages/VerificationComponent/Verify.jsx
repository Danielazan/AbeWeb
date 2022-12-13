import React, { useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/Style.css";
import UserHook from "Hook/UserHook";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Verify() {
  const { User } = UserHook();

  const [otp, setOtp] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const handleverify = async (e) => {
    e.preventDefault();

    const url = "https://abe-api.onrender.com/api/verifyOtp";
    const userId = User.id;
    const obj = { userId, otp };

    console.log(obj);
    setisLoading(true);

    const response = await axios({
      method: "post",
      url: url,
      data: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.data;
    setisLoading(true);

    if (!response) {
      setisLoading(false);

      //seterror(json.error)
    }

    if (response) {
      console.log("ok");
      //localStorage.setItem("User", JSON.stringify(json))

      setOtp("");

      navigate("/Login");
    }

    //dispatch({type:"Login", payload:json})
    console.log(User.email);
  };
  return (
    <React.Fragment>
      <div className='rrr'>
        <Container className='ver'>
          <Row>
            <Col xs={1} lg={3}></Col>
            <Col xs={10} lg={6}>
              <h1 className='ver-h1'>Verify Your Profile</h1>

              <p className='text-c'>
                Check Your Email <b>{User.email}</b> To Get Your Verification
                Details
              </p>

              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label className='form-label'>
                    One-Time Password{" "}
                  </Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Type Your OTP'
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <p className='ver-p pt-2 text-c mt-1'>Verify Your Email</p>
                </Form.Group>

                <Button
                  disabled={isLoading}
                  className='w-100 mt-5 sign-btn py-2'
                  onClick={handleverify}
                >
                  Verify
                </Button>
              </Form>

              <div className='d-flex my-4 justify-content-center'>
                <p className='text-black'>Already have an account?</p>

                <Link Navigate to='/Login' className='sign-link mx-2'>
                  Log In
                </Link>
              </div>
            </Col>
            <Col xs={1} lg={3}></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Verify;
