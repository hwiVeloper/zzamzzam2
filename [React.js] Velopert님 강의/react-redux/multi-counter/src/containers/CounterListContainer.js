import CounterList from '../components/CounterList';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {getRandomColor} from '../utils';

// store 안의 state를 props로 연결
const mapStateToProps = (state) => ({
    counters: state.get('counters')
});

// 액션생성 -> dispatch함수 만든 후 -> props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
});

// 데이터, 함수를 props로 붙은 컴포넌트 생성
const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterListContainer;