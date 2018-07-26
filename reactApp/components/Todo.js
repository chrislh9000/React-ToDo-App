import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
  // maybe a constructor is needed but I don't foresee children here
  render() {
    return(
      <div>
      <li className="to-do"><button onClick={()=>this.props.xClick(0)} className="fin-input btn-sm btn btn-success">X</button>{this.props.task.completed? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText}</li>
      </div>
    )
  }
}

export default ToDo
