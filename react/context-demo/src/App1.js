import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return <Toolbar theme="black" />
  }
}

function Toolbar(props){
  return(
    <div>
      <ThemedButton theme={props.theme}/>
    </div>
  );
}

class ThemedButton extends React.Component{
  render(){
    return <Button theme={this.props.theme} />;
  }
}

function Button(props){
 // return <button style={{backgroundColor:"black", color:"white",padding:"15px 30px"}}>ClickMe</button>
 return <button style={{backgroundColor:props.theme, color:"white",padding:"15px 30px"}}>ClickMe</button>

}

export default App;