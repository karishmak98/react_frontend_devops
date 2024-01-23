import React, { useEffect,useState,useRef } from 'react'

const Ref = () => {
    const [inputValue,setInputValue]=useState("")
    const count=useRef()
    console.log(count)
    
    // useEffect(()=>{
    //  count.current=count.current+1
    // },[count.current])
    const focusInput=()=>{
        count.current.focus()
    }
  return (
    <>
      <input
        type="text"
        name="text"
        value={inputValue}
        ref={count}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* <h1>Render Count: {count.current}</h1> */}
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default Ref