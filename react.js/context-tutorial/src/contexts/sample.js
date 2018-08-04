import React, { Component, createContext } from 'react';

const Context = createContext(); // Context 생성

// Context => Provider와 Consumer로 나뉜다.
const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
    state = {
        value: '기본값입니다.'
    }

    // 여기서 actions 라는 객체는 임의로 설정하는 객체.
    // 변화를 일으키는 함수를 전달해줄때, 함수마다 일일히 전달하는 것이 아닌, 객체 하나로 한꺼번에 전달하기 위함이다.
    actions = {
        setValue: (value) => {
            this.setState({value});
        }
    }
    render () {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <Provider value={value}>
                { this.props.children }
            </Provider>
        )
    }
}

// HoC 사용
function useSample(WrappedComponent) {
    return function UseSample(props) {
        return (
            <SampleConsumer>
                {
                    ({state, actions}) => (
                        <WrappedComponent
                            value={state.value}
                            setValue={actions.setValue}
                        />
                    )
                }
            </SampleConsumer>
        )
    }
}

export {
    SampleProvider,
    SampleConsumer,
    useSample,
};