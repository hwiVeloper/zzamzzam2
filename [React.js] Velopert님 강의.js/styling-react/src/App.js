import React, { Component } from 'react';
import classNames from 'classnames/bind';
//import styles from './App.css';
import styles from './App.scss';

console.log(styles); // 확인용

const cn = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = false;
    return (
      // <div className={classNames(styles.box, styles.blue)}>
      <div className={cn('box', {blue: isBlue})}>
        <div className={cn('box-inside')}/>
      </div>
    );
  }
}

export default App;
