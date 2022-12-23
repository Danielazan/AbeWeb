import React,{useState} from 'react'
import {Table,Button,Form,Row,Col, } from "react-bootstrap";
import Navbar from 'Components/Navbar'
import pic from "Assets/Images/pic15.svg"
import {IoIosAddCircle} from "react-icons/io"
import {MdEdit,MdDelete} from "react-icons/md"
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function Main() {
    const [Product, setProduct] = useState([])

    const [loading, setloading] = useState(false)

    const [visibility, setvisibility] = useState(false)

    const [available, setavailable] = useState(0)

    const [newprice, setNewprice] = useState("")

    const [price, setPrice] = useState(false)

    const [badge, setBadge] = useState(false)

    const [qty, setQty] = useState(0)

    

    const MStock = async ()=>{
        console.log("heloo")
    }

    const handleMaterialCustomer = async ()=>{

    }

    const handleEdit = async (id)=>{
        console.log("ok")
    }

    const handleDelete = async () =>{

    }

    const submitBatch = async () =>{
        
    }
  return (
    <React.Fragment>
          <Row>
        <Col xs={12} md={8}>
        <div style={{color:"#fda07e"}}>
		  		<div className='mainSpan'> 
					<h2 className='main-h2 '>Materials</h2>
					<Button 
					variant="success" 
					text="success"
					onClick={MStock}>Stock Mangement</Button>
				</div>
			<hr/>
	       
	       <section>
	            <Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
	                <thead>
	                    <tr>
	                        <th style={{textAlign:"center"}}>DATE</th>
	                        <th style={{textAlign:"center"}}>REFERNCE NUMBER</th>
	                        <th style={{textAlign:"center"}}>STOCK IN</th>
	                        <th style={{textAlign:"center"}}>STOCK OUT</th>
							<th style={{textAlign:"center"}}>BALANCE</th>
							<th></th>
	                    </tr>
	                </thead>
	                <tbody>
	                    {
	                        Product && Product.map(item=>{
	                            return(
	                                <tr key={item._id}>

	                                    <td>
											<button style={{textAlign:"start"}} onClick={()=>handleMaterialCustomer(item.Name,item.TotalBatch)} className='name-btn px-2 rounded-1 py-2'>{item.Name}</button>
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

	                                    <td style={{textAlign:"center"}}>{item.QuantitiySold.map(ted=>{
											return ted.totalAmount
										})}</td>

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
					<div className='d-flex justify-content-between'>
						<h2 className='mt-4'>Customer Details Table</h2>
						<h4 className='mt-4' style={{color:"#fda07e"}}>Available Quantity : {available}</h4>
					</div>

					{/* <Table bordered style={{width:"100%",borderCollapse:"collapse",color:"#fda07e",borderColor:"#fda07e"}} className='main' border={1} >
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
						
					</Table> */}
				</div>
			}
			
	

	

	      </div>
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </React.Fragment>
    
  )
}

export default Main
