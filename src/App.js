
import React, { useLayoutEffect, useRef, useState } from 'react';

function App() {
  const [color,setColor]=useState("gray")
  const [inputValue,setInputValue]=useState("")
  const inputRef = useRef()
  const headerRef= useRef()

  const getInputValue=()=>{
    console.log(inputRef.current.value)
    inputRef.current.style.backgroundColor="yellow"
  }

  useLayoutEffect(()=>{
   console.log(headerRef.current.innerText) 
   headerRef.current.style.position="relative";
   headerRef.current.style.backgroundColor="blue"
   headerRef.current.style.top="250px"  
  },[])

  /* useEffect => after html painted doc */
 /*  useLayoutEffect => while html painting doc */

  return (
    <div className="App">
     {/*  <h1 style={{backgroundColor:color}}>useRef Hook</h1>

      <button onClick={()=>setColor("green")}>change backgroundColor</button> */}

{/* //controlled and uncontroller */}
      <input type="text" name="username" ref={inputRef} /* onChange={e=>setInputValue(e.target.value)} *//>
      <button onClick={getInputValue}>get input value</button>
      <div ><h2 ref={headerRef}>value coming from input field</h2></div>


    </div>
  );
}

export default App;