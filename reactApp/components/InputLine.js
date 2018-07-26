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
      <input onChange={(event)=> this.handleTyping(event)} value={this.state.typedText} className="input-task" type="text" placeholder="Write ToDo..." />
      <input onClick={() => this.handleSubmit()} className="btn btn-primary" type="submit" value="submit"/>
      </div>
    )
  }
}
export default InputLine;
