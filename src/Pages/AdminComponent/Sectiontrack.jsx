import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useProductContext } from "Hook/useProduct";
import { useCollectionContext } from "Hook/CollectionHook";
import base from "base.js";


function Sectiontrack() {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const { Product, dispatch } = useProductContext();

  const { Collection, dispatch2 } = useCollectionContext();

  const [collection, setCollection] = useState(
    Collection && Collection[0].collectionName
  );

  function handleCol(e) {
    setCollection(e.target.value);
  }

  const getp = async () => {
    const url = `${base.url}/api/products`;

    const response = await axios.get(url);

    const json = await response.data;

    dispatch2({ type: "SET Collection", payload: json });

    const res = json.map((iteam) => {
      return iteam.collectionName;
    });
  };

  function handlePost() {
    let data = {
      AmonutSold: Math.floor(Math.random() * (200 - 10 + 1) + 10),
      Name: name,
      collectionName: collection,
      Price: price,
      quantity: 1,
    };
    console.log(data);
    axios
      .post(`${base.url}/api/material`, data)

      .then((res) => {
        console.log(res);

        dispatch({ type: "CREATE Product", payload: res.data });
      });

    setName("");

    setPrice("");
  }

  return (
    <React.Fragment>
      <section className='widget'>
        <Form className='ms-3 '>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label style={{ color: "#fda07e" }}>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name Of Product'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='format bg-transparent py-3 px-3'
              style={{ borderColor: "#fda07e", color: "#fda07e" }}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label style={{ color: "#fda07e" }}>Collection</Form.Label>

            <Form.Select
              size=''
              className='format bg-transparent py-3 px-3'
              style={{ borderColor: "#fda07e", color: "#fda07e" }}
              onChange={handleCol}
            >
              {Collection &&
                Collection.map((opt) => {
                  return (
                    <option
                      key={opt._id}
                      value={opt.collectionName}
                      style={{ backgroundColor: "#210440", color: "#fda07e" }}
                    >
                      {opt.collectionName}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label style={{ color: "#fda07e" }}>Price</Form.Label>
            <Form.Control
              type='number'
              rows={3}
              style={{ borderColor: "#fda07e", color: "#fda07e" }}
              placeholder='Price Of Item'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='format bg-transparent py-3'
            />
          </Form.Group>
        </Form>


          <div className="d-flex ms-xl-3 mb-4">
            <Button className='w-100 border-0 py-3 py-lg-2 rounded-2 me-2' style={{backgroundColor:"#fda07e",color:"#210440"}} onClick={handlePost}>Post</Button>
           
          </div>
          {Error && <p style={{color:"red"}}>{Error}</p>}
       </section>

    </React.Fragment>
  );
}

export default Sectiontrack;
