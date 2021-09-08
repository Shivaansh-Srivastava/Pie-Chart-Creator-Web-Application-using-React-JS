import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './db';
import Pie from './pie';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      display: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
  }

  handleAdd(event){
    const obj = new Object()
    obj.argument = this._arg.value
    obj.value = this._val.value

    data.push(obj)
    console.log(data)
  }

  handleClear(){
    this._arg.value = ""
    this._val.value = ""
  }

  handleDelete(){
    data.pop()
  }

  handleGenerate(){
    this.setState(prev => {
      return {
        display : !prev.display
      }
    })
  }

  render(){
    return(
      <div>
        <h1 className="main-title">Pie Chart Creator using React Js</h1>
        <hr/>
        <h2 className="heading">Enter the Argument:</h2>
        <input className="input" type="text" ref={value => this._arg=value} />
        <h2 className="heading">Enter the Value:</h2>
        <input className="input" type="text" ref={value => this._val=value} />
        <br/>
        <button className="btn" onClick={this.handleAdd} >Add</button>
        <button className="btn" onClick={this.handleClear}>Clear</button>
        <button className="btn" onClick={this.handleDelete}>Delete</button>
        <button className="btn" onClick={this.handleGenerate}>Generate</button>
        <hr/>
        {this.state.display ? <div><Pie /></div> : <h2>Click on Generate to create the Pie Chart.</h2>}
      </div>
    )
  }
}


export default App;
