import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




//5)image toggle
class MySwitch extends React.Component{

  constructor(props){
    super(props);  
    this.state = {isOn : true};    
    this.myHandler = this.myHandler.bind(this);
  }

  myHandler(){
    this.setState( i => (
      {isOn: !i.isOn}
    ));
  }

  render(){
    const output = this.state.isOn;
    console.log(output);
    return (
      <div>
      {/* <h1>This is result {output}</h1> */}
    
      <button onClick={this.myHandler}>{this.state.isOn ? <img src="flower.png" width="300px" height="300px"/>:
      <img src="flower1.png" width="300px" height="300px"/>}</button>
      </div>
    );
  }
}

ReactDOM.render(  
  <MySwitch /> ,
document.getElementById('root')
);
