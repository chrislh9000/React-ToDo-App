import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'

let dummyData = [{taskText: 'Clean Dishes', completed: true},
{taskText: 'Wash Dishes', completed: false}, {taskText: 'Watch TV', completed: false},
{taskText: 'Code', completed: false}];

let dataText = dummyData.map((todo) => {
  return todo.taskText
})



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

  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({
      todos: dummyData,
    })
  }

  toggleToDo(index) {
    let task = dataText.indexOf(index)
    dummyData.splice(task, 1, {taskText: task.taskText, completed: !task.completed})
  }

  render() {

    return(
      <div>
      <InputLine submit={(toDo) => this.addTodo(toDo)} />
      <TodoList taskText={dataText} todoClickText={(index) => this.toggleToDo(index)} todoClickX={(index)=> this.removeTodo(index)} todos={this.state.todos} />
      </div>
    )
  }
  //componentDidMount to handle ajax requests that take time to process
  componentDidMount() {
    this.setState({todos: dummyData});
  }
}

export default TodoApp;
