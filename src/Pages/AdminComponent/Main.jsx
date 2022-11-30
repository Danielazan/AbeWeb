import React,{useEffect,useState} from 'react'
	import {Table,Button, Form} from "react-bootstrap";
	import axios from 'axios';
	import {useProductContext} from "Hook/useProduct"
	import {MdEdit,MdDelete} from "react-icons/md"
	import {IoIosAddCircle} from "react-icons/io"
	import pic from "Assets/Images/pic15.svg"
	
	function Main() {
	
		const {Product, dispatch} = useProductContext()
		const [materials, setmaterials] = useState([])
		const [customer, setCustomer] = useState([])
		const [loading, setLoading] = useState()
		const [badge, setBadge] = useState(false)
		const [qty, setQty] = useState("")
		const [price, setPrice] = useState(false)
		const [newprice, setNewprice] = useState("")
		const [visibility, setVisibility] = useState(false)
	

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
		

		function handleDelete(item){

			axios.delete(`https://abe-api.onrender.com/api/material/${item._id}`)
			
				.then((res)=>{
					console.log(res)

					dispatch({type:"DELETE Product",payload:res.data})

				})
			
		}

		function handleEdit(id){
		
			let data={
				Price:newprice
			}
			axios.patch(`https://abe-api.onrender.com/api/material/${id}`,data)
				.then(res=>{
					console.log(res)
				})
		}

		function handleMaterialCustomer(name){

			setLoading(true)

			let data={
				
				materialName:name
			}

			axios.patch("https://abe-api.onrender.com/api/materialCustomer",data)
				.then(res=>{
					setCustomer(res.data.customers)

					console.log(customer)

					setLoading(false)

				})
				
			setVisibility(true)
		}
	

	    const GetProducts = async ()=>{
	        const name = "roofing"
	        const url = `https://abe-api.onrender.com/api/products/${name}`
	        const response =await axios.get(url)
	
	        const json = await response.data.materialss
	
	        dispatch({type:"SET Product", payload:json})
	
	    }

		function submitBatch(id){
			console.log(id)
		
			let data={
				NewBatch:qty
			}
			axios.patch(`https://abe-api.onrender.com/api/material/${id}`,data)
				.then(res=>{
					console.log(res)
				})

			setQty("")

		}
	    
	  return (
	    <React.Fragment>
	      <div style={{color:"#fda07e"}}>
	        <h2 className='main-h2 pb-3'>Collections</h2>
	       <section>
	        <h4 style={{color:"#fda07e"}}>New Widget</h4>
	

	            <p style={{color:"#fda07e"}}>Map Through News API</p>
	            
	            <Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
	                <thead>
	                    <tr>
	                        <th style={{textAlign:"center"}}>Name</th>
	                        <th style={{textAlign:"center"}}>Collection Name</th>
	                        <th style={{textAlign:"center"}}>Price</th>
	                        <th style={{textAlign:"center"}}>Quantity Sold</th>
							<th style={{textAlign:"center"}}>New Batch</th>
							<th></th>
	                    </tr>
	                </thead>
	                <tbody>
	                    {
	                        Product && Product.map(item=>{
	                            return(
	                                <tr key={item._id}>

	                                    <td>
											<button style={{textAlign:"start"}} onClick={()=>handleMaterialCustomer(item.Name)} className='name-btn px-2 rounded-1 py-2'>{item.Name}</button>
										</td>

	                                    <td style={{textAlign:"center"}}>{item.collectionName}</td>

										{/* Price Change */}

	                                    <td style={{textAlign:"center"}}>
											{item.Price}

											<div className={price ? "vis" : "notvis"}>
												<Form.Control type='number' value={newprice} onChange={(e)=> setNewprice(e.target.value)} className='format bg-transparent mt-2' style={{borderColor:"#fda07e",color:"#fda07e"}} placeholder="Set Price"/>

												<Button className='border-0 my-2 w-50' onClick={()=>handleEdit(item._id)} style={{backgroundColor:"#fda07e",color:"#210440"}}>Change</Button>
											</div>
										</td>

	                                    <td style={{textAlign:"center"}}>{item.Quantitiy}</td>

										{/* Quantity Change */}

										<td>
											<Button onClick={()=> setBadge(!badge)} className='border-0 w-100' style={{backgroundColor:"#fda07e",color:"#210440"}}><IoIosAddCircle size="1.5em"/> Batch</Button>

											<div className={badge ? "vis" : "notvis"}>
												<Form.Control type='number' className='format bg-transparent mt-4' value={qty} onChange={(e)=> setQty(e.target.value)} style={{borderColor:"#fda07e",color:"#fda07e"}} placeholder="Quantity Added"/>

												<Button className='border-0 my-2 w-50' onClick={()=>submitBatch(item._id)} style={{backgroundColor:"#fda07e",color:"#210440"}}>Add</Button>
											</div>
										</td>

										<td>
											<div className="d-flex justify-content-around flex-lg-row flex-column">
												<MdEdit title='Edit Price' size={"2em"} onClick={()=>setPrice(!price)} style={{color:"rgb(49, 210, 242)"}}/>
												<MdDelete title='Delete' className='mt-3 ms-4 mt-lg-0' size={"2em"} onClick={()=> handleDelete(item)} style={{color:"rgb(220, 53, 69)"}}/>
											</div>
										</td>

	                                </tr>
	                            )
	                        })
	                    }
	                </tbody>
	            </Table>
	       </section>


		   {loading ? <center><img src={pic} height="100px" alt="Loading..."/> </center> : null}
			
			{
				<div className={visibility ? "vis" : "notvis"}>
					<h2 className='mt-4'>Customer Details Table</h2>

					<Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
					<thead>
	                    <tr>
	                        <th style={{textAlign:"center"}}>Customer Name</th>
	                        <th style={{textAlign:"center"}}>Phone No</th>
	                        <th style={{textAlign:"center"}}>Amount Paid</th>
							<th style={{textAlign:"center"}}>Site Location</th>
	                        <th style={{textAlign:"center"}}>Quantity</th>
	                    </tr>
	                </thead>
					<tbody>
						{
							customer.map((person,index)=>{
								return(
									<tr key={index}>
										<td>{person.FirstName} {person.LastName}</td>
										<td style={{textAlign:"center"}}>{person.PhoneNumber}</td>
										<td style={{textAlign:"center"}}>{person.TotalAmountPaid}</td>
										<td>{person.SiteLocation}</td>
										<td style={{textAlign:"center"}}>{person.itemsBought.quantity}</td>
									</tr>
								)
							})
						}
					</tbody>
						
					</Table>
				</div>
			}
			
	

	

	      </div>
	    </React.Fragment>
	  )
	}
	

	export default Main

