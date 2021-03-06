import {Map, List} from 'immutable';
import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
});

// 리듀서 함수를 정의
function counter(state = initialState, action) {
    // 레퍼런스 생성
    const {counters} = state.get('counters');
    console.log(counters);

    switch (action.type) {
        // 카운터를 새로 추가
        case types.CREATE:
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })));
        case types.REMOVE:
            return state.set('counters', counters.pop());
        case types.INCREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));
        case types.DECREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));
        case types.SET_COLOR:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('color', action.color)
            ));
        default:
            return state;
    }
}

export default counter;