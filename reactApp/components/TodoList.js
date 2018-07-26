import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Todo.js'

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <ul>
       {this.props.todos.map((todo) => (
        <ToDo task={todo} />
      ))}
      </ul>
    )
  }
}

export default TodoList