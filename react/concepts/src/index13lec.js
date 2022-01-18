import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//working with style

function MyBorder(props){
  return(
    <div className={'MyBorder MyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}

function MyDialogBox(){
  return(
    <div>
      <MyBorder color="green">
        <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
        <p className='MyDialog-message'>This is content from First Dialog Box.</p>
      </MyBorder>
      <MyBorder color="red">
        <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
        <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
        <p className='MyDialog-message'>This is content from First Dialog Box.</p>
      </MyBorder>
      <MyBorder color="blue">
        <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
        <p className='MyDialog-message'>This is content from First Dialog Box.</p>
      </MyBorder>
    </div>
  );
}


ReactDOM.render(  
  <MyDialogBox /> ,
document.getElementById('root')
);

//css part after code
MyBorder{
  padding: 10px 10px;
  border: 10px solid;
  }
  
  .MyBorder-green{
  border-color: green;
  }
  .MyBorder-blue{
  border-color: blue;
  }
  .MyBorder-red{
  border-color: red;
  }
  