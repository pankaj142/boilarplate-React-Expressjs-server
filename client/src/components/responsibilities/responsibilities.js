import React, { Component } from 'react';
import './responsibilities.css';

class Responsibilities extends Component {
  constructor(){
    super();
    this.state={
      ourResponsibilities:[]
    }
  }
  componentDidMount(){
    fetch('/api/ourResponsibilities')
    .then(res=>res.json())
      .then(ourResponsibilities =>
       {
        this.setState({ourResponsibilities}, ()=> console.log("data from server api",ourResponsibilities))
     });
  }
  render() {
    return (
      <div >
      <h1>As programmer, we don't have life than coding...</h1>
          <ul >
          {this.state.ourResponsibilities.map(i =>
              <li key={i.id}>  {i.item}    </li>
            )}
            
          </ul>
      </div>
    );
  }
}

export default Responsibilities;
