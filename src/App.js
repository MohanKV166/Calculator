import './App.css'
import { useState } from 'react';
export default function App(){
  return(
    <div>
      <h1>Calculator</h1>
      <Calculator/>
    </div>
  );
}
function Calculator(){
  const[values,setValue]=useState('0');
  if(values===""){
    setValue("0");
  }
  function handleClick(e){
  if(e.target.innerText==="AC"){
      setValue("0");
    }
    else if(e.target.innerText==='←'){
      let val=values;
      val=String(val);
      let newVal=val.slice(0,-1);
      setValue(newVal);
     }
  else if(e.target.innerText==="="){
      let val=values;
      let newVal=eval(val);
      setValue(newVal);
    }
  else if(values!=='0'){
    setValue(prevVal=>prevVal+e.target.innerText);
   }
  else if(e.target.innerText!=='AC'){
     setValue("");
     setValue(prevVal=>prevVal+e.target.innerText);
   }
  }
  return(
    <div className='calculator'>
      <button id="screen">{values}</button>
      <button onClick={(e)=>handleClick(e)}>AC</button>
      <button onClick={(e)=>handleClick(e)}>%</button>
      <button className="clr" onClick={(e)=>handleClick(e)}>←</button>
      <button onClick={(e)=>handleClick(e)}>1</button>
      <button onClick={(e)=>handleClick(e)}>2</button>
      <button onClick={(e)=>handleClick(e)}>3</button>
      <button onClick={(e)=>handleClick(e)}>*</button>
      <button onClick={(e)=>handleClick(e)}>4</button>
      <button onClick={(e)=>handleClick(e)}>5</button>
      <button onClick={(e)=>handleClick(e)}>6</button>
      <button onClick={(e)=>handleClick(e)}>+</button>
      <button onClick={(e)=>handleClick(e)}>7</button>
      <button onClick={(e)=>handleClick(e)}>8</button>
      <button onClick={(e)=>handleClick(e)}>9</button>
      <button onClick={(e)=>handleClick(e)}>-</button>
      <button onClick={(e)=>handleClick(e)}>0</button>
      <button onClick={(e)=>handleClick(e)}>.</button>
      <button onClick={(e)=>handleClick(e)}>=</button>
      <button onClick={(e)=>handleClick(e)}>/</button>
    </div>
  );
}