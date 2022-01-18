import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SignupForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {stname:'',lname:'',stemail:'', pwd:'', stcity:'', isPass:true, pnoOfAttempts:5};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
      //this.setState({value: event.target.value});
      const target = event.target;
      const value = target.name === "isPass" ? target.checked: target.value;
      const name = target.name;
  
      console.log(name +" "+ value);
      this.setState({[name]:value});
    }
  
    handleSubmit(event){
      alert('succeessfully registered '+this.state.stname);
      event.preventDefault();
    }
  
    render(){
      return(
        <div>
          <h1>Sign Up Form</h1> <br />
          <form class="row g-3" onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col">
              <label for="inputEmail4" class="form-label">First Name</label>
                <input name="stname" type="text" class="form-control" placeholder="First name" aria-label="First name"value={this.state.stname} onChange={this.handleChange} />
              </div>
              <div class="col">
              <label for="inputEmail4" class="form-label">Last Name</label>
                <input name="lname" type="text" class="form-control" placeholder="Last name" aria-label="Last name" value={this.state.lname} onChange={this.handleChange} />
              </div>
              </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input name="stemail" type="email" class="form-control" id="inputEmail4" value={this.state.stemail} onChange={this.handleChange}/>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Password</label>
              <input name="pwd" type="password" class="form-control" id="inputPassword4" value={this.state.pwd} onChange={this.handleChange} />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input name="stcity" type="text" class="form-control" id="inputCity" value={this.state.stcity} onChange={this.handleChange} />
            </div>
            
            <div class="col-md-2">
              <label for="inputNum" class="form-label">Phone No</label>
              <input name="noOfAttempts" type="number" class="form-control" id="inputZip" value={this.state.noOfAttempts} onChange={this.handleChange} />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input name="isPass" class="form-check-input" type="checkbox" id="gridCheck" checked={this.state.isPass} onChange={this.handleChange} />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(  
    <SignupForm /> ,
  document.getElementById('root')
  );
  