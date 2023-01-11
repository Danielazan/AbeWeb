import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import axios from "axios";
import StatsTable from "./StatsTable";
import pic from "Assets/Images/pic17.svg"
import base from "base.js";


function Stats() {
  const [materials, setmaterials] = useState([]);
  const [rfno, setRfno] = useState();
  const [stock, setStock] = useState();
  const [prod, setProd] = useState("");
  const [iden, setIden] = useState("");
  const [stats, setStats] = useState([])
  const [isLoading, setisLoading]= useState(false)
  const [Error, setError] = useState(null)

  useEffect(() => {
    getp();
  }, []);

  function getp() {
    axios.get(`${base.url}/api/material`).then((res) => {
      setmaterials(res.data);
    });
  }

  // Getting Stats For Table

  function getStats(id, name) {
    
    setProd(name);
    setIden(id);

    axios.get(`${base.url}/api/batches/${name}`).then((res) => {
      console.log(res.data);

      setStats(res.data);
    });
  }

  // Post Request For Stats

const handleForm= async ()=> {
    try{
      if (stock === ""){
        setError("please fill all fields with the correct details")
    
        throw new Error('please fill all fields with the correct details');  
        
      }
    console.log(stock)
      setisLoading(true)
        let data = {
          RefNo: rfno,
          MaterialName: prod,
          StockIn: Number(stock),
        };
    
        const datum = await {
          Stock : Number(stock),
          M_Name:prod
    
        }
    
        await axios.patch(`${base.url}/api/batches/${iden}`, datum)
        .catch(datum =>{
          setisLoading(false)
          console.log(datum.response.data.error)
    
          setError(datum.response.data.error)
      })
        await axios.post(`${base.url}/api/Tbatch/${iden}`,datum )
        .catch(datum =>{
          setisLoading(false)
          console.log(datum.response.data.error)
    
          setError(datum.response.data.error)
      })
        await axios.post(`${base.url}/api/batch/${iden}`, data).then((res) => {
          console.log(res.data);
        }).catch(datum =>{
          setisLoading(false)
          console.log(datum.response.data.error)
    
          setError(datum.response.data.error)
      });
    
       
    
        setRfno("");
        setStock("");
    
        setisLoading(false)
    
        window.location.reload(true)
    }
    catch (error){
      return error ? setError("please fill all fields with the correct details") : null 
    }
  }

  return (
    <React.Fragment>
      <Container fluid className='Stats'>
        <Navbar />
        <Container>
          <Row>
            <Col xs={12} xl={7}>
              <h2 className='Stats-h2'>Products</h2>

              <Row
                style={{
                  borderBlock: "3px solid #2e180e",
                  fontWeight: "600",
                }}
                className='py-3 mt-3'
              >
                <Col className='text-center trun' xs={3}>
                  Name
                </Col>

                <Col className='text-center trun' xs={2}>
                  Collection
                </Col>

                <Col className='text-center trun' xs={2}>
                  Prev Batch
                </Col>

                <Col className='text-center trun' xs={2}>
                  New Batch
                </Col>

                <Col className='text-center trun' xs={3}>
                  Total Quantity
                </Col>
              </Row>

              {materials &&
                materials.map((item) => {
                  return (
                    <Row className='py-4 tb-row' key={item._id}>
                      <Col
                        className='text-center'
                        xs={3}
                        onClick={() => getStats(item._id, item.Name)}
                      >
                        {item.Name}
                      </Col>

                      <Col className='text-center' xs={2}>
                        {item.collectionName}
                      </Col>

                      <Col className='text-center' xs={2}>
                        {item.PreviousBatch}
                      </Col>

                      <Col className='text-center' xs={2}>
                        {item.NewBatch}
                      </Col>

                      <Col className='text-center' xs={3}>
                        {item.TotalBatch}
                      </Col>
                    </Row>
                  );
                })}

              <StatsTable stats={stats}/>
            </Col>

            {/* Form */}

            <Col xs={12} xl={5}>
              <div className='mt-xl-2 mt-5 ms-xl-3'>
                <h2 className='Stats-h2'>Set Data</h2>
                <h5 className='Stats-h2'>Product Refrence : {prod}</h5>
                <Form>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label className='form-label'>Ref No.</Form.Label>

                    <Form.Control
                      type='number'
                      value={rfno}
                      onChange={(e) => setRfno(e.target.value)}
                      placeholder='Enter Ref Number'
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label className='form-label'>Stock In</Form.Label>

                    <Form.Control
                       required
                      type='number'
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      placeholder='Enter Balance'
                      
                    />

                    <div className='d-flex justify-content-center'>
                    
                      <img className={` ${isLoading ? "d-block" : "d-none" }  border-0 py-4 `} src={pic} alt='Logging In...' height='100px' />
                    
                      <Button
                        disabled={isLoading}
                        style={{ backgroundColor: "rgb(26, 20, 100)" }}
                        className='w-75 mt-5 border-0 py-4 rounded-pill mb-5'
                        onClick={handleForm}
                      >
                        Submit
                      </Button>

                      {Error && (
                          <p
                            style={{
                              backgroundColor: "rgb(248, 215, 218)",
                              color: "rgb(132, 32, 41)",
                              border: "2px solid rgb(245, 194, 199)",
                            }}
                            className='py-2 rounded-2 ps-2 mt-3'
                          >
                            {Error}
                          </p>
                        )}
                    </div>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Stats;
