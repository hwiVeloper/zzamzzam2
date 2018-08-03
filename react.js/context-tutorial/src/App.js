import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';

const App = () => {
    return (
        <div className="panes">
            <LeftPane />
            <RightPane />
        </div>
    );
}

export default App;
