// 카운터 관련 상태 로직
import {createAction, handleActions} from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
// export const increment = ({type: INCREMENT});
// export const decrement = ({type: DECREMENT});
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈 초기 상태 정의
const initialState = {
    number: 0
};

// 리듀서 생성
// export default function reducer(state = initialState, action) {
//     // 이곳에서는 액션 타입에 따라 변화된 상태를 정의하여 return
//     switch (action.type) {
//         case INCREMENT:
//             return {number: state.number + 1}
//         case DECREMENT:
//             return {number: state.number - 1}
//         default:
//             return state; // 현재 상태 그대로 반환
//     }
// }
// handleActions의 첫번째 파라미터는 액션을 처리하는 함수, 두번째는 파라미터 초기 상태
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    [DECREMENT]: ({number}) => ({number: number - 1})
}, initialState);