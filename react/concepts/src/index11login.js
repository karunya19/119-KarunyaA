// import React from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//login page

function SingUpWithHook(props) {

  const [inputField, setInputField] = useState({
    email: '',
    pass: ''
  })

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value })
  }

  const submitButton = () => {
    // alert(inputField.email)
    alert("Login successful")
  }

  return (
    <div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input name="email" type="email" class="form-control" id="inputEmail4" onChange={inputsHandler} value={inputField.first_name} placeholder='Enter your Email Id' />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input name="pass" type="password" class="form-control" id="inputPassword4" onChange={inputsHandler} value={inputField.last_name} placeholder='Enter your Password'/>
      </div>
      <br/>
      <button onClick={submitButton}>Submit</button>
    </div>
  )
}

ReactDOM.render(
  <SingUpWithHook />,
  document.getElementById('root')
);