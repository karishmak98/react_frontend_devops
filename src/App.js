import logo from './logo.svg';
import './App.css';
import React, { useCallback } from 'react';
import { createContext, useState } from 'react';
import { Suspense } from 'react';
import Memo from './useMemo/Memo';
import CallBack from './callBack/CallBack';
import Ref from './useRef/Ref';


const Child=React.lazy(() => import("./useContext/Child"))

export const GlobalInfo=createContext() 
function App() {
   const [colour,setColour]=useState('red')
   const [count,setCount]=useState(0)
   const [todos,setTodos]=useState([])
   
   const getColour=(colour)=>{
        setColour(colour)
   }
   const increment = () => {
    setCount((c) => c + 1);
  };

  //  const addTodo=()=>{
  //   setTodos((t)=>[...t,"New Todo"])
  //  }

  //use useCallBack
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);


  return (
    <GlobalInfo.Provider value={{color:colour,getColor:getColour}}>
    <div className="App">
       {/* <h1 style={{color:colour}}>Parent</h1>
       <Suspense fallback={<div>...Loading</div>}>
         <Child/>
       </Suspense> */}
       {/* <Memo/> */}
       {/* <CallBack todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
      <Ref/>
      
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
