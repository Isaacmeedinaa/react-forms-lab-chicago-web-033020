import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();


    this.state = {
      message: ''
    };
  }

  handleTweetMsg = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleTweetMsg} type="text" name="message" id="message" />
        <p>{charsLeft} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
