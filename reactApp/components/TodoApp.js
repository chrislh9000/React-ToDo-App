import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'

const dummyData = [{taskText: 'Clean Dishes', completed: true},
{taskText: 'Wash Dishes', completed: false}, {taskText: 'Watch TV', completed: false},
{taskText: 'Code', completed: false}];


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }
  render() {
    return(
      <div>
      <InputLine />
      <TodoList todos={this.state.todos} />
      </div>
    )
  }
  //componentDidMount to handle ajax requests that take time to process
  componentDidMount() {
    this.setState({todos: dummyData});
  }
}

export default TodoApp;
