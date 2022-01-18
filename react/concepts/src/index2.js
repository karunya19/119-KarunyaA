import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 2)grading component which is accepting 3 subjects marks
function Grade(props){
  let maths = parseInt(props.a);
  let geo = parseInt(props.b);
  let eng = parseInt(props.c);
  let result = (maths + geo + eng)/3;
  if (result>90){
      return <h1> marks scored {props.a}, {props.b} and  {props.c} - A grade </h1>
    } else if (result>80){
      return <h1> marks scored {props.a}, {props.b} and  {props.c} - B grade </h1>
    } else if (result>70){
      return <h1> marks scored {props.a}, {props.b} and  {props.c} - c grade </h1>
    } else{ 
      return <h1> marks scored {props.a}, {props.b} and  {props.c} - Fail </h1> }
    }
    ReactDOM.render(<Grade a="85" b="85" c="85"/>  , document.getElementById('root'));
  





