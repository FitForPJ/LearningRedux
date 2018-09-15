import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state ={ 
    number: 0
  }
  handleAdd = () => {
    const { number} = this.state
    this.setState({ number : number+1 })
  }
  handleSub = () => {
    const { number} = this.state
    this.setState({ number : number-1 })
  }

  render() {
    //const {number} = this.state;
    const { add ,sub ,number,status,data} = this.props
    //const { handleAdd, handleSub} = this;
    return (
      <div className="App">
        <button
        onClick = {add}
        >Add</button>
         
        <p>{data[0]}</p>
        <button
        onClick = {sub}>Sub</button>
        <p>{data[1]}</p>
      </div>
    );
  }
}

export default App;
