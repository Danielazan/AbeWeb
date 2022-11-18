import React,{useEffect,useState} from 'react'
import {Card,Button,Table} from "react-bootstrap";
import axios from 'axios';
import Imageapi from "./Imageapi"
import {useProductContext} from "Hook/useProduct"


function Main() {

    
const {Product, dispatch} = useProductContext()

const [materials, setmaterials] = useState([])

    useEffect(() => {
        GetProducts()
    },[dispatch])

    function getp(){

        axios.get("https://abe-api.onrender.com/api/products/roofing")
            .then(res=>{
            setmaterials(res.data.materialss)

            console.log(res.data.materialss)

<<<<<<< HEAD
            dispatch({type:"ROOFING",payload:materials})
        })
=======
    //         dispatch({type:"ROOFING",payload:materials})
    //     })
    // }

    const GetProducts = async ()=>{
        const name = "roofing"
        const url = `https://abe-api.onrender.com/api/products/${name}`
        const response =await axios.get(url)

        const json = await response.data.materialss

        dispatch({type:"SET Product", payload:json})

        console.log (json)
>>>>>>> ee258e3c0534358b098f71e8be83f8d3103d4412
    }
    
  return (
    <React.Fragment>
      <div style={{color:"#fda07e"}}>
        <h2 className='main-h2 pb-3'>Collections</h2>

       <section id='cardwidget'>
        <h4 style={{color:"#fda07e"}}>New Widget</h4>

            <p style={{color:"#fda07e"}}>Map Through News API</p>
            
            <button onClick={getp}>Click</button>
            <Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Collection Name</th>
                        <th>Price</th>
                        <th>Amount Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Product && Product.map(item=>{
                            return(
                                <tr key={item._id}>
                                    <td>{item.Name}</td>
                                    <td>{item.collectionName}</td>
                                    <td>{item.Price}</td>
                                    <td>{item.AmonutSold}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
       </section>

       <Imageapi/>

      </div>
    </React.Fragment>
  )
}

export default Main

