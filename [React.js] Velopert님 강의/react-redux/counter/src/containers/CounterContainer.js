import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {getRandomColor} from '../utils';

// store 안 state를 props로 연결
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

// 액션 생성자로 액션 생성. dispatch하는 함수 생성 후 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter의 Container
// Counter를 어플리케이션의 데이터 레이어와 묶는 역할
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;