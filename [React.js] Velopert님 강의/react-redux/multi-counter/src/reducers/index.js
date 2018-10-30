import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

// 리듀서 함수를 정의
function counter(state = initialState, action) {
    // 레퍼런스 생성
    const {counters} = state;

    switch (action.type) {
        // 카운터를 새로 추가
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        // slice를 이용. 맨 마지막 카운터를 제외
        // push, pop을 이용하지 않고 slice로 새로 만드는 방식
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            return state;
    }
}

export default counter;