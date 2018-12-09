import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import {About, Home} from './pages';
// import notify from './notify';
import withSplitting from './withSplitting';

// const SplitMe = withSplitting(() => import('./SplitMe'));

class App extends Component {
  state = {
    // SplitMe: null,
    visible: false
  };

  handleMouseOver = () => {
    console.log('About 로드 시작');
    About.preload();
  }

  handleClick = () => {
    this.setState({
      visible: true
    });
    // import('./notify').then(({default: notify}) => {
    //   notify();
    // });
    // import('./SplitMe').then(({default: SplitMe}) => {
    //   this.setState({
    //     SplitMe
    //   });
    // });
  };

  render () {
    // const {SplitMe} = this.state;
    const {visible} = this.state;
    // return (
    //   <div>
    //     <button onClick={this.handleClick}>Click Me!</button>
    //     {visible && <SplitMe/>}
    //   </div>
    // )
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" onMouseOver={this.handleMouseOver}>About</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
