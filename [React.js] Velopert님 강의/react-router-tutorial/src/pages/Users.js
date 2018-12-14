import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as usersActions from 'redux/modules/users';
import {withDone} from 'react-router-server';

class Users extends Component {
    componentWillMount() {
        // server-side에서 데이터 로딩하기 위해, 데이터 불러오는 작업
        const {UsersActions, data, done} = this.props;
        if (data.length !== 0) return false; // 데이터 있으면 요청하지 않음
        UsersActions.getUsers().then(done, done);
    }

    render() {
        const {data} = this.props;

        const userList = data.map(
            user => <li key={user.id}>{user.name}</li>
        );

        return (
            <div>
                <ul>
                    {userList}
                </ul>
            </div>
        );
    }
}

export default withDone(connect(
    (state) => ({
        data: state.users.data
    }),
    (dispatch) => ({
        UsersActions: bindActionCreators(usersActions, dispatch)
    })
)(Users));