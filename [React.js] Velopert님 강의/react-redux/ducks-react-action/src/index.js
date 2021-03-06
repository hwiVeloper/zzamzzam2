import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Redux 관련 로드
import {createStore} from 'redux';
// import reducers from './reducers';
import reducers from './modules';
import {Provider} from 'react-redux';

// 스토어 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
