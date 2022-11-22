import React,{useEffect,useState} from 'react'
	import {Table} from "react-bootstrap";
	import axios from 'axios';
	import Imageapi from "./Imageapi"
	import {useProductContext} from "Hook/useProduct"
	import {MdEdit,MdDelete} from "react-icons/md"
	
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

	            dispatch({type:"ROOFING",payload:materials})
	        })
	

	    }
	

	    const GetProducts = async ()=>{
	        const name = "roofing"
	        const url = `https://abe-api.onrender.com/api/products/${name}`
	        const response =await axios.get(url)
	

	        const json = await response.data.materialss
	

	        dispatch({type:"SET Product", payload:json})
	

	        console.log (json)
	    }
	    
	  return (
	    <React.Fragment>
	      <div style={{color:"#fda07e"}}>
	        <h2 className='main-h2 pb-3'>Collections</h2>
	

	       <section id='cardwidget'>
	        <h4 style={{color:"#fda07e"}}>New Widget</h4>
	

	            <p style={{color:"#fda07e"}}>Map Through News API</p>
	            
	            <Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
	                <thead>
	                    <tr>
	                        <th>Name</th>
	                        <th>Collection Name</th>
	                        <th>Price</th>
	                        <th>Amount Sold</th>
							<th></th>
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
										<td>
											<div className="d-flex justify-content-around flex-lg-row flex-column">
												<MdEdit size={"2em"} style={{color:"rgb(49, 210, 242)"}}/>
												<MdDelete className='mt-3 mt-lg-0' size={"2em"}  style={{color:"rgb(220, 53, 69)"}}/>
											</div>
										</td>
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

