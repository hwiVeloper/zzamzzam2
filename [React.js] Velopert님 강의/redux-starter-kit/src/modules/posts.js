import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';

import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';
// const GET_POST_PENDING = 'GET_POST_PENDING';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'GET_POST_FAILURE';

/*
    redux-pender 의 액션 구조는 Flux standard action(https://github.com/acdlite/flux-standard-action) 
    을 따르기 때문에, createAction 으로 액션을 생성 할 수 있습니다. 두번째로 들어가는 파라미터는 프로미스를 반환하는
    함수여야 합니다.
*/
export const getPost = createAction(GET_POST, getPostAPI);

// export const getPost = (postId) => ({
//     type: GET_POST,
//     payload: getPostAPI(postId)
// })

// export const getPost = (postId) => dispatch => {
//     // 요청이 시작함을 알림
//     dispatch({type: GET_POST_PENDING});

//     // 요청 시작
//     return getPostAPI(postId).then(
//         (response) => {
//             dispatch({
//                 type: GET_POST_SUCCESS,
//                 payload: response
//             })
//         }
//     ).catch(error => {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: error
//         });
//     });
// }

const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    ...pender({
        type: GET_POST,
        /*
            요청중 / 실패 했을 때 추가적으로 해야 할 작업이 있다면 이렇게 onPending 과 onFailure 를 추가해주면됩니다.
            onPending: (state, action) => state,
            onFailure: (state, action) => state
        */
        onSuccess: (state, action) => {
            const {title, body} = action.payload.data;
            return {
                data: {
                    title, body
                }
            }
        }
    })
}, initialState);


// export default handleActions({
//     [GET_POST_PENDING]: (state, action) => {
//         return {
//             ...state,
//             pending: true,
//             error: false
//         };
//     },
//     [GET_POST_SUCCESS]: (state, action) => {
//         const {title, body} = action.payload.data;

//         return {
//             ...state,
//             pending: false,
//             data: {
//                 title, body
//             }
//         };
//     },
//     [GET_POST_FAILURE]: (state, action) => {
//         return {
//             ...state,
//             pending: false,
//             error: true
//         }
//     }
// }, initialState);