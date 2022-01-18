import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//calculator with hooks
function MyCalculatorWithHook(props){

  const[first,setFirst] = useState(props.a);
  const[second,setSecond] = useState(props.b);
  const[Add,setAdd] = useState(0);
  const[Sub,setSub] = useState(0);
  const[Mul,setMul] = useState(0);
  const[Div,setDiv] = useState(0);

  const handleAdd = () =>{
    setAdd(parseInt(first)+parseInt(second));
    
  }
  const handleSub = () =>{
    setSub(parseInt(first)-parseInt(second));
    
  }
  const handleMul = () =>{
    setMul(parseInt(first)*parseInt(second));
    
  }
  const handleDiv = () =>{
    setDiv(parseInt(first)/parseInt(second));
    
  }

  return(
    <div>
      <h2>Enter 2 values: </h2>
      <input type="text" value={first} onChange={e => setFirst(+e.target.value)} placeholder="Enter First number" /> <br/> <br/>
      <input type="text"  value={second}  onChange={e => setSecond(+e.target.value)}  placeholder="Enter second number" />
      <p>Addition of {first} and {second} is {Add}</p>
      <button onClick={handleAdd}>Add</button>
      <p>Subtraction of {first} and {second} is {Sub}</p>
      <button onClick={handleSub}>sub</button>
      <p>Multiplication of {first} and {second} is {Mul}</p>
      <button onClick={handleMul}>Mul</button>
      <p>Division of {first} and {second} is {Div}</p>
      <button onClick={handleDiv}>Div</button>
    </div>
  );

}

ReactDOM.render(  
  <MyCalculatorWithHook  /> ,
document.getElementById('root')
);