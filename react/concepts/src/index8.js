import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//4/1/22
//grade calculator
class Grade extends React.Component
{
  constructor()
  {
    super();
    this.handler = this.handler.bind(this);
    this.state={
      a:"",
      b:"",
      c:"",
      grade:"",
    }
  }
  handler()
  {
    var grade;
    var a= document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    var result=((a+b+c)/3);
   if(result>=90 && result<=100)
   {
     grade="A";
   }else if(result>=80 && result<90)
   {
     grade = "B";
   }else if(result>=70 && result<80)
   {
     grade="c"
   }else{
     grade="Fail"
   }
   this.setState(({
      a:a,
      b:b,
      grade:grade,
   }));
   console.log(grade);
   console.log(result);
  }  

  render()
  {
    return(
    <>
   <table>
     <tr>
   <h1>Grade= {this.state.grade} </h1>
   </tr>
   <tr> <input  id="a" type="text" defaultValue={this.state.a}/></tr>
   <tr> <input  id="b" type="text" defaultValue={this.state.b}/></tr>
   <tr> <input  id="c" type="text" defaultValue={this.state.c}/></tr>
   </table>
   <button id="calculate" onClick={this.handler}>Grade</button>
    </>
    );
  }
}

ReactDOM.render(
  <Grade />,
  document.getElementById("root")
);
