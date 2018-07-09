import React, { Component } from 'react';

// 16버전 기준
class LifeCycle extends Component {
    constructor(props) {
        // 컴포넌트가 새로 만들어질 때 실행
        super(props);
    }

    UNSAFE_componentWillMount() {
        // 컴포넌트가 화면에 나타나기 전에 실행된다.
        // 16버전부터 deprecated -> 이름 변경
    }
    componentDidMount() {
        // 컴포넌트가 화면에 나타나기 직전에 실행된다.
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    }
    componentWillReceiveProps(nextProps) {
        // [deprecated]
        // 새로운 props를 받게된 경우에 호출된다.
        // this.props 는 아직 바뀌지 않은 상태
        // state가 props에 의해 변경되는 로직 구성
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.

        // 예시
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 컴포넌트 최적화 시 유용하게 쓰임

        // 기본적으로는 return true
        // return false 하면 업데이트를 안함
        // false라면 render() 호출 안 함.
        // return this.props.checked !== nextProps.checked
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        // [deprecated]
        // shouldComponentUpdate가 true일 때만 호출된다.
        // 애니메이션 효과 초기화, 이벤트 리스너를 없애는 작업이 주가 된다.
        // 이 함수 호출 이후 render()가 호출된다.
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 발생하는 시점
        // 1. render()
        // 2. 실제 DOM 변화 발생
        // 3. componentDidUpdate

        // DOM 업데이트가 일어나기 직전의 시점입니다.
        // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
        // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
        // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데,
        // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
        if (prevState.array !== this.state.array) {
            const {
                scrollTop, scrollHeight
            } = this.list;

            // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
            return {
                scrollTop, scrollHeight
            };
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            const { scrollTop } = this.list;
            if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
            const diff = this.list.scrollHeight - snapshot.scrollHeight;
            this.list.scrollTop += diff;
        }
    }
    componentWillUnmount() {
        // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
    }
}