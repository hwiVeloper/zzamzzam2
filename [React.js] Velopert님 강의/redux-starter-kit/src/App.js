import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterActions from './modules/counter';
import * as postActions from './modules/posts';
// import axios from 'axios';

class App extends Component {
    componentDidMount() {
        // axios
        // .get('https://jsonplaceholder.typicode.com/posts/1')
        // .then(response => console.log(response.data));

        // 컴포넌트가 처음 마운트 될 때 현재 number 를 postId 로 사용하여 포스트 내용을 불러옵니다.
        const {number, PostActions} = this.props;
        this.getPost(number);
    }

    componentWillReceiveProps(nextProps) {
        const {PostActions} = this.props;

        // 현재 number와 새로 받을 number가 다를 경우에 요청을 시도
        if (this.props.number !== nextProps.number) {
            this.getPost(nextProps.number);
        }
    }

    getPost = async (postId) => {
        const {PostActions} = this.props;

        try {
            await PostActions.getPost(postId);
            console.log("요청이 완료된 후 실행.");
        } catch (e) {
            console.log("에러 발생!!!");
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                {loading && <h2>로딩중...!</h2>}
                {error
                    ? <h1>에러 발생!!!</h1>
                    : (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);