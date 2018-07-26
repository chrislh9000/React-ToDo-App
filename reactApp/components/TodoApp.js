import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'

let dummyData = [{taskText: 'Clean Dishes', completed: true},
{taskText: 'Wash Dishes', completed: false}, {taskText: 'Watch TV', completed: false},
{taskText: 'Code', completed: false}];


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }
  addTodo(toDo) {
    dummyData.push({taskText: toDo, completed: false});
    this.setState({
      todos: dummyData,
    })
  }

  render() {
    return(
      <div>
      <InputLine submit={(toDo) => this.addTodo(toDo)} />
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
