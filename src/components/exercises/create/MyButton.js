import React from 'react';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.step();
  }

  render() {  
    return (
      <button onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}

export default MyButton;