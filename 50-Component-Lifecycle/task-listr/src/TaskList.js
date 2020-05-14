import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks.map(task => <Task
      onDeleteTask={props.onDeleteTask}
      key={task.id}
      task={task}
    />)
  )
}

export default TaskList
