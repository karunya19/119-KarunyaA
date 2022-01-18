import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//4/2/22
//calculator with input
class Calculator extends React.Component
{
  constructor()
  {
    super();
    this.handlerCal = this.handlerCal.bind(this);
    
    this.state={
      a:"",
      b:"",
      calcu:"",
      ans:"",
    }
  }
  handlerCal(calcu)
  {
    var ans;
    var a= document.getElementById("a").value;
    var b=document.getElementById("b").value;
    a=parseInt(a);
    b=parseInt(b);
    switch(calcu)
    {
      case "+":ans=a+b;
              break;
      case "-":ans=a-b;
              break;
      case "*":ans=a*b;
                break;
      case "/":ans=a/b;
                break;
    }
   this.setState(({
      a:a,
      b:b,
      ans:ans,
      calcu:calcu
   }));
  }  

  render()
  {
    return(
    <>
   <table>
     <tr>
   <h2>{this.state.a} {this.state.calcu} {this.state.b} = {this.state.ans} </h2>
   </tr>
   <tr> <input  id="a" type="text" defaultValue={this.state.a}/></tr>
   <tr> <input  id="b" type="text" defaultValue={this.state.b}/></tr>
   </table>
   <button id="inr" onClick={()=>this.handlerCal("+")} >+</button>
   <button id="inr" onClick={()=>this.handlerCal("-")} >-</button>
   <button id="inr" onClick={()=>this.handlerCal("*")} >*</button>
   <button id="inr" onClick={()=>this.handlerCal("/")} >/</button>
</>
    )
  }
}

ReactDOM.render(  
 < Calculator/>,
  
document.getElementById('root')
);