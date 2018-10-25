const elNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({type: INCREMENT, diff: diff});
const decrement = () => ({type: DECREMENT});

const initialState = {
    number: 0
};

const counter = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case INCREMENT:
            return {
                number: state.number + action.diff
            };
        case DECREMENT:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

const {createStore} = Redux;
const store = createStore(counter);

const render = () => {
    elNumber.innerText = store.getState().number;
    console.log('내가 실행된다!!!');
}

store.subscribe(render);

render();

btnIncrement.addEventListener('click', () => {
    store.dispatch(increment(1));
})

btnDecrement.addEventListener('click', () => {
    store.dispatch(decrement());
})