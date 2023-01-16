import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Style/Style.css";
import Navbar from "Components/NavbarSales";
import axios from "axios";
import img from "Assets/Images/pic14.svg";
import { IoIosRemoveCircle } from "react-icons/io";
import SalesForm from "./SalesForm";
import { TbCurrencyNaira } from "react-icons/tb";
import IteamHook from "Hook/IteamHook";
import { useProductContext } from "Hook/useProduct";
import base from "base.js"
import UserHook from "Hook/UserHook";

function Sales() {
  const [prod, setProd] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tog, setTog] = useState(true);
  const [num, setNum] = useState(1);
  const [sa, setSa] = useState(0);
  const [sold, setSold] = useState(0);
  const [invoice, setInvoice] = useState(null);
  const { iteam, dispatchItem } = IteamHook();
  const { Product, dispatch } = useProductContext();
  const { User, dispatchU } = UserHook();

  function searchValue(e) {
    setProd(e.target.value);
  }

  useEffect(() => {
    axios.get(`${base.url}/api/material`).then((res) => {
      const json = res.data;

      dispatch({ type: "SET Product", payload: json });

      setLoading(false);
    });
  }, [dispatch]);

  const handleClick = async (item) => {
    const itemsBought = {
      _id: item._id,
      item: item.Name,
      quantity: Number(num),
      Price: item.Price,
      sold: Number(sa),
    };

    await dispatchItem({ type: "Create item", payload: itemsBought });

    setNum(1);

    setSa(0);

    console.log(iteam);
  };

  function handleRemove(id) {
    let arr = iteam.filter((item) => item._id !== id);
    dispatchItem({ type: "DELETE", payload: arr });
  }

  function clearCart() {
    dispatchItem({ type: "CLEAR", payload: [] });
  }

  function handlePrice() {
    let ans = 0;

    iteam.map((item) => {
      ans += item.Price * item.quantity;
    });

    setPrice(ans);
  }

  function handlesold() {
    let ans = 0;

    iteam.map((item) => {
      ans += item.sold * item.quantity;
    });

    setSold(ans);
  }

  useEffect(() => {
    handlePrice();

    handlesold();
  });

  const generateInvoiceNumber = () => {
    let randomNumber = Math.floor(Math.random() * 999999999) + 100000000;
    let invoiceNum = "301" + randomNumber;
    setInvoice(invoiceNum);
  };

  function call() {
    setTog(false);

    generateInvoiceNumber()
  }

  function hide() {
    setTog(true);
  }

  console.log(User.user.isSalesPerson);

  if (!User.user.isSalesPerson && !User.user.isAdmin) {
    return (
      <div>
        <Navbar />
        <div className='denied'>
          <h1> Access Denied, You Are Not A SalesPerson </h1>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container fluid className='Sales'>
        <Navbar />
        <Container>
          <div className='d-flex align-items-end justify-content-between'>
            <p style={{ color: "rgb(26, 20, 100)" }}>
              Search For Desired Product
            </p>
            <div className='d-flex'>
              <Form.Control
                type='search'
                value={prod}
                onChange={searchValue}
                className='w-100 rounded-3 bg-white'
                placeholder='Search For Product'
              />
            </div>
          </div>

          {loading ? (
            <center>
              <img src={img} alt='Loading...' height='100px' />
            </center>
          ) : null}

          <Row className='mt-5'>
            <Col xs={12} xl={7} className='check'>
              <SalesForm tog={tog} invoice={invoice} hide={hide} clear={clearCart} price={sold} />

              <div className={tog ? "changeDis" : "Dis"}>
                <Row
                  style={{
                    borderBlock: "3px solid #2e180e",
                    fontWeight: "600",
                  }}
                  className='py-3 text-center'
                >
                  <Col xl={3} xs={3} className='trun'>
                    Product
                  </Col>
                  <Col xl={2} xs={3} className='trun'>
                    Price
                  </Col>
                  <Col xl={3} xs={2} className='trun'>
                    Quantity
                  </Col>
                  <Col xl={2} xs={2} className='trun'>
                    Sold At
                  </Col>
                  <Col xl={2} xs={2} className='trun'>
                    Add
                  </Col>
                </Row>

                {Product &&
                  Product.filter((item) => {
                    return prod.toLowerCase() === ""
                      ? item
                      : item.Name.toLowerCase().includes(prod);
                  }).map((item) => {
                    return (
                      <Row
                        key={item._id}
                        className='py-4 tb-row'
                        style={{ borderBottom: "3px solid #2e180e" }}
                      >
                        <Col xl={3} xs={3} className='ps-lg-5'>
                          {item.Name}
                        </Col>

                        <Col xl={3} xs={3} className='text-center'>
                          <TbCurrencyNaira />
                          {item.Price}
                        </Col>

                        <Col xl={2} xs={2}>
                          <Form.Control
                            value={num}
                            type='number'
                            onChange={(e) => setNum(e.target.value)}
                            className='text-black text-center'
                          />
                        </Col>

                        <Col xl={2} xs={2}>
                          <Form.Control
                            value={sa}
                            type='number'
                            onChange={(e) => setSa(e.target.value)}
                            className='text-black text-center'
                          />
                        </Col>

                        <Col xl={2} xs={2} className='text-center'>
                          <Button
                            className='mx-0 border-0'
                            style={{ backgroundColor: "rgb(26, 20, 100)" }}
                            onClick={() => handleClick(item)}
                          >
                            Add
                          </Button>
                        </Col>
                      </Row>
                    );
                  })}
              </div>
            </Col>

            <Col xs={12} xl={4} className='mt-4 mt-xl-0'>
              <Row
                style={{ borderBlock: "3px solid #2e180e", fontWeight: "600" }}
                className='py-3'
              >
                <Col xs={4} className='trun'>
                  Description
                </Col>
                <Col xs={3} className='trun'>
                  Price
                </Col>
                <Col xs={3} className='trun'>
                  Sold At
                </Col>
                <Col xs={2}></Col>
              </Row>

              {iteam.map((material, index) => {
                return (
                  <div key={material._id}>
                    <Row className='my-0'>
                      <Col xs={4}>
                        <p className='mat-name'>
                          {material.item} x {material.quantity}
                        </p>
                      </Col>

                      <Col xs={3}>
                        <p className='text-black'>
                          <TbCurrencyNaira />
                          {material.Price}
                        </p>
                      </Col>

                      <Col xs={3}>
                        <p className='text-black'>
                          <TbCurrencyNaira />
                          {material.sold}
                        </p>
                      </Col>

                      <Col xs={2}>
                        <Button
                          title='Remove'
                          className='border-0'
                          style={{ backgroundColor: "rgb(26, 20, 100)" }}
                          onClick={() => handleRemove(material._id)}
                        >
                          <IoIosRemoveCircle />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                );
              })}

              <Row>
                <Col xs={4}>
                  <p className='heavy'>Total</p>
                </Col>

                <Col xs={3} className='heavy'>
                  <TbCurrencyNaira />
                  {price}
                </Col>

                <Col xs={3} className='heavy'>
                  <TbCurrencyNaira />
                  {sold}
                </Col>
              </Row>

              <Button
                className='w-100 rounded-pill py-3 mt-4 border-0'
                style={{ backgroundColor: "rgb(26, 20, 100)" }}
                onClick={call}
              >
                Checkout
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Sales;
