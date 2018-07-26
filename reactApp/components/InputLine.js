import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  render() {
    return(
      <div>
      <input className="input-task" type="text" placeholder="Write ToDo..." />
      <input className="btn btn-primary" type="submit" value="submit"/>
      </div>
    )
  }
}
export default InputLine;
