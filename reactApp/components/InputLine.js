import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typedText: '',
    }
  }
  handleTyping(event) {
    this.setState({
      typedText: event.target.value,
    })
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: '',
    })
  }


  render() {
    return(
      <div>
      <form method="POST" action="/db/add">
      <div className="form-group">
      <input className="input-task form-control" name="taskText" onChange={(event)=> this.handleTyping(event)} value={this.state.typedText} type="text" placeholder="Write ToDo..." /><br/><br/>
      <button method="POST" action="/db/add" onClick={() => this.handleSubmit()} className="btn btn-primary">Submit</button>
      </div>
      </form>
      </div>
    )
  }
}
export default InputLine;
