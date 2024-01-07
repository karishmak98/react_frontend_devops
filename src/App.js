import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Suspense } from 'react';


const Child=React.lazy(() => import("./useContext/Child"))

export const GlobalInfo=createContext() 
function App() {
   const [colour,setColour]=useState('red')
   
   const getColour=(colour)=>{
        setColour(colour)
   }
  return (
    <GlobalInfo.Provider value={{color:colour,getColor:getColour}}>
    <div className="App">
       <h1 style={{color:colour}}>Parent</h1>
       <Suspense fallback={<div>...Loading</div>}>
         <Child/>
       </Suspense>
      
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
