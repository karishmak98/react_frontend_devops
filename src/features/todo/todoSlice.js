import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello world"}]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
         const todo={
            id:nanoid(),text:action.payload
         }
         state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!==action.payload)  
        },
        updateTodo:(state,action)=>{
            const updateTodo=action.payload
            state.todos=state.todos.map((todo)=>todo.id==action.payload?updateTodo:todo)
        
        }

    }
})

//export all actions so that we can use in components
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

//export slice as reducer for store
export default todoSlice.reducer