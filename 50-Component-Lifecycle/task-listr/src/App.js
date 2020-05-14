import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'
//When some events happens => fetch => update state => DOM

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      tasksData: []
    }
    console.warn("App constructor")
  }

  componentDidMount(){
    //after DOM loads => update taskData
    console.warn("App componentDidMount")
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
      this.setState({tasksData: data})
    })
  }

  //When form is submitted => POST fetch => update taskData => DOM
  onAddNewTask = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/tasks',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText
      })
    })
    .then(res => res.json())
    .then(newTask=> {
      // let newArray = this.state.tasksData.concat(newTask)
      let newArray = [ ...this.state.tasksData, newTask ]
      this.setState({tasksData: newArray })
    })
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
  }

  onTypingChange = (event) => {
    this.setState({formText : event.target.value})
  }

  //When the X button is clicked => DELETE fetch => update tasksData
  onDeleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`,{
      method:"DELETE"
    }).then(res =>res.json())
    .then(data => {
      console.log(id)
      //.slice
      //.filter
      let newArray = this.state.tasksData.filter(task => task.id !== id)
      this.setState({tasksData: newArray})
    })
  }

  render() {
    console.warn("App render")
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange}
          onSubmit={this.onAddNewTask}
        />
        <TaskList
          onDeleteTask={this.onDeleteTask}
          tasks={this.state.tasksData}
        />
      </div>
    );
  }
}

export default App;
