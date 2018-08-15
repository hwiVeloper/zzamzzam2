import React, { Component } from 'react';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

class App extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
        <StyledButton big>StyledButton</StyledButton>
      </div>
    );
  }
}

export default App;
