import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';

import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/*
    로그 미들웨어를 생성할 때 설정을 커스터마이징 할 수 있다.
    https://github.com/evgenyrodionov/redux-logger#options 참조
*/
const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, ReduxThunk));

export default store;