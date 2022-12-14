import React, { useState, useEffect } from "react";
import { Button, Offcanvas, ListGroup, Form, Accordion } from "react-bootstrap";
import { MdAdminPanelSettings, MdRoofing } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import axios from "axios";
import { useCollectionContext } from "Hook/CollectionHook";
import { useProductContext } from "Hook/useProduct";
import base from "base.js";



function SideBar2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [colname, setColname] = useState("");
  const [colform, setColform] = useState(false);
  const [users, setUsers] = useState([]);
  const [vis, setVis] = useState(false);
  const [pass, setPass] = useState(false);
  const [supply, setSupply] = useState([]);
  const { Collection, dispatch2 } = useCollectionContext();
  const { Product, dispatch } = useProductContext();

  useEffect(() => {
    getp();

    getUsers();

    notSupplied();
  }, [dispatch]);

  const handleGet = async (name) => {
    const url = `${base.url}/api/products/${name}`;

    const response = await axios.get(url);

    const json = await response.data.materialss;

    dispatch({ type: "SET Product", payload: json });
  };

  const getp = async () => {
    const url = `${base.url}/api/products`;

    const response = await axios.get(url);

    const json = await response.data;

    dispatch2({ type: "SET Collection", payload: json });

    const res = json.map((iteam) => {
      return iteam.collectionName;
    });
  };

  function createProduct() {
    let data = {
      collectionName: colname,
    };
    axios.post(`${base.url}/api/products`, data).then((res) => {
      console.log(res);
    });
  }

  function getUsers() {
    axios.get(`${base.url}/api/users`).then((res) => {
      setUsers(res.data);
    });
  }

  const addSalesPerson = async (mail) => {
    let data = {
      email: mail,

      headers: {
        "Content-Type": "application/json",
      },
    };

    if (pass) {
      await axios.patch(`${base.url}/api/user`, data).then((res) => {
        console.log(res);
      });
    }

    console.log(mail);
  };

  const removeSalePerson = async (mail) => {
    let data = {
      email: mail,

      headers: {
        "Content-Type": "application/json",
      },
    };
    alert("this person will no longer be a sales person");

    await axios.patch(`${base.url}/api/ReUser`, data).then((res) => {
      console.log(res);
    });

    console.log(mail);
  };

  function notSupplied() {
    axios.get(`${base.url}/api/NotSupplied`).then((res) => {
      setSupply(res.data);
    });
  }

  const addSupply = async (id) => {
    await axios.patch(`${base.url}/api/Supplied/${id}`).then((res) => {
      // setSupply(res.data);
      console.log(res.data);
    });
    //console.log(id)
  };

  return (
    <React.Fragment>
      <Button variant='none' className='d-lg-none' onClick={handleShow}>
        <MdAdminPanelSettings style={{ color: "#fda07e" }} size={30} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive='lg'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#210440" }}>
          <Accordion className='w-100 mt-5' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Collection</Accordion.Header>
              <Accordion.Body
                style={{ backgroundColor: "#210440", color: "#fda07e" }}
              >
                <ListGroup
                  style={{ backgroundColor: "#210440", color: "#fda07e" }}
                  className='SideList mt-4'
                  variant='flush'
                >
                  <ListGroup.Item
                    style={{ backgroundColor: "#210440", color: "#fda07e" }}
                  >
                    <Button
                      className='border-0'
                      onClick={() => setColform(!colform)}
                      style={{ backgroundColor: "#fda07e", color: "#210440" }}
                    >
                      {" "}
                      <AiFillFolderAdd size={"1.5em"} /> Collection
                    </Button>

                    <div className={colform ? "vis" : "notvis"}>
                      <Form.Control
                        style={{ borderColor: "#fda07e", color: "#fda07e" }}
                        placeholder='Collection Name'
                        className='mt-3 bg-transparent format'
                        onChange={(e) => setColname(e.target.value)}
                        value={colname}
                      />

                      <Button
                        className='border-0 mt-3 w-100'
                        onClick={createProduct}
                        style={{ backgroundColor: "#fda07e", color: "#210440" }}
                      >
                        Add Collection
                      </Button>
                    </div>
                  </ListGroup.Item>

                  {Collection &&
                    Collection.map((item) => {
                      return (
                        <ListGroup.Item
                          style={{
                            backgroundColor: "#210440",
                            color: "#fda07e",
                            borderColor: "#fda07e",
                          }}
                          className='my-2 py-3 p-0  list'
                          action
                          key={item._id}
                          onClick={() => handleGet(item.collectionName)}
                        >
                          <MdRoofing className='me-2' size={"1.5em"} />

                          {item.collectionName}
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Access Users</Accordion.Header>
              <Accordion.Body
                style={{ backgroundColor: "#210440", color: "#fda07e" }}
              >
                <ListGroup
                  style={{
                    backgroundColor: "#210440",
                    color: "#fda07e",
                    borderColor: "red",
                  }}
                  variant='flush'
                >
                  {users &&
                    users.map((user) => {
                      return (
                        <ListGroup.Item
                          key={user._id}
                          style={{
                            backgroundColor: "#210440",
                            color: "#fda07e",
                            borderColor: "#fda07e",
                          }}
                          className='my-2 py-3 p-0 '
                        >
                          {user.email}

                          <div className='mt-2 d-flex justify-content-around'>
                            <Button
                              className='bg-info'
                              style={{ backgroundColor: "rgb(49, 210, 242)" }}
                              onClick={() => setVis(!vis)}
                            >
                              Add
                            </Button>

                            <Button
                              className='border-0'
                              style={{ backgroundColor: "rgb(220, 53, 69)" }}
                              onClick={() => removeSalePerson(user.email)}
                            >
                              Remove
                            </Button>
                          </div>

                          <div className={vis ? "vis" : "notvis"}>
                            <Form.Check
                              inline
                              label='Check to add'
                              name='group1'
                              className='mt-2'
                              value={pass}
                              onChange={() => setPass(true)}
                            />

                            <Button
                              className='mt-2 w-100'
                              onClick={() => addSalesPerson(user.email)}
                            >
                              Submit
                            </Button>
                          </div>
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Not Supplied</Accordion.Header>
              <Accordion.Body
                style={{ backgroundColor: "#210440", color: "#fda07e" }}
              >
                <ListGroup
                  style={{
                    backgroundColor: "#210440",
                    color: "#fda07e",
                    borderColor: "red",
                  }}
                  variant='flush'
                >
                  {supply &&
                    supply.map((dist) => {
                      return (
                        <ListGroup.Item
                          key={dist._id}
                          style={{
                            backgroundColor: "#210440",
                            color: "#fda07e",
                            borderColor: "#fda07e",
                          }}
                        >
                          {dist.FirstName} {dist.LastName}
                          <Button
                            className='border-0 mt-2'
                            style={{
                              backgroundColor: "#fda07e",
                              color: "#210440",
                            }}
                            onClick={() => addSupply(dist._id)}
                          >
                            Supplied
                          </Button>
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}

export default SideBar2;
