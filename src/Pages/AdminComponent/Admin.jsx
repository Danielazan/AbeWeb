import React from 'react'
import Datum  from "./data"
import TodoForm from "./components/todoForm"
import TodoList from "Pages/AdminComponent/components/todoList"

function Admin() {
  return (
    <div className='todo-app'>
          <TodoList/>
       
    </div>
  )
}

export default Admin