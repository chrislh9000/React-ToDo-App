import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/ToDoApp'

const dummyData = [{taskText: 'Clean Dishes', completed: true},
                  {taskText: 'Wash Dishes', completed: false}, {taskText: 'Watch TV', completed: false},
                  {taskText: 'Code', completed: false}];

// //To do class
// class ToDo extends React.Component {
//   // maybe a constructor is needed but I don't foresee children here
//   render() {
//     return(
//       <div>
//       <li className="to-do"><button className="fin-input btn-sm btn btn-success">X</button>{this.props.task.completed? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText}</li>
//       </div>
//     )
//   }
// }
//
// //To do list components
//
// class TodoList extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     return(
//       <ul>
//        {this.props.todos.map((todo) => (
//         <ToDo task={todo} />
//       ))}
//       </ul>
//     )
//   }
// }
//
// //Input line components
//
// class InputLine extends React.Component {
//   render() {
//     return(
//       <div>
//       <input className="input-task" type="text" placeholder="Write ToDo..." />
//       <input className="btn btn-primary" type="submit" value="submit"/>
//       </div>
//     )
//   }
// }
//
// //ToDo App component
//
// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//     }
//   }
//   render() {
//     return(
//       <div>
//       <InputLine />
//       <TodoList todos={this.state.todos} />
//       </div>
//     )
//   }
//   //componentDidMount to handle ajax requests that take time to process
//   componentDidMount() {
//     this.setState({todos: dummyData});
//   }
// }



ReactDOM.render(<TodoApp />,
  document.getElementById('root'));
