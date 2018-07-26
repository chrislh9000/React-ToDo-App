import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: 'Clean Dishes', completed: true},
                  {taskText: 'Wash Dishes', completed: false}, {taskText: 'Watch TV', completed: false},
                  {taskText: 'Code', completed: false}];
dummyData.map((task) => {
  console.log(task);
})
//To do class
class ToDo extends React.Component {
  // maybe a constructor is needed but I don't foresee children here
  render() {
    return(
      <div>
      <li><button>X</button>{this.props.task.completed? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText}</li>
      </div>
    )
  }
}

//To do list components

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <ul>
       {dummyData.map((todo) => (
        <ToDo task={todo} />
      ))}
      </ul>
    )
  }
}

//Input line components

class InputLine extends React.Component {
  render() {
    return(
      <div>
      <input type="text" placeholder="Write ToDo..." />
      <input type="submit" value="submit"/>
      </div>
    )
  }
}

//ToDo App component

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
      <InputLine />
      <TodoList />
      </div>
    )
  }

}



ReactDOM.render(<TodoApp />,
  document.getElementById('root'));
