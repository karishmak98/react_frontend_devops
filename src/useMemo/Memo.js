import React, { useState,useMemo } from 'react'

const Memo = () => {
    const [number,setNumber]=useState(0)
    const squareNumber=(number)=>{
        console.log("squaring is done")
       return Math.pow(number,2)
    }
    // const squaredNumber=squareNumber(number)

    //Using useMemo
    const squaredNumber=useMemo(()=>{
        return squareNumber(number)
    },[number])

    const [counter,setCounter]=useState(0)
  

    const handleChange=(e)=>{
    setNumber(e.target.value)
    }
    
    const handleClick=()=>{
        console.log("click me")
        setCounter(counter+1)
    }

  return (
    <div>
        <h1>Use Memo</h1>
        <input
        type='number'
        value={number}
        onChange={handleChange}
        />
        <div>OUTPUT: {squaredNumber}</div>
        <button onClick={handleClick}>Click me</button>
        <div>count:{counter}</div>
    </div>
  )
}

export default Memo