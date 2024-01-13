import React from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
  const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
  
  return (
    <>
    <div>
        Todo
    </div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
        
    ))}
    </>
    
  )
}

export default Todo