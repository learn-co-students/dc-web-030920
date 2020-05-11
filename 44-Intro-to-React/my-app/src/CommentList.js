import React from 'react'
import Comment from './Comment'
//where I'm going to create my CommentList component

//class component: write a class, that class must extend React.Component
//needs an instance methods called render that returns some JSX

let comments = [
  {author: "Ann", content: "This is a fun lecture"},
  {author: "Paul", content: "Friday..."},
  {author:"Chine", content: "FLANNEL!!!"}
]

//comments = [{},{},{}]   =>   [<Comment />, <Comment />, <Comment />]

class CommentList extends React.Component{
  render(){
    console.log("what is props in CommentList?", this.props)
    return <div className="comment-list">
    {
      comments.map( (commentObject) => {return <Comment obj={commentObject}/>} )
    }
    </div>
  }
}

export default CommentList

/*
let variable
variable = "Ann"

let variable = "Ann"

*/
