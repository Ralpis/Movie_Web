import React from 'react'
import PropTypes from "prop-types"

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Hello")
  }

  state = {
    count: 0
  };

  add = () =>{
    this.setState(current =>({
      count: current.count + 1
    }))
  };
  minus = () =>{
    this.setState(current =>({
      count: current.count - 1
    }))
  };
  componentDidMount(){
    console.log("j")
  }
  componentDidUpdate(){
    console.log("update")
  }

  render(){ 
    return <div>
      <h2>The number is: { this.state.count }</h2>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
  }
}


export default App;
