// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Counter from 'components/Counter';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {CounterActions} from 'store/actionCreators';

class CounterContainer extends Component {
    handleIncrement = () => {
        // this.props.increment();
        // const {CounterActions} = this.props;
        CounterActions.increment();
    }

    handleDecrement = () => {
        // this.props.decrement();
        // const {CounterActions} = this.props;
        CounterActions.decrement();
    }

    render() {
        const {handleIncrement, handleDecrement} = this;
        const {number} = this.props;

        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}
/* 방법1
// props값으로 넘길 상태를 정의
const mapStateToProps = (state) => ({
    number: state.counter.number
});

// props값으로 넘길 함수를 정의
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
});

// 컴포넌트와 리덕스를 연결하는 connect
// 컴포넌트에 props를 넣어주는 함수를 return
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

/* 방법2 
export default connect(
    (state) => ({
        number: state.counter.number
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement())
    })
)(CounterContainer);
*/

export default connect(
    (state) => ({
        number: state.counter.number
    })
    // (dispatch) => ({
    //     CounterActions: bindActionCreators(counterActions, dispatch)
    // })
)(CounterContainer);