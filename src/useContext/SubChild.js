import React, { useContext } from 'react'
import { GlobalInfo } from '../App'

function SubChild() {
    const {color,getColor}=useContext(GlobalInfo)

  return (
    <>
    <h1 style={{color:color}}>SubChild</h1>
    {/* {sending data from child to parent} */}
    <button onClick={()=>getColor('black')}>Click me</button>
    </>
  )
}

export default SubChild