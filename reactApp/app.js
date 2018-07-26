import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Clean Dishes', 'Watch TV', 'Sleep', 'Code'];
dummyData.map((task) => {
  console.log(task);
})
//To do class
class ToDo extends React.Component {
  // maybe a constructor is needed but I don't foresee children here
  render() {
    return(
      <div>
      <li><button>X</button>{this.props.task}</li>
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



ReactDOM.render(<TodoList dummyData={dummyData} />,
  document.getElementById('root'));
