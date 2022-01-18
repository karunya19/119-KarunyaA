// import React from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//5/1/22 signup for
// class SignupForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {stname:'',lname:'',stemail:'', pwd:'', stcity:'', isPass:true, pnoOfAttempts:5};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event){
//     //this.setState({value: event.target.value});
//     const target = event.target;
//     const value = target.name === "isPass" ? target.checked: target.value;
//     const name = target.name;

//     console.log(name +" "+ value);
//     this.setState({[name]:value});
//   }

//   handleSubmit(event){
//     alert('succeessfully registered '+this.state.stname);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <div>
//         <h1>Sign Up Form</h1> <br />
//         <form class="row g-3" onSubmit={this.handleSubmit}>
//           <div class="row">
//             <div class="col">
//             <label for="inputEmail4" class="form-label">First Name</label>
//               <input name="stname" type="text" class="form-control" placeholder="First name" aria-label="First name"value={this.state.stname} onChange={this.handleChange} />
//             </div>
//             <div class="col">
//             <label for="inputEmail4" class="form-label">Last Name</label>
//               <input name="lname" type="text" class="form-control" placeholder="Last name" aria-label="Last name" value={this.state.lname} onChange={this.handleChange} />
//             </div>
//             </div>
//           <div class="col-md-6">
//             <label for="inputEmail4" class="form-label">Email</label>
//             <input name="stemail" type="email" class="form-control" id="inputEmail4" value={this.state.stemail} onChange={this.handleChange}/>
//           </div>
//           <div class="col-md-6">
//             <label for="inputPassword4" class="form-label">Password</label>
//             <input name="pwd" type="password" class="form-control" id="inputPassword4" value={this.state.pwd} onChange={this.handleChange} />
//           </div>
//           <div class="col-md-6">
//             <label for="inputCity" class="form-label">City</label>
//             <input name="stcity" type="text" class="form-control" id="inputCity" value={this.state.stcity} onChange={this.handleChange} />
//           </div>
          
//           <div class="col-md-2">
//             <label for="inputNum" class="form-label">Phone No</label>
//             <input name="noOfAttempts" type="number" class="form-control" id="inputZip" value={this.state.noOfAttempts} onChange={this.handleChange} />
//           </div>
//           <div class="col-12">
//             <div class="form-check">
//               <input name="isPass" class="form-check-input" type="checkbox" id="gridCheck" checked={this.state.isPass} onChange={this.handleChange} />
//               <label class="form-check-label" for="gridCheck">
//                 Check me out
//               </label>
//             </div>
//           </div>
//           <div class="col-12">
//             <button type="submit" class="btn btn-primary">Sign in</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(  
//   <SignupForm /> ,
// document.getElementById('root')
// );


//calculator with hooks
// function MyCalculatorWithHook(props){

//   const[first,setFirst] = useState(props.a);
//   const[second,setSecond] = useState(props.b);
//   const[Add,setAdd] = useState(0);
//   const[Sub,setSub] = useState(0);
//   const[Mul,setMul] = useState(0);
//   const[Div,setDiv] = useState(0);

//   const handleAdd = () =>{
//     setAdd(parseInt(first)+parseInt(second));
    
//   }
//   const handleSub = () =>{
//     setSub(parseInt(first)-parseInt(second));
    
//   }
//   const handleMul = () =>{
//     setMul(parseInt(first)*parseInt(second));
    
//   }
//   const handleDiv = () =>{
//     setDiv(parseInt(first)/parseInt(second));
    
//   }

//   return(
//     <div>
//       <h2>Enter 2 values: </h2>
//       <input type="text" value={first} onChange={e => setFirst(+e.target.value)} placeholder="Enter First number" /> <br/> <br/>
//       <input type="text"  value={second}  onChange={e => setSecond(+e.target.value)}  placeholder="Enter second number" />
//       <p>Addition of {first} and {second} is {Add}</p>
//       <button onClick={handleAdd}>Add</button>
//       <p>Subtraction of {first} and {second} is {Sub}</p>
//       <button onClick={handleSub}>sub</button>
//       <p>Multiplication of {first} and {second} is {Mul}</p>
//       <button onClick={handleMul}>Mul</button>
//       <p>Division of {first} and {second} is {Div}</p>
//       <button onClick={handleDiv}>Div</button>
//     </div>
//   );

// }

// ReactDOM.render(  
//   <MyCalculatorWithHook  /> ,
// document.getElementById('root')
// );


//login page

// function SingUpWithHook(props) {

//   const [inputField, setInputField] = useState({
//     email: '',
//     pass: ''
//   })

//   const inputsHandler = (e) => {
//     setInputField({ [e.target.name]: e.target.value })
//   }

//   const submitButton = () => {
//     // alert(inputField.email)
//     alert("Login successful")
//   }

//   return (
//     <div>
//       <div class="col-md-6">
//         <label for="inputEmail4" class="form-label">Email</label>
//         <input name="email" type="email" class="form-control" id="inputEmail4" onChange={inputsHandler} value={inputField.first_name} placeholder='Enter your Email Id' />
//       </div>
//       <div class="col-md-6">
//         <label for="inputPassword4" class="form-label">Password</label>
//         <input name="pass" type="password" class="form-control" id="inputPassword4" onChange={inputsHandler} value={inputField.last_name} placeholder='Enter your Password'/>
//       </div>
//       <br/>
//       <button onClick={submitButton}>Submit</button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <SingUpWithHook />,
//   document.getElementById('root')
// );



//currency conversion using context api
//creating context using contextAPI

const ThemeContext = React.createContext('white');


class App extends React.Component{
  render(){
    //return <Toolbar theme="black" />
    return (<ThemeContext.Provider value='black'>
      <Toolbar />
    </ThemeContext.Provider>
    );
  }
}



function Toolbar(props){
  return(
    <div>
      <ThemedButton />
    </div>
  );
}


class ThemedButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        c: "",
        result: ""
      };
      this.rupeeHandler = this.rupeeHandler.bind(this);
      this.yenHandler = this.yenHandler.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
    handleChange(event) {
      this.setState({ value: event.target.value })
  
    }
    rupeeHandler(event) {
      this.setState(
        { c: " Indian Rupees" }
      );
      this.setState(
        { result: this.state.value * 74.52 }
      );
  
  
    }
    yenHandler(event) {
      this.setState(
        { c: " Japanese Yen" }
      );
      this.setState(
        { result: this.state.value * 115.81 }
      );
  
  
    }
    handleSubmit(event) {
      event.preventDefault();
  
    }
    static contextType = ThemeContext;
    render() {
      const val = this.state.value;
      return (<fieldset>
        <legend>Enter the amount :</legend>
        <form onSubmit={this.handleSubmit}>
          <lable>
            <input type="text" value={val} onChange={this.handleChange} /> <br></br> <br></br>
          </lable>
          <button style={{backgroundColor:this.context, color:"white",padding:"15px 30px"}} onClick={this.rupeeHandler}>Rupees</button>
          <button style={{backgroundColor:this.context, color:"white",padding:"15px 30px"}} onClick={this.yenHandler}>Yen</button>
          <h1>{this.state.value + " Dollar is " + this.state.result + this.state.c}</h1>
        </form>
      </fieldset>
      );
    }
  }
  
  

export default App;