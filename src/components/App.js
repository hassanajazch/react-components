import React, {PropTypes} from 'react';
import Header from './common/Header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};


export default App;
