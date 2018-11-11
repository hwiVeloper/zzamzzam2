const {combineReducers} = require('redux')
const {
    reducer: movies
} = require('./movies')

module.exports = combineReducers({
    movies
    // 추가적인 리듀서를 정의할 수 있다.
})