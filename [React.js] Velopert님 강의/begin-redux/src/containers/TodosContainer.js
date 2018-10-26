// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Todos from 'components/Todos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TodoActions} from 'store/actionCreators';

class TodosContainer extends Component {
    handleChange = (e) => {
        // change input value
        // const {TodoActions} = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        // add item
        // const {input, TodoActions} = this.props;
        const {input} = this.props;
        TodoActions.insert(input); // add
        TodoActions.changeInput(''); // and clear input value
    }

    handleToggle = (id) => {
        // toggle remove line
        // const {TodoActions} = this.props;
        TodoActions.toggle(id);
    }

    handleRemove = (id) => {
        // remove item
        // const {TodoActions} = this.props;
        TodoActions.remove(id);
    }

    render() {
        const {handleChange, handleInsert, handleToggle, handleRemove} = this;
        const {input, todos} = this.props;
        return (
            <Todos 
                input={input}
                todos={todos}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        )
    }
}

export default connect(
    // state를 비구조화 할당
    ({todo}) => ({
        input: todo.get('input'),
        todos: todo.get('todos')
    })
    // (dispatch) => ({
    //     TodoActions: bindActionCreators(todoActions, dispatch)
    // })
)(TodosContainer);