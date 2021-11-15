import React, { Component } from 'react'

const stylee = {
    textAlign : "center"
}

export class App extends Component {
  state = {
    todoList: [],
    inputValue : ""
  }
  changeHandler = (e) => {
    const {value} = e.target;
    this.setState({
      inputValue: value
    })
    
  }

  clickHandler = (e,data) => {
    e.preventDefault()
    this.setState({
      todoList : [...this.state.todoList , data],
      inputValue : ""
    })
  }
  render() {
    return (
      <div style={stylee}>
        <h1>Just </h1>
        <h1>TO DO LIST </h1>
        <hr />

        <input type="text" value={this.state.inputValue} name="todoList" 
          onChange={this.changeHandler}
        ></input>
        <br/>
        <button onClick={e => this.clickHandler(e , this.state.inputValue)}>Add todoList</button>
        
        <br/>  <br/> 
        <div>
          {
            this.state.todoList.map((list,index) => {
                return(
                  <div key={index + list }>
                    {list}
                  </div>
                )
            })
          }
        </div>
       

      </div>
    )
  }
}

export default App
