import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//3)same program using class based components and state
//props to state
class Calculator extends React.Component{
  constructor(props)
  {
    super(props);
    this.a=parseInt(this.props.a);
    this.b=parseInt(this.props.b)
  }
  render(){
    return <><h1>Add={this.a+this.b}</h1>
    <h1>Sub={this.a-this.b}</h1>
    <h1>Multi={this.a*this.b}</h1>
    <h1>Div={this.a/this.b}</h1>
    </>
  }
}
  ReactDOM.render(
    <Calculator a="12" b="20"/>,document.getElementById("root"));

    //only state
    class Calculator extends React.Component
{
  constructor()
  {
    super();
    this.a=parseInt("20");
    this.b=parseInt("10");
  }

  render()
  {
    return <>
    <h1>Addition = {this.a+this.b}</h1>
    <h1>Subtraction = {this.a-this.b}</h1>
    <h1>Multiplication = {this.a*this.b}</h1>
    <h1>Division = {this.a/this.b}</h1>
    
    </>
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById("root")
);

  
