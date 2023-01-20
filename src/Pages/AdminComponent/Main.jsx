import React, { useEffect, useState, useRef } from "react";
import { Table, Button, Form, Container,ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { useProductContext } from "Hook/useProduct";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import pic from "Assets/Images/pic15.svg";
import { Link } from "react-router-dom";
import Report from "Pages/TableComponent/Table";
import base from "base.js";
import Refunds from "./Refunds"
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function Main() {
  const { Product, dispatch } = useProductContext();
  const [materials, setmaterials] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState();
  const [badge, setBadge] = useState(false);
  const [qty, setQty] = useState("");
  const [available, setAvailable] = useState(0);
  const [price, setPrice] = useState(false);
  const [newprice, setNewprice] = useState("");
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    GetProducts();
  }, [dispatch]);

  function getp() {
    axios
      .get(`${base.url}/products/roofing`)
      .then((res) => {
        setmaterials(res.data.materialss);

        console.log(res.data.materialss);

        dispatch({ type: "ROOFING", payload: materials });
      });
  }

  function handleDelete(item) {
    axios
      .delete(`${base.url}/api/material/${item._id}`)

      .then((res) => {
        console.log(res);

        console.log(customer);

        console.log(item);

        dispatch({ type: "DELETE Product", payload: res.data });
      });
  }

  function handleEdit(id) {
    let data = {
      Price: newprice,
    };
    axios
      .patch(`${base.url}/api/material/${id}`, data)
      .then((res) => {
        console.log(res);
      });
  }

  function handleMaterialCustomer(name, item) {
    setLoading(true);

    let data = {
      materialName: name,
    };

    axios.patch(`${base.url}/api/materialCustomer`, data).then((res) => {
      setCustomer(res.data.customers);

      setAvailable(item);

      setLoading(false);
    });

    setVisibility(true);
  }

  const GetProducts = async () => {
    const name = "roofing";
    const url = `${base.url}/api/products/${name}`;
    const response = await axios.get(url);

    const json = await response.data.materialss;

    dispatch({ type: "SET Product", payload: json });
  };

  const submitBatch = async (id) => {
    console.log(id);

    let data = {
      NewBatch: qty,
    };
    await axios.patch(`${base.url}/api/material/${id}`, data).then((res) => {
      console.log(res);
    });

    await axios.patch(`${base.url}/api/material/${id}`, data).then((res) => {
      console.log(res);
    });

    setQty("");
  };

  const PDFReport = useRef(null);

  const childref = useRef();

  const [Report, setReport] = useState(null);

  const handlereport = async () => {
    await setReport(<Report reff={childref} />);

    childref.current.handleExportWithFunction();
  };

  return (
    <React.Fragment>
      <div style={{ color: "rgb(1, 152, 122)" }}>
        <h2 className='main-h2 pb-3'>Collections</h2>

        <Container className='my-3'>
          <ButtonGroup>
            <Button
              style={{
                backgroundColor: "rgb(1, 152, 122)",
                color: "white",
                fontWeight: "700",
              }}
              className='border-0'
            >
              <Link
                to='/Stats'
                style={{ textDecoration: "none", color: "white" }}
              >
                Product Stats
              </Link>
            </Button>

            <Button
              style={{
                backgroundColor: "rgb(1, 152, 122)",
                color: "white",
                fontWeight: "700",
              }}
              className='border-0'
            >
              <Link
                to='/EnquiryTable'
                style={{ textDecoration: "none", color: "white" }}
              >
                Customer Enquiries
              </Link>
            </Button>

            <Button
              style={{
                backgroundColor: "rgb(1, 152, 122)",
                color: "white",
                fontWeight: "700",
              }}
              className='border-0'
            >
              <Link
                to='/Table'
                style={{ textDecoration: "none", color: "white" }}
              >
                Sales Report
              </Link>
            </Button>

            <Button
              style={{
                backgroundColor: "rgb(1, 152, 122)",
                color: "white",
                fontWeight: "700",
              }}
              className='border-0'
            >
              <Link
                to='/Refunds'
                style={{ textDecoration: "none", color: "white" }}
              >
                Refunds
              </Link>
            </Button>
          </ButtonGroup>
        </Container>

        <section>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderColor: "none",
            }}
            className='main'
          >
            <thead>
              <tr
                style={{ backgroundColor: "rgb(1, 152, 122)", color: "white"}}
              >
                <th style={{ textAlign: "center" }} className='py-2'>
                  Name
                </th>
                <th style={{ textAlign: "center" }} className='py-2'>
                  Collection Name
                </th>
                <th style={{ textAlign: "center" }} className='py-2'>
                  Price
                </th>
                <th style={{ textAlign: "center" }} className='py-2'>
                  Quantity Sold
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Product &&
                Product.map((item) => {
                  return (
                    <tr key={item._id} className='data-row '>
                      <td className="py-3">
                        <button
                          style={{ textAlign: "start" }}
                          onClick={() =>
                            handleMaterialCustomer(item.Name, item.TotalBatch)
                          }
                          className='name-btn ms-lg-2 px-2 rounded-1 py-2'
                        >
                          {item.Name}
                        </button>
                      </td>

                      <td style={{ textAlign: "center" }}>
                        {item.collectionName}
                      </td>

                      {/* Price Change */}

                      <td style={{ textAlign: "center" }}>
                        {item.Price}

                        <div className={price ? "vis" : "notvis"}>
                          <Form.Control
                            type='number'
                            value={newprice}
                            onChange={(e) => setNewprice(e.target.value)}
                            className='format bg-transparent mt-2'
                            style={{
                              borderColor: "rgb(1, 152, 122)",
                              color: "rgb(1, 152, 122)",
                            }}
                            placeholder='Set Price'
                          />

                          <Button
                            className='border-0 my-2 w-100'
                            onClick={() => handleEdit(item._id)}
                            style={{
                              backgroundColor: "rgb(1, 152, 122)",
                              color: "white",
                              fontWeight: "600",
                            }}
                          >
                            Change
                          </Button>
                        </div>
                      </td>

                      <td style={{ textAlign: "center" }}>
                        {item.QuantitiySold.map((ted) => {
                          return ted.totalAmount;
                        })}
                      </td>

                      {/* Quantity Change */}

                      {/* <td>
                        <Button
                          onClick={() => setBadge(!badge)}
                          className='border-0 w-100'
                          style={{
                            backgroundColor: "#fda07e",
                            color: "#210440",
                          }}
                        >
                          <IoIosAddCircle size='1.5em' /> Batch
                        </Button>

                        <div className={badge ? "vis" : "notvis"}>
                          <Form.Control
                            type='number'
                            className='format bg-transparent mt-4'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            style={{ borderColor: "#fda07e", color: "#fda07e" }}
                            placeholder='Quantity Added'
                          />

                          <Button
                            className='border-0 my-2 w-50'
                            onClick={() => submitBatch(item._id)}
                            style={{
                              backgroundColor: "#fda07e",
                              color: "#210440",
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </td> */}

                      <td>
                        <div className='d-flex justify-content-around flex-column flex-lg-row py-3'>
                          <MdEdit
                            title='Edit Price'
                            size={"2em"}
                            onClick={() => setPrice(!price)}
                            style={{ color: "rgb(1, 152, 122)" }}
                          />

                          <MdDelete
                            title='Delete'
                            className='mt-3 ms-lg-4 mt-lg-0'
                            size={"2em"}
                            onClick={() => handleDelete(item)}
                            style={{ color: "rgb(220, 53, 69)" }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>

        {loading ? (
          <center>
            <img src={pic} height='100px' alt='Loading...' />{" "}
          </center>
        ) : null}

        {
          <div className={visibility ? "vis" : "notvis"}>
            <div className='d-flex justify-content-between'>
              <h2 className='mt-4'>Customer Details Table</h2>
              <h4 className='mt-4' style={{ color: " rgb(1, 152, 122)" }}>
                Available Quantity : {available}
              </h4>
            </div>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                color: "black",
              }}
              className='main2'
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "rgb(1, 152, 122)",
                    color: "white",
                  }}
                >
                  <th style={{ textAlign: "center" }} className='py-2'>
                    Customer Name
                  </th>
                  <th style={{ textAlign: "center" }} className='py-2'>
                    Phone No
                  </th>
                  <th style={{ textAlign: "center" }} className='py-2'>
                    Amount Paid
                  </th>
                  <th style={{ textAlign: "center" }} className='py-2'>
                    Site Location
                  </th>
                  <th style={{ textAlign: "center" }} className='py-2'>
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {customer.map((person, index) => {
                  return (
                    <tr key={index} className="main-2-row">
                      <td className='ps-lg-3 py-4' style={{fontWeight:'600'}}>
                        {person.FirstName} {person.LastName}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {person.PhoneNumber}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {person.TotalAmountPaid}
                      </td>
                      <td>{person.SiteLocation}</td>
                      <td style={{ textAlign: "center" }}>
                        {person.itemsBought.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default Main;
