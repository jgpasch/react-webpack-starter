import React, { Component,PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <span>Children will be here</span>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;