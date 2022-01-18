import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//4/1/22
//currency converter with text field nad submit button
//working with lists in react

// const posts = [
//   {id:101,title:"First Post",content:"This is content from first post."},
//   {id:102,title:"Second Post",content:"This is content from second post."}
// ]

// //you should always have key while working with list items otherwise error in production strict mode
// function Blog(props){
//   const sideBar = (
//     <ul>
//       {props.posts.map(
//         (post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );

//   const content = props.posts.map(
//     (post) =>
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//         </div>      
//   );

//   return(
//     <div>
//       {sideBar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// ReactDOM.render(  
//   <Blog posts={posts}/> ,
// document.getElementById('root')
// );

//1)currency converter with text field and submit button
// class Calculator extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//      value:"",
//       c : "",
//       result:""
//     };
//     this.rupeeHandler = this.rupeeHandler.bind(this);
//     this.yenHandler = this. yenHandler.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
   
//   }
//   handleChange(event){
//     this.setState({value: event.target.value})
   
//   }
//   rupeeHandler(event)
//   {
//     this.setState(
//       {c: " Indian Rupees"}
//     );
//     this.setState(
//       {result: this.state.value*74.52}
//      );
    

//   }
//   yenHandler(event)
//   {
//     this.setState(
//       {c: " Japanese Yen"}
//     );
//     this.setState(
//       {result: this.state.value*115.81}
//      );
    
    
//   }
//   handleSubmit(event){
//     alert(this.state.value+ this.state.result+ this.state.c);
//     event.preventDefault();
   
//   }

//   render()
//   {const val=this.state.value;
//     return(    <fieldset> <legend>Enter:</legend>
//       <form onSubmit={this.handleSubmit}>
//         <lable>
          
//           <input type="text" value={val} onChange={this.handleChange} /> <br></br> <br></br>
//         </lable><button onClick={this.rupeeHandler}>Rupees</button>
//     <button onClick={this.yenHandler}>Yen</button>
//      </form></fieldset> 
//     );
//   }
// }


// ReactDOM.render(
//   <Calculator />,
//   document.getElementById("root")
// );

//currency conversion using context api
const ThemeContext = React.createContext('white');
class Calculator extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
     value:"",
      c : "",
      result:""
    };
    this.rupeeHandler = this.rupeeHandler.bind(this);
    this.yenHandler = this. yenHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  handleChange(event){
    this.setState({value: event.target.value})
   
  }
  rupeeHandler(event)
  {
    this.setState(
      {c: " Indian Rupees"}
    );
    this.setState(
      {result: this.state.value*74.52}
     );
    

  }
  yenHandler(event)
  {
    this.setState(
      {c: " Japanese Yen"}
    );
    this.setState(
      {result: this.state.value*115.81}
     );
    
    
  }
  handleSubmit(event){
    alert(this.state.value+ this.state.result+ this.state.c);
    event.preventDefault();
   
  }

  render()
  {const val=this.state.value;
    return(    <fieldset> <legend>Enter:</legend>
      <form onSubmit={this.handleSubmit}>
        <lable>
          
          <input type="text" value={val} onChange={this.handleChange} /> <br></br> <br></br>
        </lable><button onClick={this.rupeeHandler}>Rupees</button>
    <button onClick={this.yenHandler}>Yen</button>
     </form></fieldset> 
    );
  }
}

class ThemedButton extends React.Component{
  static contextType = ThemeContext;
  render(){
    return <button style={{backgroundColor:this.context, color:"white",padding:"15px 30px"}}>ClickMe</button>
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById("root")
);