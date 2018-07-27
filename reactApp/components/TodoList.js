import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Todo.js'

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  getIndex(item) {
    var listArr = []
    var listText = this.props.todos.forEach((todo)=> {
      listArr.push(todo.taskText);
    })
    return listArr.indexOf(item);
  }

  render() {
    return(
      <ul>
       {this.props.todos.map((todo) => (
        <ToDo textClick={()=>this.props.todoClickText(this.props.taskText.indexOf(todo.taskText))}
        xClick={()=>this.props.todoClickX(this.props.taskText.indexOf(todo.taskText))} task={todo} />
      ))}
      </ul>
    )
  }
}

export default TodoList
