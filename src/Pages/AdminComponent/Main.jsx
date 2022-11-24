import React,{useEffect,useState} from 'react'
	import {Table} from "react-bootstrap";
	import axios from 'axios';
	import {useProductContext} from "Hook/useProduct"
	import {MdEdit,MdDelete} from "react-icons/md"
	
	function Main() {
	
		const {Product, dispatch} = useProductContext()

		const [materials, setmaterials] = useState([])
		const [customer, setCustomer] = useState([])
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

		function handleMaterialCustomer(name){
			let data={
				materialName:name
			}
			axios.patch("https://abe-api.onrender.com/api/materialCustomer",data)
				.then(res=>{
					setCustomer(res.data.customers)

					console.log(customer)
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
	    
	  return (
	    <React.Fragment>
	      <div style={{color:"#fda07e"}}>
	        <h2 className='main-h2 pb-3'>Collections</h2>
	
			{
				<div className={visibility ? "vis" : "notvis"}>
					{/* <h2>Product : {customer[0].itemsBought.item}</h2> */}

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
							customer.map((person)=>{
								return(
									<tr>
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
			
	       <section>
	        <h4 style={{color:"#fda07e"}}>New Widget</h4>
	

	            <p style={{color:"#fda07e"}}>Map Through News API</p>
	            
	            <Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
	                <thead>
	                    <tr>
	                        <th style={{textAlign:"center"}}>Name</th>
	                        <th style={{textAlign:"center"}}>Collection Name</th>
	                        <th style={{textAlign:"center"}}>Price</th>
	                        <th style={{textAlign:"center"}}>Amount Sold</th>
							<th></th>
	                    </tr>
	                </thead>
	                <tbody>
	                    {
	                        Product && Product.map(item=>{
	                            return(
	                                <tr key={item._id}>
	                                    <td><button onClick={()=>handleMaterialCustomer(item.Name)} className='name-btn'>{item.Name}</button></td>
	                                    <td style={{textAlign:"center"}}>{item.collectionName}</td>
	                                    <td style={{textAlign:"center"}}>{item.Price}</td>
	                                    <td style={{textAlign:"center"}}>{item.AmonutSold}</td>
										<td>
											<div className="d-flex justify-content-around flex-lg-row flex-column">
												<MdEdit size={"2em"} style={{color:"rgb(49, 210, 242)"}}/>
												<MdDelete className='mt-3 mt-lg-0' size={"2em"} onClick={()=> handleDelete(item)} style={{color:"rgb(220, 53, 69)"}}/>
											</div>
										</td>
	                                </tr>
	                            )
	                        })
	                    }
	                </tbody>
	            </Table>
	       </section>
	

	

	      </div>
	    </React.Fragment>
	  )
	}
	

	export default Main

