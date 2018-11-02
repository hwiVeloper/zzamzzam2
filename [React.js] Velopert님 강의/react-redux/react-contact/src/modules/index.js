import {combineReducers} from 'redux';

import base from './base';
import contacts from './contacts';
import modal from './modal';

// 다른 모듈을 combine하여 하나의 리듀서로 만든다.
export default combineReducers({
    base,
    contacts,
    modal
});