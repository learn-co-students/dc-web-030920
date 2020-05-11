import React from 'react'

//functional component: write a function and have it return some JSX
//props is an OBJECT with key value pairs

const Comment = (props) => {
  // debugger
  console.log(props)
  return <p>{props.obj.content} - {props.obj.author}</p>
  // return <p>This is a comment</p>
}

export default Comment












//where I'm going to create my Comment component
