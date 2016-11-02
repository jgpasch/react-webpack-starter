import React, { Component,PropTypes } from 'react';
import Header from './common/Header';
import AddContentBtn from './common/AddContentBtn';  

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <AddContentBtn />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;