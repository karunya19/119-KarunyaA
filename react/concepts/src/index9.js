import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




//working with style hover

function MyBorder(props){
  return(
    <div className={'MyBorder MyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}
class hover extends React.Component{

  MouseOver(event) {
    event.target.style.background = 'yellow';
  }
  MouseOut(event) {
    event.target.style.background = 'pink';
  }
}


function MyDialogBox(){
  return(
    <div MouseOver={hover.MouseOver} MouseOut={hover.MouseOut}>
      <MyBorder color="green" >
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