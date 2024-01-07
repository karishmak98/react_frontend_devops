import React, { useContext } from 'react'
import {GlobalInfo} from '../App'
import SubChild from './SubChild'

const Child = () => {
    const {color}=useContext(GlobalInfo)
  
    
  return (
    <>
    <h1 style={{color:color}}>Child</h1>
    <SubChild/>
    </>
  )
}

export default Child