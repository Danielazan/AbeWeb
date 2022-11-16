import React,{useState, useEffect} from 'react'
import axios from "axios"
import TodoForm from './todoForm'
import {useProductContext} from "Hook/useProduct"

function TodoList() {
    const [todos, setTodos] = useState([])

    const {Product,dispatch} = useProductContext()


    const getProducts = async ()=>{
      const name= "roofing"

        const  url=`http://localhost:5000/api/products/${name}`

      
        const response =await axios.get(url)

        const json = await response.data.materialss


       dispatch({type:"SET Product",payload:json})

        console.log(json)
         setTodos(json)
    }
    console.log(Product)
    useEffect(() => {
      
      getProducts()
      
    }, [dispatch])
    

  return (
   <div className='text-white'>
    <h1>Collection Name</h1>
      <div>
          {
            Product && Product.map(collect =>{
              return(
                <div>
                  <h1>{collect.collectionName}</h1>
                </div>
              )
            })
          }
      </div>
   </div>
  )
}

export default TodoList