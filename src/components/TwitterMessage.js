import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }



  render() {
    let charsLeft = (this.props.maxChars - this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        onChange={event => this.handleMessage(event)}
        value={this.state.message}
        name="message" id="message" />
        {charsLeft}
      </div>
    );
  }
  
}
export default TwitterMessage;
//