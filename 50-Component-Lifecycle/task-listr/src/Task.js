import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)//how to initialize state based on initial props
    this.state = {
      color: "black"
    }
    console.warn(`Task ${this.props.task.id} constructor`)
  }

  changeColor = () => {
    this.setState({color: "red"})
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount`)
    window.addEventListener("resize", this.print)
  }

  print(){
    console.log("helo world")
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate`)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount`)
    window.removeEventListener("resize", this.print)
  }

  render(){
    console.warn(`Task ${this.props.task.id} render`)
    let id = this.props.task.id
    return(
      <div>
        <b
          onClick={this.changeColor}
          style={{color: this.state.color}}
        >
          {this.props.task.text}
        </b>
        <button data-id={id} onClick={()=>this.props.onDeleteTask(id)}>x</button>
      </div>
    )
  }
}

export default Task
